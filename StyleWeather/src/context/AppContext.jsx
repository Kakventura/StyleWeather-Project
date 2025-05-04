import React, { createContext, useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
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
            setProfileImage(userData.profileImage || logoImg); // Define a foto de perfil
            setUsuarioLogado(true); // Define como logado
          } else {
            console.error("Documento do usuário não encontrado no Firestore.");
          }
        } catch (error) {
          console.error("Erro ao carregar dados do usuário:", error.message);
        }
      } else {
        setUsuarioLogado(false); // Define como não logado
        setProfileImage(logoImg); // Reseta para a imagem padrão
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
        setProfileImage, // Adicionado para atualizar a foto de perfil
      }}
    >
      {children}
    </AppContext.Provider>
  );
};