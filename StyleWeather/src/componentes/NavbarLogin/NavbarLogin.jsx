import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../../hooks/useAppContext"; 
import helpImg from "../../assets/help.png";
import { Menu, X } from 'react-feather';  // Importando os ícones Menu e X
import styles from "./NavbarLogin.module.css";

const NavbarLogin = () => {
  const { logo, menuOpen, toggleMenu } = useAppContext();  
  const navigate = useNavigate();

  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const handleUserMenuToggle = () => setUserMenuOpen(prev => !prev);
  
  const handleEditProfile = () => {
    navigate('/editar-perfil');
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    navigate('/');
    setUserMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`${styles.buttons} ${menuOpen ? styles.showMenu : ''}`}>
        <button onClick={() => navigate('/ajuda')} className={styles.iconOnlyBtn}>
          <img src={helpImg} alt="Ajuda" className={styles.icon} />
        </button>

        <div className={styles.userSection}>
          <img
            src="./assets/logo.jpg" // Imagem do usuário
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
      </div>
    </nav>
  );
};

export { NavbarLogin };
