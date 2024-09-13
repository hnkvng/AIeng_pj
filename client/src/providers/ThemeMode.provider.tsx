import { createContext, useState, ReactNode, useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '@theme/mode';

interface ThemeModeContextProps {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

export const ThemeModeContext = createContext<ThemeModeContextProps | undefined>(undefined);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light'); // Khởi tạo là light mode

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeModeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};