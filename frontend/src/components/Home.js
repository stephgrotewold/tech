import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    service: '',
    country: '',
  });

  const [news, setNews] = useState([]); // For storing news articles

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
      city: '',
      phone: '',
      service: '',
      country: '',
    });
  };

  // Fetch news on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_571303b613de9737a5a28fab08f4a2382c8ca&q=Gaza');
        setNews(response.data.results); // Set the news articles
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={{
      backgroundColor: '#7a8682',  // The gray background color
      minHeight: '100vh',  // Ensures that the background covers the full height of the viewport
      paddingBottom: '50px',  // Padding to give space before the footer
    }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: '#7a8682', // Your header color
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="SafeHaven Logo" style={{ height: '50px', marginRight: '20px' }} />
          <Typography 
            variant="h2" 
            align="center" 
            style={{ fontWeight: 'bold', color: 'white' }}
          >
            SafeHaven
          </Typography>
        </div>
      </div>

      {/* Main Section with Background Image */}
      <div style={{
        backgroundImage: "url('/SafeHaven.png')", // Background image for forms and locations
        backgroundSize: 'cover',  
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',  
        paddingTop: '50px',
        paddingBottom: '50px',  // Ensure space between this section and the news section
      }}>
        <div className="root">
          {/* Form and Locations */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            paddingBottom: '50px',
            marginTop: '30px',
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
                label="City"
                name="city"
                fullWidth
                variant="outlined"
                value={formData.city}
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
        </div>
      </div>

      {/* Title for the News Section */}
    <Typography variant="h4" align="center" style={{ color: 'white', marginBottom: '20px', marginTop: '50px', fontWeight: 'bold' }}>
      Latest Updates ↓
    </Typography>

      {/* News Section with Solid Background */}
      <Container style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // The gray background color you want for the news section
        borderRadius: '10px',
        padding: '20px',
        width: '90%',
        marginTop: '50px',
      }}>
        
        <Typography variant="h5" gutterBottom>
          Latest News on Gaza
        </Typography>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index}>
              <Typography variant="h6">{article.title}</Typography>
              <Typography variant="body2">{article.description}</Typography>
              <Typography variant="caption" color="textSecondary">Published on: {article.pubDate}</Typography>
              <hr />
            </div>
          ))
        ) : (
          <Typography>No news available</Typography>
        )}
      </Container>

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
  );
};

export default Home;