import React, { createContext } from 'react';
import logoImg from '../assets/logo.png';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const logo = logoImg;

    return (
        <AppContext.Provider value={{ logo }}>
            {children}
        </AppContext.Provider>
    );
};