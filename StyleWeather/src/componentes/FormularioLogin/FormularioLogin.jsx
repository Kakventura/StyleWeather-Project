import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { verificarSenha } from '../../services/Auth'; // Importa a função de verificação de senha
import style from './FormularioLogin.module.css';
import usuario from '../../assets/usuario.png';
import { Inicial } from "../../pages";

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find((usuario) => usuario.email === email);

    if (usuarioValido) {
      const senhaCorreta = await verificarSenha(senha, usuarioValido.senha);
      if (senhaCorreta) {
        setMensagem("Login bem-sucedido!!");
        navigate("/"); // redireciona
        return;
      }
    }

    setMensagem("Email ou senha inválidos.");
    setEmail("");
    setSenha("");
  };

  return (
    <div className={style.background}>
      <div className={style.cardLogin}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>LOGIN</h1>
          <img src={usuario} alt="Ajuda" className={style.user} />
        </div>

        <form onSubmit={handleLogin} className = {style.inputs}>
          <div className = {style.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className = {style.formGroup}>
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit">Entrar</button>
          {mensagem && <p className={style.mensagem}>{mensagem}</p>}
        </form>
      </div>
    </div>
  );
};

export { FormularioLogin };