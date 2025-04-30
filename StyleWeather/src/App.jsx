// Esse arquivo contém o componente principal do aplicativo, que configura o roteamento e envolve o aplicativo com o contexto global. Ele também importa os componentes de layout e as páginas principais do aplicativo.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import { LayoutCadastrado } from './layout/LayoutCadastrado/LayoutCadastrado';
import { AppProvider } from './context/AppContext';
import { EditarPerfil, Inicial, Ajuda } from './pages';  

const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
        <LayoutCadastrado>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/editar-perfil" element={<EditarPerfil />} />
            <Route path="/ajuda" element={<Ajuda />} />
          </Routes>
        </LayoutCadastrado>
      </BrowserRouter>
    </AppProvider>
  );
}

export { App };