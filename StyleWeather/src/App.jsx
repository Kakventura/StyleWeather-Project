import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LayoutPadrao } from './layout/LayoutPadrao/LayoutPadrao';
import { Inicial } from './pages/Inicial/Inicial';

const App = () => {
  return (
    <AppProvider>
      <Router>
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
