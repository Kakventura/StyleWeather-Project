import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiltroCidade, FiltroLugar } from "../../componentes";
import { CardRoupas } from "../../componentes/CardRoupas/CardRoupas";
import styles from "./Inicial.module.css";
import { useNavigate } from "react-router-dom";

const Inicial = () => {
  const {
    cidadeSelecionada,
    setCidadeSelecionada,
    lugarSelecionado,
    setLugarSelecionado,
    tipoLook,
    dadosClima,
    usuarioLogado, // Pegando o estado de login
  } = useContext(AppContext);

  const navigate = useNavigate(); // Instanciando o useNavigate

  const handleEscolherLook = () => {
    if (!usuarioLogado) {
      // Exibe um alert informando que o usuário não tem cadastro
      alert("Você não tem um cadastro no site! Por favor, cadastre-se.");
      // Redireciona o usuário para a página de cadastro após o alert
      navigate("/cadastrar");
    }
    // Se estiver logado, continua com a ação de escolher o look
  };

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
