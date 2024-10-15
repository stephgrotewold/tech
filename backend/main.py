from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Bienvenido a la API de búsqueda segura de refugios"}