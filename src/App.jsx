// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { NotificationsNone } from "@mui/icons-material";
import './App.css';
import { StatsCards } from './components/StatsCard/StatsCards';
import { PropertyFilter } from './components/PropertyFilter/PropertyFilter';
import { PropertyList } from './components/PropertyList/PropertyList';
import { AddPropertyForm } from './components/AddPropertyForm/AddPropertyForm';

export default function App() {
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem('properties');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [filter, setFilter] = useState({ type: 'all', status: 'all' });
  const [openAddForm, setOpenAddForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  const filteredProperties = properties.filter(property => {
    return (filter.type === 'all' || property.type === filter.type) &&
           (filter.status === 'all' || property.status === filter.status);
  });

  const handleAddProperty = (newProperty) => {
    setProperties([...properties, { ...newProperty, id: Date.now() }]);
    setOpenAddForm(false);
  };

  return (
    <>
      <AppBar position="static" className="app-header">
        <Toolbar>
          <Typography variant="h6" component="h1" className="app-title">
            Property Manager
          </Typography>
          <IconButton>
            <NotificationsNone />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" className="main-container">
        <StatsCards properties={properties} />
        <PropertyFilter 
          filter={filter}
          setFilter={setFilter}
          onAddClick={() => setOpenAddForm(true)}
        />
        <PropertyList properties={filteredProperties} />
        <AddPropertyForm
          open={openAddForm}
          onClose={() => setOpenAddForm(false)}
          onAdd={handleAddProperty}
        />
      </Container>
    </>
  );
}