import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // <-- Importa o Firebase Auth
import { useAppContext } from "../../hooks/useAppContext";
import helpImg from "../../assets/help.png";
import { Menu, X } from 'react-feather';
import styles from "./NavbarLogin.module.css";

const NavbarLogin = () => {
  const {
    logo,
    menuOpen,
    toggleMenu,
    setUsuarioLogado,
    profileImage
  } = useAppContext();

  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => setUserMenuOpen(prev => !prev);

  const handleEditProfile = () => {
    navigate('/editar-perfil');
    setUserMenuOpen(false);
  };

  const handleLogout = async () => {
    setUserMenuOpen(false);
    const auth = getAuth();

    try {
      await signOut(auth);                       // Desloga do Firebase
      localStorage.removeItem("userId");         // Remove ID salvo
      setUsuarioLogado(false);                   // Atualiza estado global
      navigate('/');                             // Redireciona para a home
    } catch (error) {
      console.error("Erro ao sair:", error.message);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`${styles.buttons} ${menuOpen ? styles.showMenu : ''}`}>
        <div className={styles.userSection}>
            <img
            src={profileImage} // Exibe a imagem de perfil do estado global
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