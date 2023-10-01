import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type WishlistButtonProps = {
  productId: string;
};

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = () => {
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
    } else {
      setWishlist(prev => [...prev, productId]);
    }
  };

  return (
    <IconButton 
      color="primary" 
      onClick={toggleWishlist}
      style={{position: 'absolute', right: '8px', top: '8px'}}
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
};

export { WishlistButton };
