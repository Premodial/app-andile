import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string;
  value: string | number;
  type?: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  readOnly?: boolean;
}

const ProductField: React.FC<Props> = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default ProductField;
