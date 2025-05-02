import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from './FormularioCadastrar.module.css';
import manequim from '../../assets/manequim.png';
import { Genero } from '/src/pages/Genero/index.js';

const FormularioCadastrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!formData.nome || !formData.email || formData.senha.length < 6) {
      alert("Por favor, preencha todos os campos e use uma senha com pelo menos 6 caracteres.");
      return;
    }

    // Salva os dados temporariamente no localStorage
    localStorage.setItem("cadastroNome", formData.nome);
    localStorage.setItem("cadastroEmail", formData.email);
    localStorage.setItem("cadastroSenha", formData.senha);

    // Redireciona para a página de escolha de gênero
    navigate("/Genero");
  };

  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>CADASTRO</h1>
          <img src={manequim} alt="Ajuda" className={style.man} />
        </div>

        <form onSubmit={handleNext} className={style.inputs}>
          <label className={style.label}>Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label className={style.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className={style.label}>Senha:</label>
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <p>Já possui cadastro? <Link to="/login">Entrar</Link></p>

          <button type="submit">Avançar</button>
        </form>
      </div>
    </div>
  );
};

export { FormularioCadastrar };