from pydantic import BaseModel
from typing import Optional, List

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str
    class Config:
        orm_mode = True

class MovieCreate(BaseModel):
    title: str
    description: str
    genre: str

class MovieOut(BaseModel):
    id: int
    title: str
    description: str
    genre: str
    class Config:
        orm_mode = True

class RatingCreate(BaseModel):
    movie_id: int
    score: float

class RatingOut(BaseModel):
    id: int
    movie_id: int
    score: float
    class Config:
        orm_mode = True 