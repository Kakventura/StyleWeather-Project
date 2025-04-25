import React, { createContext, useState } from 'react';
import logoImg from '../assets/logo.png';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ logo: logoImg, menuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};
