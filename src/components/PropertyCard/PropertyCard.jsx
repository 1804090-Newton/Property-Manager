// src/components/PropertyCard/PropertyCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Home, Apartment, Business, MonetizationOn, LocationOn } from "@mui/icons-material";
import './PropertyCard.css';

const getPropertyIcon = (type) => {
  switch (type) {
    case 'Apartment': return <Apartment className="property-icon" />;
    case 'House': return <Home className="property-icon" />;
    case 'Commercial': return <Business className="property-icon" />;
    default: return <Home className="property-icon" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Available': return 'success';
    case 'Rented': return 'warning';
    default: return 'default';
  }
};

export const PropertyCard = ({ property }) => {
  return (
    <Card className="property-card">
      <CardContent>
        <div className="property-card-header">
          <Typography variant="h6" component="h2">
            {property.name}
          </Typography>
          <div className={`property-status-badge ${getStatusColor(property.status)}`}>
            {property.status}
          </div>
        </div>
        
        <div className="property-info-row">
          {getPropertyIcon(property.type)}
          <Typography className="property-text">
            {property.type}
          </Typography>
        </div>
        
        <div className="property-info-row">
          <MonetizationOn className="property-icon" />
          <Typography className="property-text">
            ${property.rent.toLocaleString()}/month
          </Typography>
        </div>
        
        <div className="property-info-row">
          <LocationOn className="property-icon" />
          <Typography className="property-text">
            {property.address}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};