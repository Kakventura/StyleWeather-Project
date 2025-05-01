import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import style from "./FormularioGenero.module.css";
import { criptografarSenha } from "../../services/Auth"; // Importa a função de criptografia


const FormularioGenero = () => {
  const [tipoLook, setTipoLook] = useState("");
  const navigate = useNavigate();

  const opcoesLook = [
    { id: "feminino", rotulo: "Roupas Femininas", emoji: "👩" },
    { id: "masculino", rotulo: "Roupas Masculinas", emoji: "👨" },
    { id: "neutro", rotulo: "Roupas Neutras", emoji: "⚧️" },
  ];

  const handleCadastrar = async () => {
    const nome = localStorage.getItem("cadastroNome");
    const email = localStorage.getItem("cadastroEmail");
    const senha = localStorage.getItem("cadastroSenha");

    if (!tipoLook) {
      alert("Por favor, selecione um estilo de roupa.");
      return;
    }

    try {
      const auth = getAuth();

      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Criptografa a senha antes de salvar no Firestore
      const senhaCriptografada = await criptografarSenha(senha);

      // Salva os dados no Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        email,
        senha: senhaCriptografada,
        tipoLook,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        <div className={style.container}>
          <h2>Selecione uma opção</h2>

          {opcoesLook.map((opcao) => (
            <div
              key={opcao.id}
              className={`${style.opcao} ${tipoLook === opcao.id ? style.selecionado : ""}`}
              onClick={() => setTipoLook(opcao.id)}
            >
              <span>{opcao.emoji}</span> {opcao.rotulo}
            </div>
          ))}

          <button onClick={handleCadastrar} className={style.botaoCadastrar}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export { FormularioGenero };