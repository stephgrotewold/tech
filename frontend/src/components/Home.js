import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, MenuItem, Select, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import RefugiosList from './RefugiosList';


const Home = () => {
  const [formData, setFormData] = useState({
    city: '',
    phone: '',
    service: '',
    country: '',  // Keep only the dropdown country
  });

  const [news, setNews] = useState([]);  // For storing news articles
  const [locations, setLocations] = useState([]);  // For storing locations (refugios)
  const [showLocations, setShowLocations] = useState(false);  // Control whether to show locations

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Make the API call with axios
    axios.get('http://localhost:8000/refugios', {
      params: { 
        country: formData.country.trim(),  // required field
        city: formData.city.trim()          // optional field
      }
    })
    .then(response => {
      console.log(response.data);  // Log the response data
      setLocations(response.data);  // Set the locations state with the received data
      setShowLocations(true);       // Show the locations container
    })
    .catch(error => {
      console.error("Error fetching refugios:", error);
    });
  };

  const handleClear = () => {
    setFormData({
      city: '',
      phone: '',
      service: '',
      country: '',
    });
    setShowLocations(false);  // Hide the locations table
  };

  
  // Fetch news on component mount
  //  useEffect(() => {
  //    const fetchNews = async () => {
  //      try {
  //        // Call your backend API instead of directly calling the external API
  //        const response = await axios.get('/api/news?country=Ukraine');
  //        setNews(response.data.results); // Set the news articles
  //      } catch (error) {
  //        console.error("Error fetching news:", error);
  //      }
  //    };
  //    fetchNews();
  //  }, []);

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
                Look for what you need
              </Typography>
              <FormControl fullWidth style={{ marginBottom: '20px' }}>
                <InputLabel>Select Country</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="Ukraine">Ukraine</MenuItem>
                  <MenuItem value="Venezuela">Venezuela</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ marginBottom: '20px' }}>
              <InputLabel>Select City</InputLabel>
              <Select
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <MenuItem value="Kyiv">Kyiv</MenuItem>
                <MenuItem value="Kharkiv">Kharkiv</MenuItem>
                <MenuItem value="Odesa">Odesa</MenuItem>
                <MenuItem value="Caracas">Caracas</MenuItem>
                <MenuItem value="Maracaibo">Maracaibo</MenuItem>
              </Select>
            </FormControl>
              <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <InputLabel>Select Service</InputLabel>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <MenuItem value="Shelter">Shelter</MenuItem>
                </Select>
              </FormControl>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  style={{ width: '45%' }}
                >
                  Search
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
              maxHeight: '500px', // Set a max height
              overflowY: 'auto',  // Enable scrolling
            }}>
              <Typography variant="h5" gutterBottom>
                Locations
              </Typography>

              {/* Display locations in a pretty format */}
              {showLocations && (
                <RefugiosList refugios={locations} />
              )}
            </Container>
          </div>
        </div>
      </div>

      {/* Title for the News Section */}
      <Typography variant="h4" align="center" style={{ color: 'white', marginBottom: '20px', marginTop: '50px', fontWeight: 'bold' }}>
        Latest Updates ↓
      </Typography>

      {/* News Section */}
      <Container style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // The gray background color you want for the news section
        borderRadius: '10px',
        padding: '20px',
        width: '90%',
        marginTop: '50px',
      }}>

        <Typography variant="h5" gutterBottom>
          Latest News on Ukraine
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