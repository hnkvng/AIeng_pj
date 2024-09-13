import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import BreakpointsProvider from './providers/Breakpoints.provider';
import ThemeModeProvider from './providers/ThemeMode.provider';
import { Provider as StoreProvider } from 'react-redux';
import router from '@router/router';
import store from './redux/store';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeModeProvider>
        <BreakpointsProvider>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            <RouterProvider router={router}/>
          </SnackbarProvider>
        </BreakpointsProvider> 
      </ThemeModeProvider>
    </StoreProvider>
  </React.StrictMode>,
);