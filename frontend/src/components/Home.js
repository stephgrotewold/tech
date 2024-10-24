import React, { useState } from 'react';
import { TextField, Button, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

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

  const handleClear = () => {
    setFormData({
      name: '',
      address: '',
      phone: '',
      service: '',
      country: '',
    });
  };

  return (
    <div style={{
      backgroundImage: "url('/SafeHaven.png')", // Correct logo path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div className="root">
        {/* Logo */}
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <img src="/logo.png" alt="SafeHaven Logo" style={{ height: '50px' }} />
        </div>
      
        {/* Title */}
        <Typography 
          variant="h2" 
          align="center" 
          style={{ marginTop: '1px', fontWeight: 'bold', color: 'white' }}
        >
          SafeHaven
        </Typography>

        {/* Form and Locations */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          paddingTop: '30px',
          paddingBottom: '50px',
        }}>
          {/* Form */}
          <Container style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            padding: '20px',
            width: '45%',
          }}>
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
              style={{ marginBottom: '10px' }}
            />
            <TextField
              label="Address"
              name="address"
              fullWidth
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
            />
            <FormControl fullWidth style={{ marginBottom: '10px' }}>
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
            <FormControl fullWidth style={{ marginBottom: '20px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ width: '45%' }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
                style={{ width: '45%' }}
              >
                Clear
              </Button>
            </div>
          </Container>

          {/* Locations */}
          <Container style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            padding: '20px',
            width: '45%',
          }}>
            <Typography variant="h5" gutterBottom>
              Locations
            </Typography>
            <Typography>123 Oak St - Food</Typography>
            <Typography>54 Test Av, Wells - 5 open spots</Typography>
            <Typography>9 Cornelia St, NY - Medical Supplies</Typography>
            <Typography>45 Oak St - Food</Typography>
            <Typography>90 Hey Av, Wells - 5 open spots</Typography>
            <Typography>12 Cornelia St, NY - Medical Supplies</Typography>
            <Typography>123 Oak St - Food</Typography>
            <Typography>54 Test Av, Wells - 5 open spots</Typography>
            <Typography>9 Cornelia St, NY - Medical Supplies</Typography>
            <Typography>45 Oak St - Food</Typography>
            <Typography>90 Hey Av, Wells - 5 open spots</Typography>
            <Typography>12 Cornelia St, NY - Medical Supplies</Typography>
            <Typography>45 Oak St - Food</Typography>
            <Typography>90 Hey Av, Wells - 5 open spots</Typography>
            <Typography>12 Cornelia St, NY - Medical Supplies</Typography>
            <Typography>12 Cornelia St, NY - Medical Supplies</Typography>
          </Container>
        </div>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#7a8682',
          color: 'white',
          textAlign: 'center',
          padding: '10px 0',
          position: 'fixed',
          bottom: '0',
          width: '100%',
        }}>
          SafeHaven All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default Home;