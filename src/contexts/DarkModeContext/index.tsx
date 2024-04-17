import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts';

type ThemeType = 'dark' | 'light';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>> | null;
}

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: null,
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark');
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setCurrentTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
