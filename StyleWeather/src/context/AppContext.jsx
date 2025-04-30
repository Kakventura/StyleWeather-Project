// Esse arquivo contém o contexto do aplicativo, que gerencia o estado global e fornece funções para alternar o menu e atualizar as informações climáticas.
import React, { createContext, useState } from 'react';
import logoImg from '../assets/logo.png';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tipoLook, setTipoLook] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const alternarMenu = () => setMenuAberto(prev => !prev);

  return (
    <AppContext.Provider
      value={{
        logo: logoImg,
        menuAberto,
        alternarMenu,
        tipoLook,
        setTipoLook,
        cidadeSelecionada,
        setCidadeSelecionada,
        lugarSelecionado,
        setLugarSelecionado,
        dadosClima,
        setDadosClima,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};