import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { LayoutCadastrado } from '../LayoutCadastrado/LayoutCadastrado';
import { LayoutPadrao } from '../LayoutPadrao/LayoutPadrao';

const LayoutPrincipal = ({ children }) => {
  const { usuarioLogado } = useContext(AppContext); // Obtém o estado de autenticação do contexto

  return usuarioLogado ? (
    <LayoutCadastrado>{children}</LayoutCadastrado>
  ) : (
    <LayoutPadrao>{children}</LayoutPadrao>
  );
};

export { LayoutPrincipal };
