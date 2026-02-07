from sqlmodel import Field, Relationship
from app.models.base import BaseIDModel
from uuid import UUID
from typing import Optional

class Task(BaseIDModel, table=True):
    title: str = Field(min_length=1, nullable=False)
    description: Optional[str] = Field(default=None)
    is_completed: bool = Field(default=False)
    user_id: UUID = Field(foreign_key="user.id", index=True, nullable=False)
