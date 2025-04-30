// Esse componente permite ao usuário escolher entre diferentes estilos de roupa (femininas, masculinas ou neutras).
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./EscolherLook.module.css";

const EscolherLook = () => {
    const { tipoLook, setTipoLook } = useContext(AppContext);

    const opcoesLook = [
        { id: "feminino", rotulo: "Roupas Femininas", emoji: "👩" },
        { id: "masculino", rotulo: "Roupas Masculinas", emoji: "👨" },
        { id: "neutro", rotulo: "Roupas Neutras", emoji: "⚧️" },
    ];

    const salvarEscolha = () => {
        if (tipoLook) {
            const estiloSelecionado = opcoesLook.find((opcao) => opcao.id === tipoLook)?.rotulo;
            alert(`Você escolheu: ${estiloSelecionado}`);
        } else {
            alert("Por favor, selecione um estilo de roupa.");
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