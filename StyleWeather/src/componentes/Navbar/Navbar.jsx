import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logo } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.buttons}>
        <button onClick={() => navigate('/cadastro')} className={styles.btn}>Cadastro</button>
        <button onClick={() => navigate('/ajuda')} className={styles.btn}>
          <span className="material-icons">help_outline</span>
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
