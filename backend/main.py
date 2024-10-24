from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

from database.database import get_db
from database.models import Refugio, WorldCity

app = FastAPI()

# Add CORS middleware to allow requests from any origin (or specific domains)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to specific origins if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/refugios")
def get_refugios(country: str, city: str = None, db: Session = Depends(get_db)):
    # Query to join Refugio with WorldCity based on city_id
    query = db.query(Refugio).join(WorldCity, Refugio.city_id == WorldCity.id)

    # Filter by country
    query = query.filter(WorldCity.country == country)

    # Filter by city if provided
    if city:
        query = query.filter(WorldCity.city == city)  # Use 'city' instead of 'name'

    # Fetch all refugios
    refugios = query.all()

    # Convert the SQLAlchemy objects into JSON serializable format
    refugios_data = []
    for r in refugios:
        refugios_data.append(
            {
                "id": r.id,
                "nombre": r.nombre,
                "city": r.city.city,  # Use 'city.city' to reference the column in WorldCity
                "capacidad": r.capacidad,
                "disponible": r.disponible,
                "food": r.food,
                "medicine": r.medicine,
                "address": r.address,
            }
        )

    return jsonable_encoder(refugios_data)
