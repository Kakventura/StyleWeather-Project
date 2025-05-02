// Esse arquivo contém o contexto do aplicativo, que gerencia o estado global e fornece funções para alternar o menu e atualizar as informações climáticas.
import React, { createContext, useState, useEffect } from 'react';
import { fetchTipoLook  } from '../services/firebaseConfig'; // Certifique-se de importar corretamente
import logoImg from '../assets/logo.png';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tipoLook, setTipoLook] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState("");
  const [dadosClima, setDadosClima] = useState(null);

  const alternarMenu = () => setMenuAberto(prev => !prev);

  useEffect(() => {
    const carregarTipoLook = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Obtém o userId do localStorage
        if (userId) {
          const look = await fetchTipoLook(userId); // Busca o tipoLook diretamente do Firebase
          setTipoLook(look || ""); // Define "" se não encontrar o tipoLook

        } else {
          console.error("Usuário não autenticado. userId não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao carregar tipoLook:", error.message);
      }

    };

    carregarTipoLook();
  }, []);

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