import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../../hooks/useAppContext"; 
import helpImg from "../../assets/help.png";
import { Menu, X } from 'react-feather';
import styles from "./NavbarLogin.module.css";

const NavbarLogin = () => {
  const {
    logo,
    menuOpen,
    toggleMenu,
    setUsuarioLogado // <-- Adicionado aqui
  } = useAppContext();

  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => setUserMenuOpen(prev => !prev);

  const handleEditProfile = () => {
    navigate('/editar-perfil');
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");    // Remove o ID salvo
    setUsuarioLogado(false);              // Atualiza o estado global
    navigate('/');                        // Redireciona para página inicial
    setUserMenuOpen(false);
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
            src="./assets/logo.jpg"
            alt="User"
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

        <button onClick={() => navigate('/ajuda')} className={styles.iconOnlyBtn}>
          <img src={helpImg} alt="Ajuda" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export { NavbarLogin };
