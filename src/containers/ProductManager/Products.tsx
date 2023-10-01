import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GridRowId } from '@mui/x-data-grid';
import { useProducts, useDeleteProducts } from '../../hooks/useApi';
import { Product } from '../../types/types';
import ProductDataTable from '../../components/ProductDataTable';

const ProductManager: React.FC = () => {
  const { data: fetchedProducts, isLoading, isError } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const deleteProductsMutation = useDeleteProducts();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleRowSelectionChange = (newSelection: GridRowId[]) => {
    setSelectedProducts(newSelection as string[]);
  }  

  useEffect(() => {
    if (fetchedProducts) {
      setProducts(fetchedProducts);
    }
  }, [fetchedProducts]);

  const handleDelete = () => {
    const productIds = selectedProducts;
    deleteProductsMutation.mutate(
      { productIds },
      {
        onSuccess: () => {
          setProducts((prevProducts) => prevProducts.filter((product) => !productIds.includes(product.id)));
          setSelectedProducts([]);  // Clear the selection after deletion
        },
      }
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching products</p>;

  return (
    <Box style={{ width: '100%' }} sx={{ height: 600, paddingTop: '2rem' }}>
      <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '40px' }}>
        Product List
      </Typography>
      <ProductDataTable 
        products={products} 
        onRowSelectionChange={(newSelection) => handleRowSelectionChange(newSelection)}
        selectedProducts={selectedProducts}
        onDelete={handleDelete}
      />
    </Box>
  );
}

export  {ProductManager};
