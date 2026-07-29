import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({children}:{children: ReactNode}) {
    const [darkMode,setDarkMode] = useState<boolean>(
        () => localStorage.getItem('darkMode') === 'true'
    );

    useEffect (()=> {
        localStorage.setItem('darkMode', String(darkMode));
        if(darkMode){
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    },[darkMode]);
   
    function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

   return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}