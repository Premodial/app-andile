// HomePage.tsx
import React from 'react';
import { Grid } from '@mui/material';
import { useProducts } from '../../hooks/useApi';
import { ProductCard } from '../../components/ProductCard';
import { PremiumTitle } from '../../components/PremiumTitle';


const HomePage: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !products) return <p>Error fetching products</p>;

  return (
    <div style={{ paddingTop: '5rem' }}>
      <PremiumTitle title="Premium Products" />
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { HomePage };
