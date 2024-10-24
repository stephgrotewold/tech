from sqlalchemy.orm import Session
from database.database import SessionLocal
from database.models import Refugio, WorldCity

# Crear una sesión de base de datos
db = SessionLocal()

# Listas de países y ciudades específicas
countries = ["Ukraine", "Venezuela"]
specific_cities = [
    "Gaza"
]  # Gaza no está en un país, por lo que lo tratamos por separado


# Función para crear refugios
def create_refugios_for_cities():
    # Obtener todas las ciudades de los países especificados
    cities = db.query(WorldCity).filter(WorldCity.country.in_(countries)).all()

    # Añadir Gaza como ciudad específica
    gaza_city = db.query(WorldCity).filter(WorldCity.city == "Gaza").first()
    if gaza_city:
        cities.append(gaza_city)

    refugios = []

    # Crear un refugio para cada ciudad
    for city in cities:
        refugio = Refugio(
            city_id=city.id,
            country_id=city.id,  # Lo usamos aquí para simplificar, ya que la relación es la misma
            nombre=f"Refugio en {city.city}",
            capacidad=100,  # Puedes ajustar la capacidad según sea necesario
            disponible="YES" if city.country == "Ukraine" else "NO",
        )
        refugios.append(refugio)
        db.add(refugio)

    # Confirmar los cambios
    db.commit()


# Ejecutar la función para poblar los refugios
create_refugios_for_cities()

# Cerrar la sesión
db.close()

print("Refugios creados con éxito.")
