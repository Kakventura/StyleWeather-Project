import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from './FormularioLogin.module.css';
import usuario from '../../assets/usuario.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { verificarSenha } from '../../services/Auth'; // Função para verificar senha
import { AppContext } from "../../context/AppContext"; // Importa o contexto global

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const { setTipoLook } = useContext(AppContext); // Atualiza o tipoLook no contexto
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validação de campos
    if (!email || !senha) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    const auth = getAuth();
    const db = getFirestore();

    try {
      // Autentica o usuário no Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salva o userId no localStorage
      localStorage.setItem("userId", user.uid);

      // Recupera os dados do Firestore
      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const dadosUsuario = docSnap.data();
        console.log("Dados do Firestore:", dadosUsuario);

        // Atualiza o tipoLook no contexto e no localStorage
        setTipoLook(dadosUsuario.tipoLook);
        localStorage.setItem("tipoLook", dadosUsuario.tipoLook);

        // Verifica a senha criptografada
        const senhaCorreta = await verificarSenha(senha, dadosUsuario.senha);
        if (senhaCorreta) {
          setMensagem("Login bem-sucedido!");
          navigate("/"); // Redireciona para a página inicial
        } else {
          setMensagem("Senha incorreta.");
        }
      } else {
        setMensagem("Usuário não encontrado no banco de dados.");
      }
    } catch (error) {
      console.error("Erro no login:", error.message);
      setMensagem("Email ou senha inválidos.");
    }

    // Limpa os campos de email e senha
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

        <form onSubmit={handleLogin} className={style.inputs}>
          <div className={style.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={style.formGroup}>
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