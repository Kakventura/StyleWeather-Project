import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LayoutPadrao } from './layout/LayoutPadrao/LayoutPadrao';
import { Inicial, Ajuda, Cadastrar } from './pages';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <LayoutPadrao>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
          </Routes>
        </LayoutPadrao>
      </Router>
    </AppProvider>
  );
};

export { App };
