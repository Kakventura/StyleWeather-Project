import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './FormularioLogin.module.css';
import usuario from '../../assets/usuario.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { verificarSenha } from '../../services/Auth'; // Função para verificar senha
import { SwitchAlert } from "../SwitchAlert"; // Importa o SwitchAlert
import { AppContext } from "../../context/AppContext"; // Importa o contexto global
import { Eye, EyeOff } from 'react-feather'; // Ícones para mostrar/ocultar senha

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false); // Estado para controlar a visibilidade da senha

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

        // Verifica a senha criptografada
        const senhaCorreta = await verificarSenha(senha, dadosUsuario.senha);
        if (senhaCorreta) {
          setMensagem("Login bem-sucedido!");
          SwitchAlert.successPerfil("Login bem-sucedido!"); // Aumenta a duração para 5 segundos
        } else {
          setMensagem("Senha incorreta.");
          SwitchAlert.error("Senha incorreta.", { duration: 5000 }); // 5 segundos para o erro
        }
      } else {
        setMensagem("Usuário não encontrado no banco de dados.");
        SwitchAlert.error("Usuário não encontrado no banco de dados.", { duration: 5000 }); // 5 segundos para o erro
      }
    } catch (error) {
      console.error("Erro no login:", error.message);
      setMensagem("Email ou senha inválidos.");
      SwitchAlert.error("Email ou senha inválidos.", { duration: 5000 }); // 5 segundos para o erro
    }

    // Limpa os campos de email e senha
    setEmail("");
    setSenha("");
  };

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => setSenhaVisivel(!senhaVisivel);

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
              placeholder="exemplo@dominio.com"

              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={style.formGroup}>
            <label>Senha:</label>
            <div className={style.passwordWrapper}>
              <input
                type={senhaVisivel ? "text" : "password"} // Muda o tipo de input dependendo do estado
                value={senha}
                placeholder="Insira a sua senha"

                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <div className={style.eyeIcon} onClick={togglePasswordVisibility}>
                {senhaVisivel ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <button type="submit">Entrar</button>
          {mensagem && <p className={style.mensagem}>{mensagem}</p>}
        </form>
      </div>
    </div>
  );
};

export { FormularioLogin };
