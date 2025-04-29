import React, { useContext } from "react";
import { AppContext } from "../../context";
import { FiltroCidade } from "../../FiltroCidade";
import { FiltroLugar } from "../../FiltroLugar";
import { CardClima } from "../../CardClima";
import "./Inicial.module.css"; 

const Inicial = () => {
  const {
    dadosClima,
    cidadeSelecionada,
    setCidadeSelecionada,
    lugarSelecionado,
    setLugarSelecionado,
  } = useContext(AppContext);

  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <p>Esta é a página inicial do seu aplicativo.</p>
  
        <FiltroCidade cidade={cidadeSelecionada} setCidade={setCidadeSelecionada} />
        <FiltroLugar lugar={lugarSelecionado} setLugar={setLugarSelecionado} />
      
      {dadosClima && <CardClima clima={dadosClima} />}
    </div>
  );
};

export { Inicial };