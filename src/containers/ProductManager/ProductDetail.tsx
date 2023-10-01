import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useProduct, useUpdateProduct, useDeleteProduct } from '../../hooks/useApi';
import ProductForm from '../../components/ProductForm';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ProductDetailActions: React.FC<{ onUpdate: () => void, onDelete: () => void }> = ({ onUpdate, onDelete }) => {
  return (
    <Box display="flex" justifyContent="flex-end" mt={3}>
      <Button variant="contained" style={{ backgroundColor: 'black', marginRight: '10px' }} onClick={onUpdate}>Update</Button>
      <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
    </Box>
  );
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string | undefined }>();
  const { data: product, isLoading } = useProduct(productId || '');
  const updateProductMutation = useUpdateProduct();
  const deleteProductMutation = useDeleteProduct();
  const navigate = useNavigate();


  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  // Early return if productId is not present
  if (!productId) {
    return <Typography>Error: Product ID is missing.</Typography>;
  }



  const handleInputChange = (field: keyof Product) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedProduct(prev => ({
      ...prev!,
      [field]: field === 'price' ? parseFloat(event.target.value) : event.target.value,
    }));
  };

  const handleUpdate = () => {
    if (editedProduct) {
      updateProductMutation.mutate({
        productId: productId,
        payload: editedProduct
      }, {
        onSuccess: () => navigate('/products')
      });
    }
  };

  const handleDelete = () => {
    deleteProductMutation.mutate(productId, {
      onSuccess: () => navigate('/products')
    });
  };

  if (isLoading || !editedProduct) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Paper elevation={10} style={{ padding: '25px', maxWidth: '900px', margin: '85px auto' }}>
      <Typography variant="h5" gutterBottom>Product Detail</Typography>
      <ProductForm product={editedProduct} onInputChange={handleInputChange} />
      <ProductDetailActions onUpdate={handleUpdate} onDelete={handleDelete} />
    </Paper>
  );
};

export { ProductDetail };
