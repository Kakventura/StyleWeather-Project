import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiltroCidade, FiltroLugar } from "../../componentes";
import { CardRoupas } from "../../componentes/CardRoupas/CardRoupas";
import "./Inicial.module.css";

const Inicial = () => {
  const {
    cidadeSelecionada,
    setCidadeSelecionada,
    lugarSelecionado,
    setLugarSelecionado,
    tipoLook,
    dadosClima,
  } = useContext(AppContext);

  if (!tipoLook) {
    return <p>Carregando suas preferências de estilo...</p>;
  }

  return (
    <div>
      <FiltroCidade cidade={cidadeSelecionada} setCidade={setCidadeSelecionada} />
      <FiltroLugar lugar={lugarSelecionado} setLugar={setLugarSelecionado} />

      {dadosClima && lugarSelecionado && tipoLook && (
        <CardRoupas
          temperatura={dadosClima.main?.temp}
          lugar={lugarSelecionado}
          tipoLook={tipoLook}
        />
      )}
    </div>
  );
};

export { Inicial };