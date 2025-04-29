import React, { useContext } from "react";
import { AppContexto } from "../../context/AppContext";
import "./EscolherLook.module.css";

const EscolherLook = () => {
    const { tipoLook, setTipoLook } = useContext(AppContexto);

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
        <div className="container-look">
            <h2 className="titulo-look">Qual estilo de roupa você prefere?</h2>

            {opcoesLook.map((opcao) => (
                <div
                    key={opcao.id}
                    className={`opcao-look ${tipoLook === opcao.id ? "selecionado" : ""}`}
                    onClick={() => setTipoLook(opcao.id)}
                >
                    <span className="emoji-look">{opcao.emoji}</span>
                    {opcao.rotulo}
                </div>
            ))}

            <button
                className="botao-salvar"
                onClick={salvarEscolha}
            >
                Salvar Escolha
            </button>
        </div>
    );
};

export default EscolherLook;