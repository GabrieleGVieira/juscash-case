from sqlalchemy import Column, Integer, Date, Text, Numeric, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from config import Base

class ProcessModel(Base):
    __tablename__ = 'processo'

    id = Column(Integer, primary_key=True, autoincrement=True)
    hash_id = Column(String(32), unique=True, nullable=False)  
    data_disponibilizacao = Column(Date, nullable=False)
    numero_processo = Column(String(32), nullable=False)
    autores = Column(String(32), nullable=True)
    advogados = Column(String(32), nullable=True)
    reu = Column(String(32), nullable=True)
    conteudo_publicacao = Column(String(32), nullable=True)
    valor_principal_bruto_liquido = Column(String(32), nullable=True)
    juros_moratorios = Column(String(32), nullable=True)
    honorarios_adv = Column(String(32), nullable=True)
