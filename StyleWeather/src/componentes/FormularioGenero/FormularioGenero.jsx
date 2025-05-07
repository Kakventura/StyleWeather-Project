import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import style from "./FormularioGenero.module.css";
import { criptografarSenha } from "../../services/Auth";
import { SweetAlert } from "../SweetAlert";

// Icones de tipo de looks
import femininoImg from "../../assets/icones/icone_femininas.png";
import masculinoImg from "../../assets/icones/icone_masculinas.png";
import neutroImg from "../../assets/icones/icone_neutras.png";

const FormularioGenero = () => {
  const [tipoLook, setTipoLook] = useState("");
  const navigate = useNavigate();

  const opcoesLook = [
    { id: "feminino", rotulo: "Roupas Femininas", imagem: femininoImg },
    { id: "masculino", rotulo: "Roupas Masculinas", imagem: masculinoImg },
    { id: "neutro", rotulo: "Roupas Neutras", imagem: neutroImg },
  ];

  const handleCadastrar = async () => {
    const nome = localStorage.getItem("cadastroNome");
    const email = localStorage.getItem("cadastroEmail");
    const senha = localStorage.getItem("cadastroSenha");

    if (!tipoLook) {
      SweetAlert.error("Por favor, selecione um estilo de roupa.", {
        iconColor: "#800080",
      });
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      const senhaCriptografada = await criptografarSenha(senha);

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        email,
        senha: senhaCriptografada,
        tipoLook,
      });

      SweetAlert.success("Cadastro realizado com sucesso!", {
        iconColor: "#800080",
      });
      navigate("/editar-perfil");
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
      if (error.code === "auth/email-already-in-use") {
        SweetAlert.error("Este e-mail já está em uso. Por favor, use outro e-mail.", {
          iconColor: "#800080",
        });
      } else {
        SweetAlert.error(`Erro ao cadastrar: ${error.message}`, {
          iconColor: "#800080",
        });
      }
    }
  };

  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        <div className={style.container}>
          <h2>Qual estilo de roupa você prefere?</h2>
          <div className={style.opcoesContainer}>
            {opcoesLook.map((opcao) => (
              <div
                key={opcao.id}
                className={`${style.opcao} ${tipoLook === opcao.id ? style.selecionado : ""}`}
                onClick={() => setTipoLook(opcao.id)}
              >
                <img src={opcao.imagem} alt={opcao.rotulo} className={style.icone} />
                <span>{opcao.rotulo}</span>
              </div>
            ))}
          </div>
          <button onClick={handleCadastrar} className={style.botaoCadastrar}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export { FormularioGenero };