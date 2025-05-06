// Componente para exibir as informações climáticas de uma cidade selecionada
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./CardClima.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThermometerHalf,
    faTemperatureLow,
    faDroplet,
    faWind,
    faGaugeHigh,
    faEye,
    faCloud,
    faGlobe,
    faTemperatureArrowUp,
    faTemperatureArrowDown
} from "@fortawesome/free-solid-svg-icons";

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

    // Função para traduzir descrição
    const traduzirDescricao = (descricao) => {
        const traducoes = {
            "clear sky": "céu limpo",
            "few clouds": "poucas nuvens",
            "scattered clouds": "nuvens dispersas",
            "broken clouds": "nuvens quebradas",
            "shower rain": "chuva leve",
            "rain": "chuva",
            "light rain": "chuva fraca",
            "moderate rain": "chuva moderada",
            "heavy intensity rain": "chuva forte",
            "thunderstorm": "trovoada",
            "snow": "neve",
            "mist": "névoa",
            "overcast clouds": "nublado",
        };

        return traducoes[descricao.toLowerCase()] || descricao;
    };

    // Função para traduzir main
    const traduzirMain = (main) => {
        const traducoes = {
            "Thunderstorm": "Trovoada",
            "Drizzle": "Garoa",
            "Rain": "Chuva",
            "Snow": "Neve",
            "Clear": "Céu limpo",
            "Clouds": "Nuvens",
            "Mist": "Névoa",
            "Smoke": "Fumaça",
            "Haze": "Neblina",
            "Dust": "Poeira",
            "Fog": "Nevoeiro",
            "Sand": "Areia",
            "Ash": "Cinzas",
            "Squall": "Rajada",
            "Tornado": "Tornado"
        };
        return traducoes[main] || main;
    };

    return (
        <div className={styles.cardClima}>
            <div className={styles.topo}>
                <div className={styles.tituloContainer}>
                    <h2 className={styles.titulo}>{nomeCidade}</h2>
                </div>

                <div className={styles.iconeContainer}>
                    <img src={urlIcone} alt={clima.description} className={styles.icone} />
                </div>

                <div className={styles.descricaoContainer}>
                    <h3>{traduzirMain(clima.main)}</h3>
                    <p className={styles.descricao}>{traduzirDescricao(clima.description)}</p>
                    <p className={styles.tempatual}><strong><FontAwesomeIcon icon={faThermometerHalf} style={{ color: "#9b7cbb" }} /> </strong> {main.temp}°C</p>
                </div>
            </div>

            <div className={styles.dados}>
                <p>
                    <strong><FontAwesomeIcon icon={faTemperatureArrowUp} style={{ color: "#3498db" }} /> Mín:</strong> {main.temp_min}°C  
                    <strong>  </strong>
                    <strong> <FontAwesomeIcon icon={faTemperatureArrowDown} style={{ color: "#e74c3c" }} /> Máx:</strong> {main.temp_max}°C
                </p>
                <p><strong><FontAwesomeIcon icon={faTemperatureLow} style={{ color: "#e67e22" }} /> Sensação:</strong> {main.feels_like}°C</p>
                <p><strong><FontAwesomeIcon icon={faDroplet} style={{ color: "#3498db" }} /> Umidade:</strong> {main.humidity}%</p>
                <p><strong><FontAwesomeIcon icon={faGaugeHigh} style={{ color: "#8e44ad" }} /> Pressão:</strong> {main.pressure} hPa</p>
                <p><strong><FontAwesomeIcon icon={faEye} style={{ color: "#2c3e50" }} /> Visibilidade:</strong> {(visibility / 1000).toFixed(1)} km</p>
                <p><strong><FontAwesomeIcon icon={faCloud} style={{ color: "#7f8c8d" }} /> Nuvens:</strong> {clouds.all}%</p>
                <p><strong><FontAwesomeIcon icon={faWind} style={{ color: "#2980b9" }} /> Vento:</strong> {wind.speed} m/s, direção {wind.deg}°</p>
                <p><strong><FontAwesomeIcon icon={faGlobe} style={{ color: "#27ae60" }} /> País:</strong> {sys.country}</p>
            </div>
        </div>
    );
};

export { CardClima };