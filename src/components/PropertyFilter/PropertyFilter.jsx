// src/components/PropertyFilter/PropertyFilter.jsx
import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, Paper } from '@mui/material';
import { Add } from "@mui/icons-material";
import './PropertyFilter.css';

export const PropertyFilter = ({ filter, setFilter, onAddClick }) => {
  return (
    <Paper className="filter-paper">
      <Grid container spacing={2} className="filter-grid">
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className="filter-control">
            <InputLabel>Property Type</InputLabel>
            <Select
              value={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.target.value })}
              label="Property Type"
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className="filter-control">
            <InputLabel>Status</InputLabel>
            <Select
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              label="Status"
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Rented">Rented</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<Add />}
            onClick={onAddClick}
            className="add-button"
          >
            Add Property
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
