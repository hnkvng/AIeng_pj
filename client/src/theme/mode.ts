import { createTheme } from '@mui/material/styles';
import { stone, grey} from './colors';
import theme from './theme';

// Light theme
export const lightTheme = createTheme(theme,{
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
export const darkTheme = createTheme(theme,{
    palette: {
      mode: 'dark',
      action: {
        selected: '#DC4E42',
        hover: grey[800],
        disabled: '#A9A9A9',
      },
      text: {
        primary: grey[400],
        secondary: grey[600],
        disabled: '#616161'
      },
      background: {
        default: stone[900],
        paper: stone[800],
      },
      primary: {
        main: '#E53935',
      },
      secondary: {
        main: '#DC4E42',
      },
    },
});
