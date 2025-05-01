// Componente para exibir as informações climáticas de uma cidade selecionada
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./CardClima.module.css";

const CardClima = () => {
    const { cidadeSelecionada, dadosClima } = useContext(AppContext);

    if (!dadosClima) return null;

    const {
        name: nomeCidade,
        weather,
        main,
        wind,
        sys,
        visibility,
        clouds,
        coord
    } = dadosClima;

    const clima = weather[0];
    const urlIcone = `https://openweathermap.org/img/wn/${clima.icon}@2x.png`;

    if (cidadeSelecionada && nomeCidade !== cidadeSelecionada) {
        return (
            <div className={styles.loading}>
                <h2>Carregando clima de {cidadeSelecionada}...</h2>
            </div>
        );
    }

    return (
        <div className={styles.cardClima}>
            <h2 className={styles.titulo}>
                {nomeCidade} <span className={styles.coord}></span>
            </h2>

            <div className={styles.topo}>
                <img src={urlIcone} alt={clima.description} className={styles.icone} />
                <div>
                    <h3>{clima.main}</h3>
                    <p className={styles.descricao}>{clima.description}</p>
                </div>
            </div>

            <div className={styles.dados}>
                <p><strong>🌡️ Temperatura:</strong> {main.temp}°C</p>
                <p><strong>🤒 Sensação:</strong> {main.feels_like}°C</p>
                <p><strong>⬇️ Mín:</strong> {main.temp_min}°C | <strong>⬆️ Máx:</strong> {main.temp_max}°C</p>
                <p><strong>💧 Umidade:</strong> {main.humidity}%</p>
                <p><strong>📈 Pressão:</strong> {main.pressure} hPa</p>
                <p><strong>👁️ Visibilidade:</strong> {(visibility / 1000).toFixed(1)} km</p>
                <p><strong>☁️ Nuvens:</strong> {clouds.all}%</p>
                <p><strong>💨 Vento:</strong> {wind.speed} m/s, direção {wind.deg}°</p>
                <p><strong>🌍 País:</strong> {sys.country}</p>
            </div>
        </div>
    );
};

export { CardClima };