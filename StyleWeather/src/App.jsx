import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LayoutPrincipal } from './layout/LayoutPrincipal/LayoutPrincipal';
import { Inicial } from './pages/Inicial';
import { FormularioCadastrar, FormularioLogin } from './componentes';

function App() {
  return (
    <AppProvider>
      <Router>
        <LayoutPrincipal>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/login" element={<FormularioLogin />} />
            <Route path="/cadastrar" element={<FormularioCadastrar />} />
          </Routes>
        </LayoutPrincipal>
      </Router>
    </AppProvider>
  );
}

export {App};
