// src/components/AddPropertyForm/AddPropertyForm.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';
import './AddPropertyForm.css';

export const AddPropertyForm = ({ open, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    status: '',
    rent: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: '',
      type: '',
      status: '',
      rent: '',
      address: ''
    });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      className="property-dialog"
    >
      <DialogTitle>Add New Property</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} className="property-form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Property Name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="form-field"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Type</InputLabel>
                <Select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  label="Type"
                >
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Status</InputLabel>
                <Select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  label="Status"
                >
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Rented">Rented</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Monthly Rent"
                type="number"
                value={formData.rent}
                onChange={(e) => setFormData({...formData, rent: Number(e.target.value)})}
                className="form-field"
                InputProps={{
                  startAdornment: <span className="currency-symbol">$</span>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                multiline
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="form-field"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Add Property
        </Button>
      </DialogActions>
    </Dialog>
  );
};