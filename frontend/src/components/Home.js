import React, { useState } from 'react';
import { TextField, Button, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './Home.css';  // Importa el archivo CSS externo

const Home = () => {
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
    <div className="root">
      {/* Ajuste del título para que sea más visible */}
      <Typography className="headerTitle">SafeHaven</Typography>  {/* Título */}

      <div className="containerWrapper">
        {/* Contenedor del formulario */}
        <Container className="formContainer">
          <Typography variant="h5" gutterBottom>
            Fill out this form
          </Typography>
          <TextField
            label="Name"
            name="name"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Address"
            name="address"
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            name="phone"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormControl fullWidth>
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
          <FormControl fullWidth>
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
          <Button fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Container>

        {/* Contenedor de las ubicaciones */}
        <Container className="locationsContainer">
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
      </div>

      <footer className="footer">
        SafeHaven All rights reserved
      </footer>
    </div>
  );
};

export default Home;