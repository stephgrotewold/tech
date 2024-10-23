from fastapi import FastAPI
from database.database import create_tables

app = FastAPI()

# Crear las tablas en la base de datos al iniciar la aplicación
create_tables()


@app.get("/")
async def read_root():
    return {"message": "Bienvenido a la API de búsqueda segura de refugios"}
