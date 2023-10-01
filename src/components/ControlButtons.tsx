import { Button, Box } from '@mui/material';
import React from 'react';

interface ControlButtonsProps {
  onUpdate: () => void;
  onDelete: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ onUpdate, onDelete }) => {
  return (
    <Box display="flex" justifyContent="flex-end" mt={3}>
      <Button variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginRight: '10px' }} onClick={onUpdate}>Update</Button>
      <Button variant="contained" color="error" onClick={onDelete}>Delete</Button>
    </Box>
  );
}

export default ControlButtons;
