import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Navbar } from './components/navbar';
import { ProductManager } from './containers/ProductManager/Products';
import { ProductDetail } from './containers/ProductManager/ProductDetail';
import { CheckoutManager } from './containers/CheckoutManager/CheckoutManager';
import { PurchaseConfirmation } from './containers/CheckoutManager/PurchaseConfirmation';
import {Login} from './containers/Login/Login';

import { BasketManager } from './containers/BasketManager/BasketManager';
import { OrderManager } from './containers/OrderManager/OrderManager';
import { HomePage } from './containers/Home/Home';
import { AuthProvider } from './context/AuthContext'; 
import { CartProvider } from './context/CartContext'; 

import { Box } from '@mui/material';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Box sx={{ padding: '2rem' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductManager />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/basket" element={<BasketManager />} />
                <Route path="/orders" element={<OrderManager />} />
                <Route path="/checkout" element={<CheckoutManager />} />
                <Route path="/confirm" element={<PurchaseConfirmation />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Box>
          </Router>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
