import { Typography } from '@mui/material';
import React from 'react';

const ProductHeader: React.FC = () => {
  return (
    <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '40px' }}>
      Premium Product Editor
    </Typography>
  );
}

export default ProductHeader;
