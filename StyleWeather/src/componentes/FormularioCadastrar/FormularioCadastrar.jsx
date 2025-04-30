import React, { useState } from "react";
import style from './FormularioCadastrar.module.css'
import { Link } from 'react-router-dom'
import manequim from '../../assets/manequim.png';
import { criptografarSenha } from '../../services/Auth'; // Importa a função de criptografia

const FormularioCadastrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuariosExistentes = JSON.parse(localStorage.getItem("usuarios")) || [];

     // Verifica se o email já está cadastrado
     const usuarioExistente = usuariosExistentes.find(
      (usuario) => usuario.email === formData.email
    );
    if (usuarioExistente) {
      alert("Usuário já cadastrado!");
      return;
    }

     // Criptografa a senha antes de salvar
    const senhaCriptografada = await criptografarSenha(formData.senha);

      // Adiciona o novo usuário com a senha criptografada
      const novosUsuarios = [
        ...usuariosExistentes,
        { ...formData, senha: senhaCriptografada },
      ];

    localStorage.setItem("usuarios", JSON.stringify(novosUsuarios));

    alert("Usuário cadastrado com sucesso!");
    setFormData({ nome: "", email: "", senha: "" });
  };

  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        {/* Lado esquerdo */}
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>Crie sua conta</h1>
                    <img src={manequim} alt="Ajuda" className={style.man} />
          
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className={style.inputs}>
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
        <p>Já possui cadastro? <Link to ="/login">Entrar</Link>
        </p>

     <button type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  );
};

export { FormularioCadastrar }