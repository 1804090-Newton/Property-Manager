// src/components/PropertyList/PropertyList.jsx
import React from 'react';
import { Grid } from '@mui/material';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import './PropertyList.css';

export const PropertyList = ({ properties }) => {
  return (
    <Grid container spacing={3} className="property-list">
      {properties.map(property => (
        <Grid item xs={12} sm={6} lg={4} key={property.id}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
};