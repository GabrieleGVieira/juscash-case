from config import driver
import requests
from models import ProcessModel
from urllib.parse import urlparse, parse_qs, urlencode
import pdfplumber
import locale 
import re
from datetime import datetime
import hashlib
from config import LoggerService

class PDFExtractor:

    def __init__(self):
        self.logger = LoggerService("extractor")

    def run(self, url) -> list[ProcessModel]:

        try: 
            pdf_url = self.transform_url_pdf(url)
            self.download_and_save_pdf(pdf_url)
            pdf_text = self.get_pdf_text("pagina.pdf")
            processes_list = self.extract_pdf_infos(pdf_text)
            return processes_list
        except Exception as err:
            self.logger.error(f"Erro ao extrair informações do pdf: {err}")

    @staticmethod
    def transform_url_pdf(url) -> [str, Exception]:
        try:

            parametros = parse_qs(urlparse(url).query)
            parametros['uuidCaptcha'] = ['']

            return 'https://dje.tjsp.jus.br/cdje/getPaginaDoDiario.do?' + urlencode({k: v[0] for k, v in parametros.items()})
        except Exception as err:
            raise Exception(f"Erro ao montar a url do pdf: {err}")

    @staticmethod
    def download_and_save_pdf(url: str) -> [None, Exception]:
        try:
            response = requests.get(url)
            if response.status_code != 200:
                raise ConnectionError(f"Falha ao baixar o PDF. Status code: {response.status_code}")
            with open("pagina.pdf", "wb") as f:
                f.write(response.content)
        except Exception as err:
            raise Exception(f"Erro ao baixar e salvar o pdf: {err}")

    @staticmethod
    def get_pdf_text(path: str) -> [str, Exception]:
        try:
            text = ""
            with pdfplumber.open(path) as pdf:
                for pg in pdf.pages:
                    pg_text = pg.extract_text()
                    if pg_text:
                        text += pg_text + "\n"
            return text
        except Exception as err:
            raise Exception(f"erro ao pegar texto do pdf: {err}")

    def extract_pdf_infos(self, pdf_text: str) -> [list[ProcessModel], Exception]:
        try:
            processes_list = []

            availability_date = self.get_availability(pdf_text)
            processes = pdf_text.split("\nProcesso ", -1)

            for process in processes:
                keywords = ["rpv", "pagamento pelo inss"]
                if all(word in process.lower() for word in keywords):
                        process_number = self.get_process_number(process)
                        authors = self.get_authors(process)
                        lawyers = self.get_lawyers(process)
                        principal_value = self.get_principal_value(process)
                        default_interest = self.get_default_interest(process)
                        att_fees = self.get_att_fees(process)

                        date = datetime.strptime(availability_date, "%d/%m/%Y").date()

                        process = ProcessModel(
                                hash_id=self.create_hash_id(process_number, availability_date),
                                data_disponibilizacao = date,
                                numero_processo=process_number,
                                autores = authors,
                                advogados = lawyers,
                                conteudo_publicacao = process,
                                valor_principal_bruto_liquido = principal_value,
                                juros_moratorios = default_interest,
                                honorarios_adv = att_fees,
                                reu="Instituto Nacional do Seguro Social - INSS"
                        )

                        processes_list.append(process)
            return processes_list
        except Exception as err:
            raise Exception(f"Erro ao extrair informações do pdf: {err}")

    @staticmethod
    def get_availability(text: str) -> [str, None, Exception]:
        try:
            template = r"Disponibilização:\s*(\w+-feira),\s*(\d{1,2}) de (\w+) de (\d{4})"
            match = re.search(template, text, re.IGNORECASE)
            if match:
                _, day, month, year = match.groups()
                locale.setlocale(locale.LC_TIME, 'pt_BR.UTF-8')
                date_str = f"{day} de {month} de {year}"
                date_obj = datetime.strptime(date_str, "%d de %B de %Y")
                return date_obj.strftime("%d/%m/%Y")
            return None
        except Exception as err:
            raise Exception(f"Erro ao pegar data de disponibilização: {err}")

    @staticmethod
    def get_process_number(text: str) -> [str, None, Exception]:
        try:
            template = r'\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}'

            res = re.search(template, text)

            if res:
                return res.group()
            return None
        except Exception as err:
            raise Exception(f"Erro ao pegar numero do processo: {err}")

    @staticmethod
    def get_principal_value(text: str) -> [str, None, Exception]:
        try: 
            template = r'R\$\s*\d{1,3}(?:\.\d{3})*,\d{2}\s*-\s*principal bruto/líquido;'
            res = re.findall(template, text)
            if res:
                return res[0].split(" -", -1)[0]
            return None
        except Exception as err:
            raise Exception(f"Erro ao pegar valor principal bruto/líquido: {err}")

    @staticmethod
    def get_default_interest(text: str) -> [str, None, Exception]:
        try:
            template = r'R\$\s*\d{1,3}(?:\.\d{3})*,\d{2}\s*-\s*juros moratórios;'
            res = re.findall(template, text)
            if res:
                return res[0].split(" -", -1)[0]
            return None
        except Exception as err:
            raise Exception(f"Erro ao pegar juros moratórios: {err}")

    @staticmethod
    def get_att_fees(text: str) -> [str, None, Exception]:
        try:
            template = r'R\$\s*\d{1,3}(?:\.\d{3})*,\d{2}\s*-\s*honorários advocatícios'
            res = re.findall(template, text)
            if res:
                return res[0].split(" -", -1)[0]
            return None
        except Exception as err:
            raise Exception(f"Erro ao pegar honorários dos advogados: {err}")

    @staticmethod
    def get_authors(text: str) -> [str, None, Exception]:
        try:
            auth = text.split(" - ", 5)
            if len(auth) > 3:
                return auth[3]
            return None
        except Exception as err:
            raise Exception(f"Erro eo pegar autores do process: {err}")

    @staticmethod
    def get_lawyers(text: str) -> [str, None, Exception]:
        try:
            match = re.search(r"ADV:\s*(.*)", text, re.DOTALL)

            if match:
                lawyers = match.group(1).strip()
                return lawyers
            return None
        except Exception as err:
            raise Exception(f"Erro ao pegar advogados do processo: {err}")

    @staticmethod
    def create_hash_id(numero_processo: str, data_disponibilizacao: str) -> [str, Exception]:
        try:
            text = f"{numero_processo}-{data_disponibilizacao}"
            hash_id = hashlib.md5(text.encode('utf-8')).hexdigest()
            return hash_id
        except Exception as err:
            raise Exception(f"Erro ao criar hash_id: {err}")



