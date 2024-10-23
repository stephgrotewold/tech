// src/components/FormularioSolicitud.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';

const FormularioSolicitud = () => {
  const [formData, setFormData] = useState({
    ciudad_id: '',
    recurso_necesitado: '',
    cantidad_personas: '',
    metodo_comunicacion: '',
    detalles: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.ciudad_id) tempErrors.ciudad_id = "Este campo es obligatorio";
    if (!formData.recurso_necesitado) tempErrors.recurso_necesitado = "Este campo es obligatorio";
    if (!formData.cantidad_personas || formData.cantidad_personas <= 0) tempErrors.cantidad_personas = "Debe ser un número mayor que 0";
    if (!formData.metodo_comunicacion) tempErrors.metodo_comunicacion = "Este campo es obligatorio";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = validateForm();
    setErrors(tempErrors);
    
    if (Object.keys(tempErrors).length === 0) {
      axios.post('http://localhost:8000/solicitudes/', formData)
        .then(response => {
          alert('Solicitud enviada exitosamente');
        })
        .catch(error => {
          console.error("Error al enviar la solicitud:", error);
        });
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Formulario de Solicitud
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ciudad ID"
          name="ciudad_id"
          value={formData.ciudad_id}
          onChange={handleChange}
          fullWidth
          error={!!errors.ciudad_id}
          helperText={errors.ciudad_id}
          margin="normal"
        />
        <TextField
          label="Recurso Necesitado"
          name="recurso_necesitado"
          value={formData.recurso_necesitado}
          onChange={handleChange}
          fullWidth
          error={!!errors.recurso_necesitado}
          helperText={errors.recurso_necesitado}
          margin="normal"
        />
        <TextField
          label="Cantidad de Personas"
          type="number"
          name="cantidad_personas"
          value={formData.cantidad_personas}
          onChange={handleChange}
          fullWidth
          error={!!errors.cantidad_personas}
          helperText={errors.cantidad_personas}
          margin="normal"
        />
        <TextField
          label="Método de Comunicación"
          name="metodo_comunicacion"
          value={formData.metodo_comunicacion}
          onChange={handleChange}
          fullWidth
          error={!!errors.metodo_comunicacion}
          helperText={errors.metodo_comunicacion}
          margin="normal"
        />
        <TextField
          label="Detalles"
          name="detalles"
          value={formData.detalles}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar Solicitud
        </Button>
      </form>
    </Container>
  );
};

export default FormularioSolicitud;