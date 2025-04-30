// Esse componente é responsável por filtrar o local escolhido pelo usuário e após isso, liberar um botão que exibe o card de clima e look correspondente ao local escolhido. Ele também faz a chamada à API para buscar as informações do clima.
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CardClima } from "../CardClima/CardClima";
import styles from "./FiltroLugar.module.css";
import { buscarClimaPorCidade } from "../../services/weatherApi";

const FiltroLugar = () => {
    const {
        lugarSelecionado,
        setLugarSelecionado,
        cidadeSelecionada,
        setDadosClima,
        dadosClima
    } = useContext(AppContext);

    const [mostrarCards, setMostrarCards] = useState(false);

    const isReadyToFetch = cidadeSelecionada && lugarSelecionado;

    const handleButtonClick = async () => {
        setMostrarCards(false);
        console.log("Look escolhido!");

        try {
            const clima = await buscarClimaPorCidade(cidadeSelecionada);
            setDadosClima(clima);
            setMostrarCards(true);
            console.log("Clima carregado:", clima);
        } catch (error) {
            console.error("Erro ao obter clima:", error);
        }
    };

    return (
        <div className={styles.filtroLugar}>
            <label htmlFor="lugar"><strong>Escolha o local:</strong></label>
            <select
                id="lugar"
                value={lugarSelecionado}
                onChange={(e) => setLugarSelecionado(e.target.value)}
                className={styles.selectLugar}
            >
                <option value="">Selecione</option>
                <option value="academia">Academia</option>
                <option value="balada">Balada</option>
                <option value="escola">Escola</option>
                <option value="parque">Parque</option>
                <option value="praia">Praia</option>
                <option value="restaurante">Restaurante</option>
                <option value="shopping">Shopping</option>
            </select>

            {isReadyToFetch && (
                <button
                    onClick={handleButtonClick}
                    className={styles.btnEscolherLook}
                >
                    Escolher Look
                </button>
            )}

            {mostrarCards && dadosClima && (
                <div className={styles.cardsContainer}>
                    <CardClima />
                </div>
            )}
        </div>
    );
};

export { FiltroLugar };