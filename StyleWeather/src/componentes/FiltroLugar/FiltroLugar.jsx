import React from "react";

const FiltroLugar = ({ lugarSelecionado, setLugarSelecionado }) => {
    return (
        <div>
            <label htmlFor="lugar"><strong>Escolha o local:</strong></label>
            <select
                id="lugar"
                value={lugarSelecionado}
                onChange={(e) => setLugarSelecionado(e.target.value)}
            >
                <option value="">Selecione</option>
                <option value="parque">Parque</option>
                <option value="shopping">Shopping</option>
                <option value="bar">Bar</option>
                <option value="praia">Praia</option>
            </select>
        </div>
    );
};

export default FiltroLugar;