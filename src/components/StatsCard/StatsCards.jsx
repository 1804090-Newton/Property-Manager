// src/components/StatsCards/StatsCards.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Home, Apartment, Business, MonetizationOn } from "@mui/icons-material";
import './StatsCards.css';

const StatsCard = ({ title, value, color, icon: Icon }) => (
  <Card className={`stats-card ${color}-card`}>
    <CardContent>
      <div className="stats-card-content">
        <div className="stats-card-text">
          <Typography className="stats-card-title" variant="subtitle2">
            {title}
          </Typography>
          <Typography className="stats-card-value" variant="h4">
            {value}
          </Typography>
        </div>
        <Icon className="stats-card-icon" />
      </div>
    </CardContent>
  </Card>
);

export const StatsCards = ({ properties }) => {
  const available = properties.filter(p => p.status === 'Available').length;
  const rented = properties.filter(p => p.status === 'Rented').length;
  const totalRevenue = properties.reduce((sum, p) => sum + (p.status === 'Rented' ? p.rent : 0), 0);

  return (
    <Grid container spacing={3} className="stats-grid">
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard 
          title="Total Properties" 
          value={properties.length}
          color="primary"
          icon={Home}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard 
          title="Available" 
          value={available}
          color="success"
          icon={Apartment}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard 
          title="Rented" 
          value={rented}
          color="warning"
          icon={Business}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard 
          title="Monthly Revenue" 
          value={`$${totalRevenue.toLocaleString()}`}
          color="info"
          icon={MonetizationOn}
        />
      </Grid>
    </Grid>
  );
};