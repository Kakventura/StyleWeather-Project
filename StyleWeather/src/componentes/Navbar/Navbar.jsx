import { Menu, X } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import helpImg from '../../assets/help.png';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { logo, menuAberto, alternarMenu } = useAppContext(); // nomes em português
  const navigate = useNavigate();

  return (
    <nav className={`${styles.navbar} ${menuAberto ? styles.openMenu : ''}`}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />

      <div className={styles.menuIcon} onClick={alternarMenu}>
        {menuAberto ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`${styles.buttons} ${menuAberto ? styles.showMenu : ''}`}>
        <button onClick={() => navigate('/cadastrar')} className={styles.customBtn}>
          Cadastre-se
        </button>
        <button onClick={() => navigate('/sobre-nos')} className={styles.iconOnlyBtn}>
          <img src={helpImg} alt="Sobre nós" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
