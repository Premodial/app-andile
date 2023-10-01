import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const theme = createTheme({
  // your theme configuration
});

export const withThemeProvider = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);