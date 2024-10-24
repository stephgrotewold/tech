import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';
import RefugiosList from './RefugiosList'; // Import RefugiosList

const FormularioSolicitud = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    service: '',
    phone_number: ''
  });

  const [errors, setErrors] = useState({});
  const [showRefugios, setShowRefugios] = useState(false); // Control visibility of RefugiosList

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.country) tempErrors.country = "Country is required"; // Only country is required
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = validateForm();
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      axios.post('http://localhost:8000/solicitudes/', formData)
        .then(response => {
          alert('Request submitted successfully');
          setShowRefugios(true); // Show RefugiosList after successful form submission
        })
        .catch(error => {
          console.error("Error submitting the request:", error);
        });
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Request Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
        />
        <TextField
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          fullWidth
          error={!!errors.country}
          helperText={errors.country}
          margin="normal"
          required
        />
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          error={!!errors.city}
          helperText={errors.city}
          margin="normal"
        />
        <TextField
          label="Service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          fullWidth
          error={!!errors.service}
          helperText={errors.service}
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          fullWidth
          error={!!errors.phone_number}
          helperText={errors.phone_number}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>

      {/* Show RefugiosList if the form is successfully submitted */}
      {showRefugios && <RefugiosList />}
    </Container>
  );
};

export default FormularioSolicitud;
