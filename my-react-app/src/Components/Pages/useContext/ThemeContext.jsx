import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // 2. Wrap components in a Provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme === 'light' ? '#fff' : '#333', height: '100vh' }}>
        <Navbar />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

function Navbar() {
  // This component doesn't need the theme, but it's in the middle of the tree
  return <ThemeDisplay />;
}

function ThemeDisplay() {
  // 3. Consume the value directly
  const { theme } = useContext(ThemeContext);
  return <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>Current Theme: {theme}</h1>;
}
