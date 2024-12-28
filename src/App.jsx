import React, { useState, useEffect } from 'react';
import UseReducer from "./compenents/UseReducer";
import UseState from "./compenents/useState";
import UseContext from "./compenents/UseContext";
import UseRef from './compenents/UseRef'
import UseRefSetTimeout from './compenents/subComponents/UseRefSetTimeout'

export const ThemeContext = React.createContext();

function App() {
  // Initialize theme from localStorage or fallback to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  console.log("This is UseContext", theme);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="container">
        <UseState /><br />
        <UseReducer /><br />
        <UseContext /><br />
        <UseRef /><br />
        <UseRefSetTimeout />UseRefSetTimeout
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
