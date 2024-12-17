// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // 'dark' for dark mode
    primary: {
      main: '#2196f3', // Blue
    },
    secondary: {
      main: '#1565c0', // Dark Blue
    },
    background: {
      default: '#e3f2fd', // Light blue background
      paper: '#bbdefb',   // Slightly darker blue
    },
    text: {
      primary: '#0d47a1', // Darker blue for text
    },
  },
  shadows: [
    'none',
    '0px 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadows
    '0px 6px 12px rgba(0, 0, 0, 0.2)',
    '0px 8px 16px rgba(0, 0, 0, 0.3)',
  ],
});

export default theme;
