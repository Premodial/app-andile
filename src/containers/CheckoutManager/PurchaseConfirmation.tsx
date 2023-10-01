import React from 'react';
import { 
  Typography, 
  Paper, 
  Box
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PurchaseConfirmation: React.FC = () => {

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', borderRadius: '10px', textAlign: 'center' }}>
        <Box color="green">
          <CheckCircleIcon style={{ fontSize: '80px', color: 'black' }} />
        </Box>
        <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
          Order Confirmed!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Thank you for your purchase.
        </Typography>
        <Typography variant="body2">
          A confirmation email has been sent. We will process and ship your order soon.
        </Typography>
      </Paper>
    </Box>
  );
};

export { PurchaseConfirmation };
