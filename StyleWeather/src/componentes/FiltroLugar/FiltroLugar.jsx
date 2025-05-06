import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { buscarClimaPorCidade } from "../../services/weatherApi";
import { useNavigate } from "react-router-dom";
import styles from "./FiltroLugar.module.css";
import { CardClima } from "../CardClima/CardClima";
import { SwitchAlert } from "../SwitchAlert"; // Certifique-se que SwitchAlert está correto
import Select from "react-select";

const FiltroLugar = () => {
    const {
        lugarSelecionado,
        setLugarSelecionado,
        cidadeSelecionada,
        setDadosClima,
        dadosClima,
        usuarioLogado
    } = useContext(AppContext);

    const [mostrarCards, setMostrarCards] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar se o menu está aberto
    const isReadyToFetch = cidadeSelecionada && lugarSelecionado;
    const navigate = useNavigate();

    const handleEscolherLook = () => {
        // Aqui você pode usar o SwitchAlert de acordo com a sua implementação
        SwitchAlert.error("Você não tem um cadastro no site! Por favor, cadastre-se.");
        navigate("/cadastrar");
    };

    const handleButtonClick = async () => {
        if (!usuarioLogado) {
            handleEscolherLook();
            return;
        }

        setMostrarCards(false);

        try {
            const clima = await buscarClimaPorCidade(cidadeSelecionada);
            
            const palavrasChaveChuva = ["rain", "drizzle", "thunderstorm", "shower"];
            const temChuva = clima?.weather?.some(w =>
                palavrasChaveChuva.some(chave =>
                    w.main.toLowerCase().includes(chave) ||
                    w.description.toLowerCase().includes(chave)
                )
            ) || clima?.rain !== undefined;

            const climaComChuva = { ...clima, temChuva };
            setDadosClima(climaComChuva);
            setMostrarCards(true);
        } catch (error) {
            console.error("Erro ao obter clima:", error);
        }
    };

    const opcoesLugar = [
        { value: "academia", label: "Academia" },
        { value: "balada", label: "Balada" },
        { value: "escola", label: "Escola" },
        { value: "parque", label: "Parque" },
        { value: "praia", label: "Praia" },
        { value: "restaurante", label: "Restaurante" },
        { value: "shopping", label: "Shopping" }
    ];

    // Função para gerenciar a mudança de abertura do menu
    const handleMenuChange = (isOpen) => {
        setMenuAberto(isOpen); // Atualiza o estado do menu
    };

    return (
        <div className={`${styles.filtroLugar} ${menuAberto ? styles.menuAberto : ""}`}>
            <label htmlFor="lugar"><strong>Escolha o local:</strong></label>

            <div className={styles.selectContainer}>
                <Select
                    id="lugar"
                    options={opcoesLugar}
                    value={opcoesLugar.find(opt => opt.value === lugarSelecionado)}
                    onChange={(selectedOption) => setLugarSelecionado(selectedOption?.value)}
                    placeholder="Selecione o local"
                    classNamePrefix="select"
                    onMenuOpen={() => handleMenuChange(true)} // Quando o menu abrir
                    onMenuClose={() => handleMenuChange(false)} // Quando o menu fechar
                />
            </div>

            {isReadyToFetch && (
                <button
                    onClick={handleButtonClick}
                    className={styles.btnEscolherLook}
                >
                    Escolher look
                </button>
            )}

            {mostrarCards && dadosClima && (
                <div className={styles.cardsContainer}>
                    <CardClima temChuva={dadosClima.temChuva} />
                </div>
            )}
        </div>
    );
};

export { FiltroLugar };
