from sqlmodel import Field
from app.models.base import BaseIDModel

class User(BaseIDModel, table=True):
    email: str = Field(unique=True, index=True, nullable=False)
    name: str = Field(nullable=False)
    password_hash: str = Field(nullable=False)
