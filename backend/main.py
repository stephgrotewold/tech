from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database.database import get_db
from database.models import Refugio, WorldCity
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # Update with your frontend's URL and port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/refugios")
def get_refugios(country: str, city: str = None, db: Session = Depends(get_db)):
    query = db.query(Refugio).join(WorldCity, Refugio.city_id == WorldCity.id)

    query = query.filter(WorldCity.country == country)

    if city:
        query = query.filter(WorldCity.city == city)

    refugios = query.all()

    return [
        {
            "id": r.id,
            "nombre": r.nombre,
            "city": r.city,
            "capacidad": r.capacidad,
            "disponible": r.disponible,
        }
        for r in refugios
    ]
