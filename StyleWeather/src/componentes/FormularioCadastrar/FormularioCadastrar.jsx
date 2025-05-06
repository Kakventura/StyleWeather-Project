import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from './FormularioCadastrar.module.css';
import manequim from '../../assets/manequim.png';
import { SwitchAlert } from '../../componentes/SwitchAlert';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ÍCONES ADICIONADOS

const FormularioCadastrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [mostrarSenha, setMostrarSenha] = useState(false); // CONTROLE DE VISIBILIDADE

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    if (!email) return { isValid: false, message: "• Por favor, insira seu <b>Email</b>" };
    if (!email.includes('@')) return { isValid: false, message: "• Email inválido: <b>Falta o @</b> (ex: nome@dominio.com)" };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return { isValid: false, message: "• Formato inválido: <b>Use exemplo@dominio.com</b>" };
    return { isValid: true };
  };

  const handleNext = (e) => {
    e.preventDefault();
    
    const errors = [];
    
    if (!formData.nome.trim()) {
      errors.push("• Por favor, insira seu <b>Nome</b>");
    }
    
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      errors.push(emailValidation.message);
    }
    
    if (!formData.senha) {
      errors.push("• Por favor, insira sua <b>Senha</b>");
    } else {
      if (formData.senha.length < 6) {
        errors.push("• A <b>Senha</b> deve ter 6+ caracteres");
      }

      const temLetra = /[a-zA-Z]/.test(formData.senha);
      const temNumero = /[0-9]/.test(formData.senha);

      if (!temLetra || !temNumero) {
        errors.push("Para uma maior segurança, a <b>Senha</b> deve conter letras e números!");
      }
    }
    
    if (errors.length > 0) {
      SwitchAlert.error(errors);
      return;
    }

    localStorage.setItem("cadastroNome", formData.nome);
    localStorage.setItem("cadastroEmail", formData.email);
    localStorage.setItem("cadastroSenha", formData.senha);
    navigate("/Genero");
  };
  
  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>CADASTRO</h1>
          <img src={manequim} alt="Ajuda" className={style.man} />
        </div>

        <form onSubmit={handleNext} className={style.inputs} noValidate>
          <label className={style.label}>Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={handleChange}
          />

          <label className={style.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="exemplo@dominio.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label className={style.label}>Senha:</label>
          <div className={style.senhaContainer}>
          <input
            type={mostrarSenha ? "text" : "password"}
            name="senha"
            placeholder="Mínimo 6 caracteres"
            value={formData.senha}
            onChange={handleChange}
            className={style.inputSenha}
          />
          <span
            onClick={() => setMostrarSenha(prev => !prev)}
            className={style.iconeSenha}
            title={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          >
            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

          <p>Já possui cadastro? <Link to="/login">Entrar</Link></p>
          <button type="submit">Avançar</button>
        </form>
      </div>
    </div>
  );
};

export { FormularioCadastrar };
