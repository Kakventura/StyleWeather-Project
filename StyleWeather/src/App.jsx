import React from 'react';
import VLibras from './componentes/Vlibras';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LayoutPrincipal } from './layout/LayoutPrincipal/LayoutPrincipal';
import { Inicial } from './pages/Inicial';
import { FormularioCadastrar} from './componentes';
import { Genero } from './pages/Genero';
import { Login } from './pages/Login/Login';
import { EditarPerfil } from './pages/EditarPerfil/EditarPerfil';
import { SobreNos } from './pages/SobreNos/SobreNos';

function App() {
  return (
    <AppProvider>
      <VLibras />
      
      <Router>
        <LayoutPrincipal>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/cadastrar" element={<FormularioCadastrar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/genero" element={<Genero />} />
            <Route path="/editar-perfil" element={<EditarPerfil />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
          </Routes>
        </LayoutPrincipal>
      </Router>
    </AppProvider>
  );
}

export {App};
