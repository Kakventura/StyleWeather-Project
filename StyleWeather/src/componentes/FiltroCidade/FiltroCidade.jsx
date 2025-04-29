import React from "react";
import CreatableSelect from "react-select/creatable";

const cidades = [
    { label: "São Paulo", value: "São Paulo" },
    { label: "Rio de Janeiro", value: "Rio de Janeiro" },
    { label: "Curitiba", value: "Curitiba" },
    { label: "Recife", value: "Recife" },
    { label: "Porto Alegre", value: "Porto Alegre" },
    { label: "Belo Horizonte", value: "Belo Horizonte" },
    { label: "Salvador", value: "Salvador" },
    { label: "Fortaleza", value: "Fortaleza" },
    { label: "Brasília", value: "Brasília" },
    { label: "Natal", value: "Natal" },
    { label: "João Pessoa", value: "João Pessoa" },
    { label: "Maceió", value: "Maceió" },
    { label: "Teresina", value: "Teresina" },
    { label: "Campinas", value: "Campinas" },
    { label: "Goiânia", value: "Goiânia" },
    { label: "São Luís", value: "São Luís" },
    { label: "Cuiabá", value: "Cuiabá" },
    { label: "Aracaju", value: "Aracaju" },
    { label: "Belém", value: "Belém" },
    { label: "Manaus", value: "Manaus" }
];

const FiltroCidade = ({ cidadeSelecionada, setCidadeSelecionada }) => {
    const handleSelect = (opcaoSelecionada) => {
        setCidadeSelecionada(opcaoSelecionada ? opcaoSelecionada.value : "");
    };

    return (
        <div>
            <label htmlFor="cidade"><strong>Cidade:</strong></label>
            <CreatableSelect
                options={cidades}
                onChange={handleSelect}
                value={cidadeSelecionada ? { label: cidadeSelecionada, value: cidadeSelecionada } : null}
                placeholder="Escolha ou digite uma cidade"
                isClearable
            />
        </div>
    );
};

export default FiltroCidade;