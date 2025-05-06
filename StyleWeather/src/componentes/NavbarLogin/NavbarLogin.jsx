import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; 
import { useAppContext } from "../../hooks/useAppContext";
import helpImg from "../../assets/help.png";
import { Menu, X } from 'react-feather';
import styles from "./NavbarLogin.module.css";

const NavbarLogin = () => {
  const {
    logo,
    menuAberto,         // Variável que controla o estado do menu
    alternarMenu,       // Função correta do AppContext para alternar o estado do menu
    setUsuarioLogado,
    profileImage
  } = useAppContext();

  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu do usuário
  const handleUserMenuToggle = () => setUserMenuOpen(prev => !prev);

  // Função para editar o perfil
  const handleEditProfile = () => {
    navigate('/editar-perfil');
    setUserMenuOpen(false);
  };

  // Função para deslogar o usuário
  const handleLogout = async () => {
    setUserMenuOpen(false);
    const auth = getAuth();

    try {
      await signOut(auth);                       
      localStorage.removeItem("userId");         
      setUsuarioLogado(false);                   
      navigate('/');                             
    } catch (error) {
      console.error("Erro ao sair:", error.message);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  // Função para alternar o menu de navegação
  const toggleMenu = () => {
    alternarMenu(!menuAberto);  // Altera o estado do menu
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuAberto ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`${styles.buttons} ${menuAberto ? styles.showMenu : ''}`}>
        <div className={styles.userSection}>
            <img
            src={profileImage} 
            alt="Foto de Perfil"
            className={styles.userIcon}
            onClick={handleUserMenuToggle}
          />
          {isUserMenuOpen && (
            <div className={styles.userMenu}>
              <button className={styles.userMenuItem} onClick={handleEditProfile}>
                Editar Perfil
              </button>
              <button className={styles.userMenuItem} onClick={handleLogout}>
                Sair
              </button>
            </div>
          )}
        </div>

        <button onClick={() => navigate('/sobre-nos')} className={styles.iconOnlyBtn}>
          <img src={helpImg} alt="SobreNos" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export { NavbarLogin };
