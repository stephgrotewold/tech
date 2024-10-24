from fastapi import FastAPI, Depends, Query
from sqlalchemy.orm import Session
from database.database import SessionLocal
from database.models import Refugio, WorldCity

app = FastAPI()


# Dependencia para obtener la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Endpoint para obtener todos los refugios, filtrando opcionalmente por país o ciudad
@app.get("/refugios")
def get_refugios(city: str = None, country: str = None, db: Session = Depends(get_db)):
    query = db.query(Refugio)

    # Filtrar por ciudad si se proporciona
    if city:
        query = query.join(WorldCity, Refugio.city_id == WorldCity.id).filter(
            WorldCity.city == city
        )

    # Filtrar por país si se proporciona
    if country:
        query = query.join(WorldCity, Refugio.country_id == WorldCity.id).filter(
            WorldCity.country == country
        )

    # Devolver los resultados
    return query.all()
