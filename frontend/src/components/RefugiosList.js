// src/components/RefugiosList.js
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const RefugiosList = () => {
  const [refugios, setRefugios] = useState([]);

  // Datos simulados (mock)
  const mockData = [
    { id: 1, nombre: "Refugio Central", capacidad: 100 },
    { id: 2, nombre: "Refugio del Norte", capacidad: 150 },
    { id: 3, nombre: "Refugio Sur", capacidad: 200 },
  ];

  useEffect(() => {
    // Simulamos la obtención de datos del backend usando un timeout
    setTimeout(() => {
      setRefugios(mockData);
    }, 1000); // Simulación de un delay en la respuesta de la API
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Refugios Disponibles
      </Typography>
      <List>
        {refugios.map(refugio => (
          <ListItem key={refugio.id}>
            <ListItemText
              primary={refugio.nombre}
              secondary={`Capacidad: ${refugio.capacidad} personas`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RefugiosList;