// src/components/RefugioDetalle.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const RefugioDetalle = () => {
  const { id } = useParams();
  const [refugio, setRefugio] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/refugios/${id}`)
      .then(response => {
        setRefugio(response.data);
      })
      .catch(error => {
        console.error("Error al obtener el detalle del refugio:", error);
      });
  }, [id]);

  if (!refugio) {
    return <div>Cargando...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {refugio.nombre}
      </Typography>
      <Typography variant="body1">
        <strong>Dirección:</strong> {refugio.direccion}
      </Typography>
      <Typography variant="body1">
        <strong>Capacidad:</strong> {refugio.capacidad} personas
      </Typography>
      <Typography variant="body1">
        <strong>Descripción:</strong> {refugio.descripcion}
      </Typography>
      <Typography variant="body1">
        <strong>Disponible:</strong> {refugio.disponible ? 'Sí' : 'No'}
      </Typography>
    </Container>
  );
};

export default RefugioDetalle;