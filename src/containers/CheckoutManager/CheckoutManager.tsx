import React from 'react';
import { 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Paper,
  Grid,
  Button
} from '@mui/material';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useCreateOrder } from '../../hooks/useApi'; 
import { useNavigate } from 'react-router-dom';

const CheckoutManager: React.FC = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const mutation = useCreateOrder();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const handlePurchase = async () => {
    const purchaseData = {
      paid: true,
      customerId: user?.uid || " ",
      products: cart.map(product => product.id),
      total: getTotalPrice()
    };

    try {
      await mutation.mutateAsync(purchaseData);
      navigate(`/confirm`);
      clearCart();
    } catch (error) {
      console.error("Error while creating the order:", error);
    }
  };

  return (
    <div style={{ marginTop: '120px' }}>
      <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '40px' }}>
        Premium Checkout
      </Typography>
      
      <Paper elevation={5} style={{ padding: '30px', maxWidth: '800px', margin: 'auto', borderRadius: '12px' }}>
        <Typography variant="h5" gutterBottom>
          Purchase Confirmation
        </Typography>
        
        <Typography variant="subtitle1" gutterBottom>
          Thank you for your purchase! Here are your order details:
        </Typography>

        <List>
          {cart.map(product => (
            <ListItem key={product.id}>
              <ListItemText 
                primary={product.name}
                secondary={`$${product.price.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
        <Divider />

        <Grid container spacing={3} justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Total Paid:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" align="right">
              ${getTotalPrice().toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        <Button 
          variant="contained"
          style={{ backgroundColor: '#000', color: '#fff', marginTop: '20px' }}
          onClick={handlePurchase}
        >
          Purchase
        </Button>

        <Typography variant="subtitle1" style={{ marginTop: '20px' }}>
          Confirmation #: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px', color: 'gray' }}>
          A receipt has been sent to your email. We'll notify you once your items are shipped. Thank you for shopping with us!
        </Typography>
      </Paper>
    </div>
  );
};

export { CheckoutManager };
