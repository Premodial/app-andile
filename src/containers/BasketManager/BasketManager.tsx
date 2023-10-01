import React, { useState } from 'react';
import { 
  Button, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton, 
  Divider 
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const mockCartItems: CartItem[] = [
  { product: { id: '1', name: 'Laptop', description: 'A high-end gaming laptop.', price: 1299.99 }, quantity: 1 },
  { product: { id: '2', name: 'Phone', description: 'A new generation smartphone.', price: 699.99 }, quantity: 2 },
];

const BasketManager: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const handleAddQuantity = (productId: string) => {
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const handleRemoveQuantity = (productId: string) => {
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId && item.quantity > 0 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', marginTop: 20}}>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>
        My Cart
      </Typography>

      <List>
        {cartItems.map(item => (
          <>
            <ListItem key={item.product.id}>
              <ListItemText 
                primary={item.product.name}
                secondary={`$${item.product.price.toFixed(2)} x ${item.quantity}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleRemoveQuantity(item.product.id)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => handleAddQuantity(item.product.id)}>
                  <AddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>

      <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '20px' }}>
        Total: ${getTotalPrice().toFixed(2)}
      </Typography>

      <Button fullWidth variant="contained" color="primary">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export  {BasketManager};

