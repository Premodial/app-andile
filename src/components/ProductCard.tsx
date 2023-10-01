import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, useTheme } from '@mui/material';
import { useCart } from '../context/CartContext';
import { WishlistButton } from './WishlistButton';
import { Product } from '../types/types';

type ProductProps = {
  product: Product;
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();
  const theme = useTheme();
  const [addedToCartStatus, setAddedToCartStatus] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCartStatus(true);
  };

  return (
    <Card
      sx={{
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)'
        }
      }}
    >
      <CardContent>
        <WishlistButton productId={product.id} />
        <Typography variant="h5" component="div" sx={{ fontWeight: '500', marginBottom: theme.spacing(2) }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: theme.spacing(2) }}>
          {product.description}
        </Typography>
        <Typography variant="h6">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', padding: theme.spacing(2) }}>
        <Button 
          size="small"
          variant="contained" 
          sx={{
            backgroundColor: addedToCartStatus ? 'gold' : 'black',
            color: addedToCartStatus ? 'black' : 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              backgroundColor: addedToCartStatus ? 'darkgoldenrod' : 'black',
            },
            textTransform: 'none',
            fontWeight: '500'
          }}
          onClick={handleAddToCart}
        >
          {addedToCartStatus ? "Added to Cart" : "Add To Cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export { ProductCard };
