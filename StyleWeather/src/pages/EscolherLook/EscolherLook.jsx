import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import styles from "./EscolherLook.module.css";

const EscolherLook = () => {
    const { tipoLook, setTipoLook } = useContext(AppContext);
    const navigate = useNavigate();

    const opcoesLook = [
        { id: "feminino", rotulo: "Roupas Femininas", emoji: "👩" },
        { id: "masculino", rotulo: "Roupas Masculinas", emoji: "👨" },
        { id: "neutro", rotulo: "Roupas Neutras", emoji: "⚧️" },
    ];

    const salvarEscolha = async () => {
        if (!tipoLook) {
          alert("Por favor, selecione um estilo de roupa.");
          return;
        }
      
        try {
          const userId = localStorage.getItem("userId");
          if (!userId) {
            alert("Erro: Usuário não autenticado.");
            return;
          }
      
          const userDoc = doc(db, "usuarios", userId);
          await updateDoc(userDoc, { tipoLook });
      
          alert("Estilo de roupa salvo com sucesso!");
          navigate("/inicio");
        } catch (error) {
          console.error("Erro ao salvar estilo de roupa:", error);
          alert("Erro ao salvar estilo de roupa. Tente novamente.");
        }
    };

    return (
        <div className={styles["container-look"]}>
            <h2 className={styles["titulo-look"]}>Qual estilo de roupa você prefere?</h2>

            {opcoesLook.map((opcao) => (
                <div
                    key={opcao.id}
                    className={`${styles["opcao-look"]} ${tipoLook === opcao.id ? styles["selecionado"] : ""}`}
                    onClick={() => setTipoLook(opcao.id)}
                >
                    <span className={styles["emoji-look"]}>{opcao.emoji}</span>
                    {opcao.rotulo}
                </div>
            ))}

            <button
                className={styles["botao-salvar"]}
                onClick={salvarEscolha}
            >
                Salvar Escolha
            </button>
        </div>
    );
};

export { EscolherLook };