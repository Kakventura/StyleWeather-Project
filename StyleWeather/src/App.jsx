// Esse arquivo contém o componente principal do aplicativo, que configura o roteamento e envolve o aplicativo com o contexto global. Ele também importa os componentes de layout e as páginas principais do aplicativo.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import { LayoutCadastrado } from './layout/LayoutCadastrado/LayoutCadastrado';
import { AppProvider } from './context/AppContext';
import { EditarPerfil, Inicial, Ajuda } from './pages';  
import { LayoutPadrao } from './layout/LayoutPadrao/LayoutPadrao';
import { Cadastrar } from './pages/Cadastrar';
import { Login } from './pages/Login';
import { Genero} from './pages/Genero';

const App = () => {
  return (
      <AppProvider>
        <BrowserRouter>
            <LayoutCadastrado>
              <Routes>
                <Route path="/editar-perfil" element={<EditarPerfil />} />
                <Route path="/ajuda" element={<Ajuda />} />
                <Route path="/" element={<Inicial />} />
              </Routes>
            </LayoutCadastrado>
            <LayoutPadrao>
              <Routes>
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/genero" element={<Genero />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </LayoutPadrao>
        </BrowserRouter>
      </AppProvider>
  );
};

export { App };