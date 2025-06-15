from sqlalchemy.orm import Session
from models import ProcessModel
from sqlalchemy.dialects.postgresql import insert

class ProcessRepo:
    def __init__(self, db: Session):
        self.db = db

    def save_process_list(self, processes: list[ProcessModel]):
        try:
            process_dicts = [self.model_to_dict(p) for p in processes]
            stmt = insert(ProcessModel).values(process_dicts)
            stmt = stmt.on_conflict_do_nothing(index_elements=["hash_id"])

        except Exception as err:
            self.db.rollback()
            raise err
    @staticmethod
    def model_to_dict(model):
        return {column.name: getattr(model, column.name) for column in model.__table__.columns}

