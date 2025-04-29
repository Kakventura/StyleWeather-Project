import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import { LayoutCadastrado } from './layout/LayoutCadastrado/LayoutCadastrado';
import { AppProvider } from './context/AppContext';
import { EditarPerfil, Inicial, Ajuda } from './pages';  

const App = () => {
  console.log("App is rendering");  // Adicionando o log para verificar se o componente é renderizado
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
