import React from 'react';
import { Navbar } from '../../componentes/Navbar';
import styles from './LayoutPadrao.module.css';
import { Rodape } from '../../componentes';

const LayoutPadrao = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Rodape />
      </div>
    </>
  );
};

export { LayoutPadrao };
