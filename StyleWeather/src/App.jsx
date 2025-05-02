import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LayoutPrincipal } from './layout/LayoutPrincipal/LayoutPrincipal';
import { Inicial } from './pages/Inicial';
import { FormularioCadastrar} from './componentes';
import { Genero } from './pages/Genero';
import { Login } from './pages/Login/Login';
import { EditarPerfil } from './pages/EditarPerfil/EditarPerfil';

function App() {
  return (
    <AppProvider>
      <Router>
        <LayoutPrincipal>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/cadastrar" element={<FormularioCadastrar />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/genero" element={<Genero />} />
            <Route path="/editar-perfil" element={<EditarPerfil />} />
          </Routes>
        </LayoutPrincipal>
      </Router>
    </AppProvider>
  );
}

export {App};
