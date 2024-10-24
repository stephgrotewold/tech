import React from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

// RefugiosList now receives refugios as a prop from Home.js
const RefugiosList = ({ refugios }) => {
  if (refugios.length === 0) {
    return <Typography variant="h6" align="center">No refugios found for the selected country and city</Typography>;
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
              secondary={`Capacity: ${refugio.capacidad} people, Available: ${refugio.disponible ? 'Yes' : 'No'}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RefugiosList;
