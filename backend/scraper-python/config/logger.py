import logging
import logging.config
import os

LOGS_DIR = "logs"
os.makedirs(LOGS_DIR, exist_ok=True)

LOG_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,

    "formatters": {
        "standard": {
            "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
        },
    },

    "handlers": {
        "console": {
            "level": "INFO",
            "class": "logging.StreamHandler",
            "formatter": "standard",
        },
        "info_file": {
            "level": "INFO",
            "class": "logging.FileHandler",
            "filename": f"{LOGS_DIR}/info.log",
            "formatter": "standard",
        },
        "error_file": {
            "level": "ERROR",
            "class": "logging.FileHandler",
            "filename": f"{LOGS_DIR}/error.log",
            "formatter": "standard",
        },
    },

    "loggers": {
        "extractor": {
            "handlers": ["console", "info_file", "error_file"],
            "level": "INFO",
            "propagate": False,
        },
        "repository": {
            "handlers": ["console", "info_file", "error_file"],
            "level": "INFO",
            "propagate": False,
        },
        "main": {
            "handlers": ["console", "info_file", "error_file"],
            "level": "INFO",
            "propagate": False,
        },
    },
}

class LoggerService:
    def __init__(self, name: str):
        self.logger = logging.getLogger(name)

    def info(self, message):
        self.logger.info(message)

    def warning(self, message):
        self.logger.warning(message)

    def error(self, message, exc: Exception = None):
        if exc:
            self.logger.error(f"{message} - Exception: {str(exc)}", exc_info=True)
        else:
            self.logger.error(message)
    def setup(self):
        logging.config.dictConfig(LOG_CONFIG)
