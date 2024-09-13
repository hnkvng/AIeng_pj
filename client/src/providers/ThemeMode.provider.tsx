import { createContext, useState, ReactNode, useMemo, useContext, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '@theme/mode';

interface ThemeModeContextProps {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}


export const ThemeModeContext = createContext({} as ThemeModeContextProps);

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => localStorage.getItem('theme') ? localStorage.getItem('theme') as 'light' | 'dark' : "light");

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', mode);
  },[mode])

  return (
    <ThemeModeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);

export default ThemeModeProvider;