import React, { useContext } from 'react';
import { ThemeContext } from '../App'; 

const UseContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("This is UseContext", theme);

  return (
    <div>
      <span>This is UseContext</span><br/>
      <span>Current Theme: {theme}</span><br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  );
};

export default UseContext;
