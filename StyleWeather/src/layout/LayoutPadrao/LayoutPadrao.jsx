import React from 'react';
import { Navbar } from '../../componentes/Navbar';
import styles from './LayoutPadrao.module.css';

const LayoutPadrao = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export { LayoutPadrao };
