import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAppContext } from "../../hooks/useAppContext";
import helpImg from "../../assets/help.png";
import usuario from "../../assets/usuario.png";
import homeIcon from "../../assets/inicial.png";
import { X } from 'react-feather';
import styles from "./NavbarLogin.module.css";

const NavbarLogin = () => {
  const {
    logo,
    sUsuarioLogado,
    profileImage
  } = useAppContext();

  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserMenuToggle = () => setUserMenuOpen(prev => !prev);

  const handleEditProfile = () => {
    navigate('/editar-perfil');
    setUserMenuOpen(false);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("userId");
      sUsuarioLogado(false);
      navigate('/');
    } catch (error) {
      console.error("Erro ao sair:", error.message);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
        onClick={() => { navigate('/'); window.location.reload(); }}
        title='Clique para voltar à página inicial'
      />

      <div className={styles.rightSide}>
        {/* Botão para Home */}
        <button
          className={styles.iconOnlyBtn}
          onClick={() => { navigate('/'); window.location.reload(); }}
          title='Página inicial'
        >
          <img src={homeIcon} alt="Início" className={styles.icon} />
        </button>

        {/* Botão para Sobre Nós */}
        <button
          className={styles.iconOnlyBtn}
          onClick={() => { navigate('/sobre-nos'); window.location.reload(); }}
          title='Sobre nós'
        >
          <img src={helpImg} alt="Sobre nós" className={styles.icon} />
        </button>

        {/* Ícone do usuário */}
        <div className={styles.userSection} ref={menuRef}>
          <img
            src={profileImage || usuario}
            alt="Perfil"
            className={styles.userIcon}
            onClick={handleUserMenuToggle}
            title='Perfil do usuário'
          />
          {isUserMenuOpen && (
            <div className={styles.userDropdown}>
              <button onClick={handleEditProfile}>Editar Perfil</button>
              <button onClick={handleLogout}>Sair</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { NavbarLogin };
