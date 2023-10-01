import { Box, TextField } from '@mui/material';
import React from 'react';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  
  interface ProductFormProps {
    product: Product;
    onInputChange: (field: keyof Product) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const ProductForm: React.FC<ProductFormProps> = ({ product, onInputChange }) => {
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="ID" value={product.id} InputProps={{ readOnly: true }} variant="outlined" />
        <TextField label="Name" value={product.name} onChange={onInputChange('name')} variant="outlined" />
        <TextField label="Description" value={product.description} onChange={onInputChange('description')} multiline rows={4} variant="outlined" />
        <TextField label="Price" type="number" value={product.price.toString()} onChange={onInputChange('price')} variant="outlined" />
      </Box>
    );
  }
  
  export default ProductForm;
  
  
  
  
  
  
