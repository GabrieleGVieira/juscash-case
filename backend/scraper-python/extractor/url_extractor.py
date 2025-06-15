from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
import re
from datetime import datetime
from config import driver, LoggerService
import time

class URLExtractor:
    def __init__(self):
        self.webdriver = driver()
        self.logger = LoggerService("extractor")

    def run(self, params: dict) -> list[str]:
        self.logger.info("Iniciando etapa de extrair informações do site")

        try:

            self.search_items(params)
            urls = self.get_info_from_all_pages()
            self.logger.info(f"Foram encontrados {len(urls)} urls de publicações no diário oficial")
            return urls
        except Exception as err:
            self.logger.error(f"Erro ao extrair informações do site: {err}")

    def search_items(self, params) -> [None, Exception]:
        self.logger.info("Iniciando scraping de busca...")
        start_date, end_date, keywords, notebook, url = self.get_params_info(params)

        try: 

            self.webdriver.get(url)
            
            self.select_notebook(notebook)

            self.select_date(start_date, end_date)

            self.set_keywords(keywords)

            WebDriverWait(self.webdriver, 20).until(
                EC.presence_of_element_located((By.XPATH, "/html/body/table[4]/tbody/tr/td/div[3]/table[2]/tbody/tr/td/table"))
            )
        except Exception as err:
            raise Exception(f"Um erro ocorreu durante o scraping de busca: {err}")

    def get_info_from_all_pages(self) -> list[str]:
        self.logger.info("Iniciando a coleta de resultados...")

        base_url = "https://dje.tjsp.jus.br"
        urls = set()

        while True:
            try:
                links = self.webdriver.find_elements(By.XPATH, "//a[contains(@onclick, 'consultaSimples')]")
                
                links_urls = self.get_url_from_links(links, base_url)
                urls.update(links_urls)
            except Exception as err:
                self.logger.warning(f"Erro ocorreu durante a coleta de resultados: {err}")
                break
            
            try:
                next_page = self.webdriver.find_element(By.XPATH, "//a[contains(text(), 'Próximo>')]")
                next_page.click()
                time.sleep(5)
            except Exception as err:
                self.logger.warning(f"Erro ocorreu ao passar para próxima página: {err}")
                break
        return urls

    @staticmethod
    def get_url_from_links(links: list[str], base_url: str) -> [list[str], Exception]:
        try: 
            urls = set()
            for link in links:
                    onclick_attr = link.get_attribute("onclick")
                    match = re.search(r"popup\('([^']+)'\)", onclick_attr)
                    if match:
                        relative_url = match.group(1)
                        full_url = base_url + relative_url
                        urls.add(full_url)
            return urls
        except Exception as err:
            raise err

    def select_notebook(self, notebook: str):
        select_elements = self.webdriver.find_elements(By.ID, "cadernos")
        if len(select_elements) > 1:
            select = Select(select_elements[1]) 
            select.select_by_visible_text(notebook)

    def select_date(self, start_date: str, end_date: str): 
        self.webdriver.execute_script(f"document.getElementById('dtInicioString').value = '{start_date}'")
        self.webdriver.execute_script(f"document.getElementById('dtFimString').value = '{end_date}'")

    def set_keywords(self, keywords: str):
        self.webdriver.find_element(by=By.NAME, value="dadosConsulta.pesquisaLivre").send_keys(keywords) 
        self.webdriver.find_element(by=By.XPATH, value='//*[@id="avancado"]/tbody/tr[5]/td[2]/table/tbody/tr/td/input[1]').click()

    @staticmethod
    def get_params_info(params: dict) -> [str, Exception]:
        try:
            end_date = datetime.today().strftime('%d/%m/%Y')
            start_date = params["data_inicial"]
            keywords = params["palavras_chave"]
            notebook = params["caderno"]
            url = params["url"]
            return start_date, end_date, keywords, notebook, url
        except Exception as err:
            raise ValueError("Parâmetros inválidos. Verifique se todos os valores foram enviados.")
