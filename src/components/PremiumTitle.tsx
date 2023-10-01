import React from 'react';
import { Typography } from '@mui/material';

type PremiumTitleProps = {
  title: string;
};

const PremiumTitle: React.FC<PremiumTitleProps> = ({ title }) => {
  return (
    <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 600, paddingBottom: '2rem', borderBottom: '3px solid black', marginBottom: '2rem' }}>
      {title}
    </Typography>
  );
};

export { PremiumTitle };
