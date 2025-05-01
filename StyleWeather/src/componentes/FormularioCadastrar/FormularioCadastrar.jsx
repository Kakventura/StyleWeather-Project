import React, { useState } from "react";
import style from './FormularioCadastrar.module.css';
import { Link } from 'react-router-dom';
import manequim from '../../assets/manequim.png';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { criptografarSenha } from '../../services/Auth'; // Função para criptografar senha
import { db } from '../../services/firebaseConfig';


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

    // Verifica se todos os campos estão preenchidos
    if (!formData.nome || !formData.email || formData.senha.length < 6) {
      alert("Por favor, preencha todos os campos e use uma senha com pelo menos 6 caracteres.");
      return;
    };
    
    const auth = getAuth();

    try {
      // Cadastra o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.senha
      );
      console.log("Usuário criado:", userCredential.user);


      const user = userCredential.user;

      // Criptografa a senha antes de salvar no Firestore
      const senhaCriptografada = await criptografarSenha(formData.senha);

      // Salva os dados do usuário no Firestore
      console.log("Preparando para salvar no Firestore...");
        await setDoc(doc(db, "usuarios", user.uid), {
          nome: formData.nome,
          email: formData.email,
          senha: senhaCriptografada,
        });
      console.log("Dados salvos no Firestore com sucesso!");

      
      setFormData({ nome: "", email: "", senha: "" });
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("O email já está em uso. Por favor, use outro email.");
      } else if (error.code === "auth/invalid-email") {
        alert("O email fornecido é inválido.");
      } else if (error.code === "auth/weak-password") {
        alert("A senha é muito fraca. Use pelo menos 6 caracteres.");
      } else {
        alert("Erro ao cadastrar: " + error.message);
      }
      console.error("Erro ao cadastrar usuário:", error.message);
    }
  };

  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        {/* Lado esquerdo */}
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>CADASTRO</h1>
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
          <p>Já possui cadastro? <Link to="/login">Entrar</Link></p>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export { FormularioCadastrar };