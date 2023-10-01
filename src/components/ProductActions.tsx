import React from 'react';
import { Button, Box } from '@mui/material';

interface Props {
  onUpdate: () => void;
}

const ProductActions: React.FC<Props> = ({ onUpdate }) => {
  return (
    <Box display="flex" justifyContent="flex-end" mt={3}>
      <Button variant="contained" color="primary" onClick={onUpdate} style={{ marginRight: '10px' }}>
        Update
      </Button>
      <Button variant="contained" color="secondary">
        Delete
      </Button>
    </Box>
  );
};

export default ProductActions;
