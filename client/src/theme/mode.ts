import { createTheme } from '@mui/material/styles';
import { stone } from './colors';

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    action: {
        selected: '#DC4E42',
        hover: stone[100],
        disabled: '#D3D3D3',
    },
    text: {
        primary: stone[900],
        secondary: stone[700],
        disabled: stone[500]
    },
    background: {
        default: stone[50],
        paper: stone[0],
    },
    primary: {
      main: '#E53935',
    },
    secondary: {
      main: '#DC4E42',
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      action: {
        selected: '#DC4E42',
        hover: '#1c1d27',
        disabled: '#A9A9A9',
      },
      text: {
        primary: stone[0],
        secondary: stone[500],
        disabled: '#616161'
      },
      background: {
        default: stone[900],
        paper: stone[700],
      },
      primary: {
        main: '#E53935',
      },
      secondary: {
        main: '#DC4E42',
      },
    },
});
