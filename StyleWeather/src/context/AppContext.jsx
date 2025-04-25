import React, { createContext } from 'react';
import logoImg from '../assets/user.png'; // coloca sua logo aqui

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const logo = logoImg;

    return (
        <AppContext.Provider value={{ logo }}>
            {children}
        </AppContext.Provider>
    );
};