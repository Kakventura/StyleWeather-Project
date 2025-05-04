// Esse componente é responsável por filtrar a cidade escolhida pelo usuário. Ele utiliza o componente CreatableSelect da biblioteca react-select para permitir que o usuário escolha uma cidade de uma lista pré-definida ou crie uma nova opção. O valor selecionado é armazenado no contexto do aplicativo.
import React, { useContext } from "react";
import CreatableSelect from "react-select/creatable";
import { AppContext } from "../../context/AppContext";
import styles from './FiltroCidade.module.css';

const cidades = [
    { label: "Aracaju", value: "Aracaju" },
    { label: "Belo Horizonte", value: "Belo Horizonte" },
    { label: "Belém", value: "Belém" },
    { label: "Brasília", value: "Brasília" },
    { label: "Campinas", value: "Campinas" },
    { label: "Curitiba", value: "Curitiba" },
    { label: "Cuiabá", value: "Cuiabá" },
    { label: "Fortaleza", value: "Fortaleza" },
    { label: "Goiânia", value: "Goiânia" },
    { label: "João Pessoa", value: "João Pessoa" },
    { label: "Maceió", value: "Maceió" },
    { label: "Manaus", value: "Manaus" },
    { label: "Natal", value: "Natal" },
    { label: "Porto Alegre", value: "Porto Alegre" },
    { label: "Recife", value: "Recife" },
    { label: "Rio de Janeiro", value: "Rio de Janeiro" },
    { label: "São Luís", value: "São Luís" },
    { label: "São Paulo", value: "São Paulo" },
    { label: "Teresina", value: "Teresina" }  
];

const FiltroCidade = () => {
    const { cidadeSelecionada, setCidadeSelecionada } = useContext(AppContext);

    const handleSelect = (opcaoSelecionada) => {
        setCidadeSelecionada(opcaoSelecionada ? opcaoSelecionada.value : "");
    };

    return (
        <div className={styles.filtroContainer}>
        <label className={styles.filtroLabel} htmlFor="cidade-select">
            Cidade
        </label>
        <div className={styles.selectContainer}>
            <CreatableSelect
                inputId="cidade-select"
                options={cidades}
                onChange={handleSelect}
                value={cidadeSelecionada ? { label: cidadeSelecionada, value: cidadeSelecionada } : null}
                placeholder="Escolha ou digite uma cidade"
                isClearable
                classNamePrefix="select"
                menuPlacement="auto"
                maxMenuHeight={200}
            />
       
            </div>
        </div>
    );
};

export { FiltroCidade };