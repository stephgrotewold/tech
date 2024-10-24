import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const RefugiosList = () => {
  const [refugios, setRefugios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API call to fetch the refugios from the backend
    axios.get('http://127.0.0.1:8000/refugios')
      .then((response) => {
        setRefugios(response.data);  // Store the fetched data in state
        setLoading(false);  // Data is loaded, stop loading
      })
      .catch((error) => {
        setError('Failed to fetch refugios');
        setLoading(false);
      });
  }, []);  // This useEffect runs once when the component is mounted

  if (loading) {
    return <Typography variant="h6" align="center">Loading refugios...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">{error}</Typography>;
  }

  if (refugios.length === 0) {
    return <Typography variant="h6" align="center">No refugios available</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Available Refugios
      </Typography>
      <List>
        {refugios.map(refugio => (
          <ListItem key={refugio.id}>
            <ListItemText
              primary={refugio.nombre}
              secondary={`Capacity: ${refugio.capacidad} people`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RefugiosList;
