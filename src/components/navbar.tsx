import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Button, Divider, Badge, IconButton, Menu, MenuItem
} from '@mui/material';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Home from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user } = useAuth();
  const { cart } = useCart();

  const totalItemsInCart = cart.length;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#000' }}>
        <Toolbar>
          <Button color="inherit" onClick={handleDrawerOpen} sx={{ color: '#fff' }}>
            <MenuOutlinedIcon />
          </Button>
          <Typography variant="h6" noWrap style={{ flexGrow: 1, color: '#fff' }}>
            ProducTech
          </Typography>
          <IconButton color="inherit" onClick={() => navigate('/checkout')} sx={{ color: '#fff' }}>
            <Badge badgeContent={totalItemsInCart} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ color: '#fff' }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
          >
            {user ? (
              <MenuItem onClick={() => {
                handleProfileMenuClose();
              }}>
                Logout
              </MenuItem>
            ) : (
              <MenuItem onClick={() => {
                handleProfileMenuClose();
                navigate('/login');
              }}>
                Login
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{
          style: {
            backgroundColor: '#000',
            color: 'white'
          }
        }}
      >
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Admin
            </Typography>
          </ListItem>
          <Divider />
          <Link to="/" onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: '#fff' }} />
            </ListItem>
          </Link>
          <Link to="/products" onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <ShoppingBagIcon />
              </ListItemIcon>
              <ListItemText primary="Products" sx={{ color: '#fff' }} />
            </ListItem>
          </Link>
          <Link to="/orders" onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={{ color: '#fff' }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export { Navbar };
