// Componente para escolher um lugar, exibir as informações climáticas de uma cidade selecionada, também exibe se há chuva ou não.
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { buscarClimaPorCidade } from "../../services/weatherApi";
import styles from "./FiltroLugar.module.css";
import { CardClima } from "../CardClima/CardClima";

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

            // Verifica se há chuva com base nos dados retornados
            const temChuva = clima?.weather?.some(w =>
                w.main.toLowerCase().includes("rain") ||
                w.description.toLowerCase().includes("rain")
            ) || clima?.rain !== undefined;


            // Insere a informação de chuva no objeto de clima
            const climaComChuva = { ...clima, temChuva };

            setDadosClima(climaComChuva); // Atualiza o estado com temChuva
            setMostrarCards(true);
            console.log("Clima carregado:", climaComChuva);
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
                    <CardClima temChuva={dadosClima.temChuva} /> {/* Passando temChuva para o componente */}
                </div>
            )}
        </div>
    );
};

export { FiltroLugar };