import React, { createContext, useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import usuario from '../assets/usuario.png';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tipoLook, setTipoLook] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(false); // Estado para rastrear autenticação
  const [profileImage, setProfileImage] = useState(logoImg); // Estado para a foto de perfil

  const auth = getAuth();
  const db = getFirestore();

  const alternarMenu = () => setMenuAberto(prev => !prev);

  // Função para resetar o contexto do app
  const resetAppContext = () => {
    setUsuarioLogado(false);
    setTipoLook("");
    setCidadeSelecionada("");
    setLugarSelecionado("");
    setDadosClima(null);
    setProfileImage(logoImg); // Reseta para a imagem padrão
  };

  // Carrega os dados do usuário do Firebase
  useEffect(() => {
    const carregarDadosUsuario = async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setTipoLook(userData.tipoLook || ""); // Define o tipoLook do Firestore
            setProfileImage(userData.profileImage || usuario); // Define a imagem de perfil ou a padrão
            setUsuarioLogado(true); // Define como logado
          } else {
            console.error("Documento do usuário não encontrado no Firestore.");
          }
        } catch (error) {
          console.error("Erro ao carregar dados do usuário:", error.message);
        }
      } else {
        resetAppContext(); // Reseta os dados quando o usuário não está logado
      }
    };

    // Observa mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      carregarDadosUsuario(user);
    });

    return () => unsubscribe(); // Limpa o observador ao desmontar o componente
  }, [auth, db]);

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
        usuarioLogado,
        setUsuarioLogado,
        profileImage,
        setProfileImage,
        resetAppContext, // Agora o reset está disponível no contexto
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
