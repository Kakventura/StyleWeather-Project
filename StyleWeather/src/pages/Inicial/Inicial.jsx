// Esse componente é a página inicial do aplicativo com as principais funções desenvolvidas.
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiltroCidade, FiltroLugar } from "../../componentes";
import { EscolherLook } from "../../pages";
import { CardRoupas } from "../../componentes/CardRoupas/CardRoupas";
import "./Inicial.module.css";

const Inicial = () => {
  const {
    cidadeSelecionada,
    setCidadeSelecionada,
    lugarSelecionado,
    setLugarSelecionado,
    tipoLook,
    setTipoLook,
    dadosClima,
  } = useContext(AppContext);

  return (
    <div>

      <EscolherLook />
      <FiltroCidade cidade={cidadeSelecionada} setCidade={setCidadeSelecionada} />
      <FiltroLugar lugar={lugarSelecionado} setLugar={setLugarSelecionado} />

      {/* Só exibe recomendação de roupa se já tiver todos os dados */}
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