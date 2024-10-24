import pandas as pd
from sqlalchemy.orm import Session
from database.database import SessionLocal
from database.models import *


# Ruta del archivo CSV (asegúrate de que esté en la carpeta principal del proyecto)
file_path = "worldcities.csv"

# Cargar el archivo CSV usando pandas
worldcities_df = pd.read_csv(file_path)

# Crear una sesión de base de datos
db = SessionLocal()


# Insertar cada fila del DataFrame en la base de datos
for index, row in worldcities_df.iterrows():
    # Asegurarse de que 'iso2' no sea NULL, asignando un valor predeterminado si lo es
    iso2_value = row["iso2"] if pd.notna(row["iso2"]) else "XX"
    city_ascii_value = row["city_ascii"] if pd.notna(row["city_ascii"]) else row["city"]

    city = WorldCity(
        id=row["id"],
        city=row["city"],
        city_ascii=city_ascii_value,  # Usamos el valor de 'city' si 'city_ascii' es NULL
        lat=row["lat"],
        lng=row["lng"],
        country=row["country"],
        iso2=iso2_value,  # Usamos el valor predeterminado si 'iso2' es NULL
        iso3=row["iso3"],
        admin_name=row["admin_name"],
        capital=row["capital"],
        population=row["population"],
    )
    db.add(city)

# Confirmar los cambios
db.commit()

# Cerrar la sesión
db.close()
