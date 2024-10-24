import React from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

// RefugiosList now receives refugios as a prop from Home.js
const RefugiosList = ({ refugios }) => {
  if (refugios.length === 0) {
    return <Typography variant="h6" align="center">No refugios found for the selected country and city</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        style={{ fontWeight: 'bold', fontSize: '2rem', color: '#333', marginTop: '20px' }}
      >
        Available Refugios
      </Typography>
      <List>
        {refugios.map(refugio => (
          <ListItem key={refugio.id} style={{ marginBottom: '10px' }}>
            <ListItemText
              primary={
                <Typography 
                  variant="h6" 
                  style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#444' }}
                >
                  {refugio.nombre}
                </Typography>
              }
              secondary={
                <Typography 
                  variant="body1" 
                  style={{ fontSize: '1rem', color: '#666' }}
                >
                  Capacity: {refugio.capacidad} people, Available: {refugio.disponible ? 'Yes' : 'No'}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RefugiosList;
