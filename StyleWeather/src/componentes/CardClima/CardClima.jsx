import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./CardClima.module.css";

const CardClima = ({ clima }) => {
    const { cidadeSelecionada } = useContext(AppContext);

    if (!clima) return null;

    const {
        name: nomeCidade,
        weather: listaClima,
        main: dadosPrincipais,
        wind: vento,
        sys: sistema,
        visibility: visibilidade,
        clouds: nuvens,
        coord: coordenadas
    } = clima;

    const infoClima = listaClima[0];
    const urlIcone = `https://openweathermap.org/img/wn/${infoClima.icon}@2x.png`;

    return (
        <div className="card-clima">
        <h2>{nomeCidade} ({coordenadas.lat}, {coordenadas.lon})</h2>

        <div className="info-clima">
            <img src={urlIcone} alt={infoClima.description} />
            <p><strong>{infoClima.main}:</strong> {infoClima.description}</p>
        </div>

        <p><strong>Temperatura:</strong> {dadosPrincipais.temp}°C</p>
        <p><strong>Sensação Térmica:</strong> {dadosPrincipais.feels_like}°C</p>
        <p><strong>Mínima:</strong> {dadosPrincipais.temp_min}°C | <strong>Máxima:</strong> {dadosPrincipais.temp_max}°C</p>
        <p><strong>Umidade:</strong> {dadosPrincipais.humidity}%</p>
        <p><strong>Pressão:</strong> {dadosPrincipais.pressure} hPa</p>
        <p><strong>Visibilidade:</strong> {(visibilidade / 1000).toFixed(1)} km</p>
        <p><strong>Nuvens:</strong> {nuvens.all}%</p>
        <p><strong>Vento:</strong> {vento.speed} m/s, direção {vento.deg}°</p>
        <p><strong>País:</strong> {sistema.country}</p>
        </div>
    );
};

export {CardClima};