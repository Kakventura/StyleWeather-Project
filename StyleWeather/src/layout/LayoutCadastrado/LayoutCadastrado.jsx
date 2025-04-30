import React from 'react'; 
import { NavbarLogin } from '../../componentes/NavbarLogin';
import styles from './LayoutCadastrado.module.css';
import { Rodape } from '../../componentes';

const LayoutCadastrado = ({ children }) => {
  console.log("LayoutCadastrado is rendering");  // Verifique se o LayoutCadastrado é renderizado
  return (
    <>
      <div className={styles.container}>
        <NavbarLogin />
        <main className={styles.main}>{children}</main>
        <Rodape />
      </div>
    </>
  );
};

export { LayoutCadastrado };
