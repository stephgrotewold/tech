from database.database import SessionLocal
from database.models import Refugio, WorldCity
import random


def create_refugios():
    db = SessionLocal()

    # Fetch the cities from the worldcities table
    cities = (
        db.query(WorldCity)
        .filter(
            WorldCity.city.in_(["Caracas", "Maracaibo", "Kyiv", "Kharkiv", "Odesa"])
        )
        .all()
    )

    # Create a dictionary mapping city names to city objects (including country_id)
    city_dict = {city.city: {"id": city.id, "country": city.country} for city in cities}

    # Refugios data to create, using both city_id and country_id
    refugios_data = [
        {
            "city_id": city_dict["Caracas"]["id"],
            "country_id": city_dict["Caracas"]["country"],
            "nombre": "Caracas Central Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Avenida Bolívar 123",
        },
        {
            "city_id": city_dict["Caracas"]["id"],
            "country_id": city_dict["Caracas"]["country"],
            "nombre": "Caracas West Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Calle Libertador 45",
        },
        {
            "city_id": city_dict["Caracas"]["id"],
            "country_id": city_dict["Caracas"]["country"],
            "nombre": "Caracas East Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Avenida Urdaneta 67",
        },
        {
            "city_id": city_dict["Maracaibo"]["id"],
            "country_id": city_dict["Maracaibo"]["country"],
            "nombre": "Maracaibo Central Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Calle 23 de Enero",
        },
        {
            "city_id": city_dict["Kyiv"]["id"],
            "country_id": city_dict["Kyiv"]["country"],
            "nombre": "Kyiv Central Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Вулиця Хрещатик 10",
        },
        {
            "city_id": city_dict["Kyiv"]["id"],
            "country_id": city_dict["Kyiv"]["country"],
            "nombre": "Kyiv West Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Вулиця Лютеранська 25",
        },
        {
            "city_id": city_dict["Kyiv"]["id"],
            "country_id": city_dict["Kyiv"]["country"],
            "nombre": "Kyiv East Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Проспект Перемоги 5",
        },
        {
            "city_id": city_dict["Kharkiv"]["id"],
            "country_id": city_dict["Kharkiv"]["country"],
            "nombre": "Kharkiv Central Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Вулиця Сумська 100",
        },
        {
            "city_id": city_dict["Kharkiv"]["id"],
            "country_id": city_dict["Kharkiv"]["country"],
            "nombre": "Kharkiv West Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Вулиця Полтавський Шлях 50",
        },
        {
            "city_id": city_dict["Odesa"]["id"],
            "country_id": city_dict["Odesa"]["country"],
            "nombre": "Odesa Central Shelter",
            "capacidad": random.randint(150, 300),
            "disponible": random.choice([True, False]),
            "food": random.choice(["FOOD AVAILABLE", "NO FOOD"]),
            "medicine": random.choice(["MEDICINE AVAILABLE", "NO MEDICINE"]),
            "address": "Дерибасівська вулиця 12",
        },
    ]

    # Insert the refugios into the database
    for refugio_data in refugios_data:
        refugio = Refugio(**refugio_data)
        db.add(refugio)

    # Commit the transaction
    db.commit()


# Run the function to create refugios
if __name__ == "__main__":
    create_refugios()
