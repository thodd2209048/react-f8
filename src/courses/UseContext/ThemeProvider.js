import React, { createContext, useState } from 'react';
import Paragraph from './Paragraph';

export const ThemeContext = createContext();
function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Paragraph />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
