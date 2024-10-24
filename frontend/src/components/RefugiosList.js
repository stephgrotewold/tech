import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const RefugiosList = () => {
  const [refugios, setRefugios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacer la petición al backend
    axios.get('http://127.0.0.1:8000/refugios')
      .then((response) => {
        setRefugios(response.data);  // Asignar los datos de la respuesta al estado
        setLoading(false);  // Detener la carga cuando los datos están listos
      })
      .catch((error) => {
        setError('Error al obtener los refugios');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography variant="h6" align="center">Cargando refugios...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">{error}</Typography>;
  }

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
