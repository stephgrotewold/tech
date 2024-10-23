from sqlalchemy import Column, String, Float, BigInteger, ForeignKey, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


# modelo de worldcities
class WorldCity(Base):
    __tablename__ = "worldcities"

    id = Column(BigInteger, primary_key=True, index=True)
    city = Column(String(100), nullable=False)
    city_ascii = Column(String(100), nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    country = Column(String(100), nullable=False)
    iso2 = Column(String(2), nullable=False)
    iso3 = Column(String(3), nullable=False)
    admin_name = Column(String(100), nullable=True)
    capital = Column(String(10), nullable=True)
    population = Column(BigInteger, nullable=True)


# modelo de refugios
class Refugio(Base):
    __tablename__ = "refugios"

    id = Column(Integer, primary_key=True, index=True)
    city_id = Column(BigInteger, ForeignKey("worldcities.id"), nullable=False)
    nombre = Column(String(100), nullable=False)
    capacidad = Column(Integer, nullable=False)
    disponible = Column(String(10), nullable=False)  # Ejemplo: 'Sí' o 'No'

    # Relación con la tabla worldcities
    city = relationship("WorldCity", back_populates="refugios")
