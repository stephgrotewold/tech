from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Refugio(Base):
    __tablename__ = "refugios"

    id = Column(Integer, primary_key=True, index=True)
    city_id = Column(Integer, ForeignKey("worldcities.id"), nullable=False)
    country_id = Column(Integer, ForeignKey("worldcities.id"), nullable=False)
    nombre = Column(String(100), nullable=False)
    capacidad = Column(Integer, nullable=False)
    disponible = Column(String(10), nullable=False)

    # Relación con la tabla worldcities, especificando explícitamente las claves foráneas
    city = relationship(
        "WorldCity", foreign_keys=[city_id], back_populates="refugios_ciudad"
    )
    country = relationship(
        "WorldCity", foreign_keys=[country_id], back_populates="refugios_pais"
    )


class WorldCity(Base):
    __tablename__ = "worldcities"

    id = Column(Integer, primary_key=True, index=True)
    city = Column(String(100), nullable=False)
    city_ascii = Column(String(100), nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    country = Column(String(100), nullable=False)
    iso2 = Column(String(2), nullable=False)
    iso3 = Column(String(3), nullable=False)
    admin_name = Column(String(100), nullable=True)
    capital = Column(String(10), nullable=True)
    population = Column(Integer, nullable=True)

    # Relación con la tabla Refugio
    refugios_ciudad = relationship(
        "Refugio", foreign_keys=[Refugio.city_id], back_populates="city"
    )
    refugios_pais = relationship(
        "Refugio", foreign_keys=[Refugio.country_id], back_populates="country"
    )
