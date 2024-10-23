// src/components/Home.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url("/SafeHaven.png")',  // Asegúrate de que la ruta sea correcta
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.90)',  // Fondo blanco con menos transparencia
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    marginRight: '40px',
    width: '400px',  // Ajuste de ancho
  },
  locationsContainer: {
    background: 'rgba(255, 255, 255, 0.90)',  // Fondo blanco con menos transparencia para mayor contraste
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    width: '400px',  // Ajuste de ancho
  },
  formField: {
    marginBottom: '20px',
  },
  submitButton: {
    marginTop: '20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#005bb5',
    },
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f1f1f1',
  },
});

const Home = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    service: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.formContainer}>
        <Typography variant="h5" gutterBottom>
          Enter Name
        </Typography>
        <TextField
          className={classes.formField}
          label="Name"
          name="name"
          fullWidth
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          className={classes.formField}
          label="Address"
          name="address"
          fullWidth
          variant="outlined"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          className={classes.formField}
          label="Phone Number"
          name="phone"
          fullWidth
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
        />
        <FormControl fullWidth className={classes.formField}>
          <InputLabel>Select Service</InputLabel>
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Medical Supplies">Medical Supplies</MenuItem>
            <MenuItem value="Shelter">Shelter</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className={classes.formField}>
          <InputLabel>Select Country</InputLabel>
          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
          </Select>
        </FormControl>
        <Button className={classes.submitButton} fullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </Container>

      <Container className={classes.locationsContainer}>
        <Typography variant="h5" gutterBottom>
          Locations
        </Typography>
        <Typography>123 Oak St - Food</Typography>
        <Typography>54 Test Av, Wells - 5 open spots</Typography>
        <Typography>9 Cornelia St, NY - Medical Supplies</Typography>
        <Typography>45 Oak St - Food</Typography>
        <Typography>90 Hey Av, Wells - 5 open spots</Typography>
        <Typography>12 Cornelia St, NY - Medical Supplies</Typography>
      </Container>

      <footer className={classes.footer}>
        SafeHaven All rights reserved
      </footer>
    </div>
  );
};

export default Home;