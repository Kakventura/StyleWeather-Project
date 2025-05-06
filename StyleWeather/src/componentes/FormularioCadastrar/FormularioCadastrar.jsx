import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from './FormularioCadastrar.module.css';
import manequim from '../../assets/manequim.png';
import { SwitchAlert } from '../../componentes/SwitchAlert';

const FormularioCadastrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

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
    
    // Validação
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
      // Verifica se tem pelo menos 6 caracteres
      if (formData.senha.length < 6) {
        errors.push("• A <b>Senha</b> deve ter 6+ caracteres");
      }
      
      // Verifica se tem letra e número
      const temLetra = /[a-zA-Z]/.test(formData.senha);
      const temNumero = /[0-9]/.test(formData.senha);
      
      if (!temLetra || !temNumero) {
        errors.push("• A <b>Senha</b> deve conter letras e números");
      }
    }
    
    if (errors.length > 0) {
      SwitchAlert.error(errors);
      return;
    }
  
    // Se válido, prossegue
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
          <input
            type="password"
            name="senha"
            placeholder="Mínimo 6 caracteres"
            value={formData.senha}
            onChange={handleChange}
          />
          
          <p>Já possui cadastro? <Link to="/login">Entrar</Link></p>
          <button type="submit">Avançar</button>
        </form>
      </div>
    </div>
  );
};

export { FormularioCadastrar };