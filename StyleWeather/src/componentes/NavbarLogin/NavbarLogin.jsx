import { Menu, X } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import helpImg from '../../assets/help.png';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './Navbar.module.css';

const NavbarLogin = () => {
  const { logo, menuOpen, toggleMenu } = useAppContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`${styles.buttons} ${menuOpen ? styles.showMenu : ''}`}>
        {/* <button onClick={() => navigate('/cadastrar')} className={styles.customBtn}>
          Cadastre-se
        </button> */}
        <button onClick={() => navigate('/ajuda')} className={styles.iconOnlyBtn}>
          <img src={helpImg} alt="Ajuda" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export { NavbarLogin };