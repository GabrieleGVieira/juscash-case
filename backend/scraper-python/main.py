from extractor import URLExtractor
from extractor import PDFExtractor
from repository import ProcessRepo
from config import SessionLocal, LoggerService

class ScraperService:
    def __init__(self):
        db = SessionLocal()
        self.logger = LoggerService("main")
        self.url_extractor = URLExtractor()
        self.pdf_extractor = PDFExtractor()
        self.process_repo = ProcessRepo(db)
        

    def run(self):

        self.logger.setup()

        self.logger.info("Iniciando web scraping...")

        params = {
            "url" : "https://dje.tjsp.jus.br/cdje/index.do",
            "caderno": "caderno 3 - Judicial - 1ª Instância - Capital - Parte I",
            "palavras_chave" : '"RPV" E "pagamento pelo INSS"',
            "data_inicial" : "01/05/2025",
        }

        self.logger.info(f"Parâmetros atuais de busca: {params}")

        try: 
            urls = self.url_extractor.run(params)
            self.logger.info("Iniciando etapa de extrair informações do pdf")
            for url in urls:
                process = self.pdf_extractor.run(url)
                self.process_repo.save_process_list(process)
        except Exception as err:
            self.logger.error(f"Scraper paralizado com erro: {err}")
        finally:
            self.logger.info("Scraper finalizado")

if __name__ == "__main__":
    ScraperService().run()