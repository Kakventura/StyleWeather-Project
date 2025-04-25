import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importação correta
import { AppProvider } from './context/AppContext';
import { LayoutPadrao } from './layout/LayoutPadrao/LayoutPadrao';
import { Inicial } from './pages/Inicial/Inicial';

const App = () => {
  return (
    <AppProvider>
      <Router> {/* Certifique-se de que Router está envolvido */}
        <LayoutPadrao>
          <Routes>
            <Route path="/" element={<Inicial />} />
          </Routes>
        </LayoutPadrao>
      </Router>
    </AppProvider>
  );
};

export { App };
