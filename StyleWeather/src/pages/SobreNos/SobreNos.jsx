import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import style from './SobreNos.module.css'; // Importa o CSS como módulo
import logoImg from '../../assets/logo.png'; // Importe a imagem do logo
import logoResponsiva from '../../assets/logo_responsiva.png';

function SobreNos() {
  return (
    <div className={style.container}>
      <div className={style.leftPanel}>
        <div className={style.logoBox}>
          <img src={logoImg} alt="Style Weather Logo" className={`${style.logoImg} ${style.defaultLogo}`} />
          <img src={logoResponsiva} alt="Style Weather Logo Responsiva" className={`${style.logoImg} ${style.responsiveLogo}`} />
        </div>
      </div>

      <div className={style.rightPanel}>
        <div className={style.welcome}>
          <h2>Sobre Nós</h2>
          <p>
            No Style Weather, transformamos a forma como você se prepara para o seu dia.
            Nossa plataforma une tecnologia, estilo e praticidade para ajudar você a escolher o
            look ideal com base no clima da sua região e nos compromissos que tem pela frente.
          </p>
          <p>
            Nossa startup criou uma experiência personalizada, feita para pessoas modernas que valorizam
            conforto, tempo e bem-estar. Seja para um dia chuvoso ou ensolarado, estamos aqui
            para garantir que você esteja pronto, elegante e seguro para qualquer ocasião.
          </p>

          <div className={style.contact}>
            <p><strong>Email:</strong> info@styleweather.com</p>
            <p><strong>Telefone:</strong> (11) 94519-3458</p>
          </div>

          <div className={style.signup}>
            <p>Ainda não tem cadastro?</p>
            <Link to="../cadastrar" className={style.signupButton}>Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export {SobreNos};
