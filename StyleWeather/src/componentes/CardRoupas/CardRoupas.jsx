// Esse arquivo contém o componente CardRoupas, que gera recomendações de roupas com base na temperatura, lugar e tipo de look (masculinos, femininos ou neutros).
import React from "react";

// Importar todas as imagens necessárias
// Masculino 
// Academia - Frio
import lookFrio1 from "../../assets/looks/frio/masculinas/academia/blusa_termica_preta.png";
import lookFrio2 from "../../assets/looks/frio/masculinas/academia/calca_termica_preta.png";
import lookFrio3 from "../../assets/looks/frio/masculinas/academia/blusa_cinza.png";
import lookFrio4 from "../../assets/looks/frio/masculinas/academia/fone.png";
import lookFrio5 from "../../assets/looks/frio/masculinas/academia/garrafa_agua.png"
import lookFrio6 from "../../assets/looks/frio/masculinas/academia/tenis_preto.png";
// Academia - Ameno
// Academia - Calor
// Balada - Frio
import lookFrio7 from "../../assets/looks/frio/masculinas/balada/jaqueta_preta.png";
import lookFrio8 from "../../assets/looks/frio/masculinas/balada/calca_jeans_cinza.png";
import lookFrio9 from "../../assets/looks/frio/masculinas/balada/tenis_preto.png";
// Balada - Ameno
// Balada - Calor
// Escola - Frio
import lookFrio10 from "../../assets/looks/frio/masculinas/escola/blusa_moletom_preto.png";
import lookFrio11 from "../../assets/looks/frio/masculinas/escola/calca_moletom_cinza.png";
import lookFrio12 from "../../assets/looks/frio/masculinas/escola/bota_preta.png";
// Escola - Ameno
// Escola - Calor
// Parque - Frio
import lookFrio13 from "../../assets/looks/frio/masculinas/parque/blusa_moletom_cinza.png";
import lookFrio14 from "../../assets/looks/frio/masculinas/parque/calca_moletom_preta.png";
import lookFrio15 from "../../assets/looks/frio/masculinas/parque/tenis_preto.png";
// Parque - Ameno
// Parque - Calor
// Praia - Frio
import lookFrio16 from "../../assets/looks/frio/masculinas/praia/mergulho_preta.png";
import lookFrio17 from "../../assets/looks/frio/masculinas/praia/canga_preta_branca.png";
import lookFrio18 from "../../assets/looks/frio/masculinas/praia/toalha_branca.png";
// Praia - Ameno
// Praia - Calor
// Restaurante - Frio
import lookFrio19 from "../../assets/looks/frio/masculinas/restaurante/jaqueta_puffer_branca.png";
import lookFrio20 from "../../assets/looks/frio/masculinas/restaurante/calca_cargo_preta.png";
import lookFrio21 from "../../assets/looks/frio/masculinas/restaurante/bota_preta.png";
// Restaurante - Ameno
// Restaurante - Calor
// Shopping - Frio
import lookFrio22 from "../../assets/looks/frio/masculinas/shopping/jaqueta_puffer_preta.png";
import lookFrio23 from "../../assets/looks/frio/masculinas/shopping/calca_jeans_cinza.png";
import lookFrio24 from "../../assets/looks/frio/masculinas/shopping/bota_preta.png";
// Shopping - Ameno
// Shopping - Calor
// Femininas
// Neutras

// Função para classificar temperatura
const classificarTemperatura = (temperatura) => {
    if (temperatura < 15) return "frio";
    if (temperatura < 20) return "ameno";
    return "calor";
};

// Estrutura de sugestões com imagens e textos
const sugestoesDeRoupa = {
    academia: {
        masculino: {
            frio: {
                texto: "Vista um moletom reforçado, porém de fácil retirada para aproveitar a academia no frio.",
                imagens: [lookFrio1, lookFrio2, lookFrio3, lookFrio4, lookFrio5, lookFrio6],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens:  [lookFrio1, lookFrio2, lookFrio3, lookFrio4, lookFrio5, lookFrio6],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens:  [lookFrio1, lookFrio2, lookFrio3, lookFrio4, lookFrio5, lookFrio6],
            }
        },
    },
    balada: {
        masculino: {
            frio: {
                texto: "Vista um look de destaque, porém não esqueça a jaqueta para aproveitar a balada no frio.",
                imagens: [lookFrio7, lookFrio8, lookFrio9],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens:  [lookFrio7, lookFrio8, lookFrio9],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens:  [lookFrio7, lookFrio8, lookFrio9],
            }
        },
    },
    escola: {
        masculino: {
            frio: {
                texto: "Vá confortável e quentinho no frio, bons estudos!",
                imagens: [lookFrio13, lookFrio14, lookFrio12],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens:  [lookFrio10, lookFrio11, lookFrio12],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens:  [lookFrio10, lookFrio11, lookFrio12],
            }
        },
    },
    parque: {
        masculino: {
            frio: {
                texto: "Vista um moletom reforçado e confortável para aproveitar a calmaria dos parques no frio.",
                imagens: [lookFrio13, lookFrio14, lookFrio15],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens:  [lookFrio13, lookFrio14, lookFrio15],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens:  [lookFrio13, lookFrio14, lookFrio15],
            }
        },
    },
    praia: {
        masculino: {
            frio: {
                texto: "Vista um traje apropriado para mergulho, mas não deixe de aproveitar a praia e o mar no frio.",
                imagens: [lookFrio16, lookFrio17, lookFrio18],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens: [lookFrio16, lookFrio17, lookFrio18],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens: [lookFrio16, lookFrio17, lookFrio18],
            }
        },
    },
    restaurante: {
        masculino: {
            frio: {
                texto: "Prefira uma jaqueta quentinha para aproveitar o restaurante, boa refeição!",
                imagens: [lookFrio19, lookFrio20, lookFrio21],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens: [lookFrio19, lookFrio20, lookFrio21],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens: [lookFrio19, lookFrio20, lookFrio21],
            }
        },
    },
    shopping: {
        masculino: {
            frio: {
                texto: "Usando uma jaqueta reforçada você aproveitará mais as compras no frio.",
                imagens: [lookFrio22, lookFrio23, lookFrio24],
            },
            ameno: {
                texto: "Leve uma camiseta de manga longa para o parque em clima ameno.",
                imagens:[lookFrio22, lookFrio23, lookFrio24],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir o parque no calor.",
                imagens: [lookFrio22, lookFrio23, lookFrio24],
            }
        },
    },
};

// Função para gerar recomendação com base nos parâmetros
const gerarRecomendacao = (temperatura, lugar, tipoLook) => {
    if (!temperatura || !lugar || !tipoLook) return null;

    const faixa = classificarTemperatura(temperatura);
    const dados = sugestoesDeRoupa[lugar]?.[tipoLook]?.[faixa];

    if (!dados) return null;

    return dados;
};

// Componente de recomendação de roupas
const CardRoupas = ({ temperatura, lugar, tipoLook }) => {
    const recomendacao = gerarRecomendacao(temperatura, lugar, tipoLook);

    if (!recomendacao) return null;
    
    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Recomendação:</h3>
            <p>{recomendacao.texto}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                {recomendacao.imagens.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Look ${index + 1}`}
                        style={{ width: "120px", height: "auto", borderRadius: "8px" }}
                    />
                ))}
            </div>
        </div>
    );
};

export { CardRoupas };