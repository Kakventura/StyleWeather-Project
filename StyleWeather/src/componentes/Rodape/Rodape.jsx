import React from 'react';
import styles from './Rodape.module.css'; // Aqui você importa o CSS

const Rodape = () => {
    return (
        <footer className={styles.footer}> 
            <div className={styles.container}> 
                <p>&copy; 2025 StyleWeather. Todos os direitos reservados. ETEC Zona Leste (3° AMS) </p>
            </div>
        </footer>
    );
};

export { Rodape };
