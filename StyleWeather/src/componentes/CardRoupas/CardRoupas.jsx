// Esse arquivo contém o componente CardRoupas, que gera recomendações de roupas com base na temperatura, lugar e tipo de look (masculinos, femininos ou neutros).
import React from "react";

// Importar todas as imagens necessárias para os looks
// Masculino 
// Academia - Frio
import lookFrio1 from "../../assets/looks/frio/masculinas/academia/blusa_termica_preta.png";
import lookFrio2 from "../../assets/looks/frio/masculinas/academia/calca_termica_preta.png";
import lookFrio3 from "../../assets/looks/frio/masculinas/academia/blusa_cinza.png";
import lookFrio4 from "../../assets/looks/frio/masculinas/academia/fone.png";
import lookFrio5 from "../../assets/looks/frio/masculinas/academia/garrafa_agua.png"
import lookFrio6 from "../../assets/looks/frio/masculinas/academia/tenis_preto.png";
// Academia - Ameno
import lookAmeno1 from "../../assets/looks/ameno/masculinas/academia/camisa_termica_preta.png";
import lookAmeno2 from "../../assets/looks/ameno/masculinas/academia/calca_preta.png";
import lookAmeno3 from "../../assets/looks/ameno/masculinas/academia/meia_branca.png"; 
import lookAmeno4 from "../../assets/looks/ameno/masculinas/academia/tenis_branco.png"; 
import lookAmeno5 from "../../assets/looks/ameno/masculinas/academia/fone.png";
// Academia - Calor
import lookCalor1 from "../../assets/looks/calor/masculinas/academia/blusa_termica_preta.png";
import lookCalor2 from "../../assets/looks/calor/masculinas/academia/short_preto.png";
import lookCalor3 from "../../assets/looks/calor/masculinas/academia/tenis_preto.png";
import lookCalor4 from "../../assets/looks/calor/masculinas/academia/garrafa_agua.png";
import lookCalor5 from "../../assets/looks/calor/masculinas/academia/fone.png";
// Balada - Frio
import lookFrio7 from "../../assets/looks/frio/masculinas/balada/jaqueta_preta.png";
import lookFrio8 from "../../assets/looks/frio/masculinas/balada/calca_jeans_cinza.png";
import lookFrio9 from "../../assets/looks/frio/masculinas/balada/tenis_preto.png";
// Balada - Ameno
import lookAmeno6 from "../../assets/looks/ameno/masculinas/balada/camisa_oversized.png";
import lookAmeno7 from "../../assets/looks/ameno/masculinas/balada/regata_canelada.png";
import lookAmeno8 from "../../assets/looks/ameno/masculinas/balada/calça_reta.png";
import lookAmeno9 from "../../assets/looks/ameno/masculinas/balada/blusa_ferrari.png";
import lookAmeno10 from "../../assets/looks/ameno/masculinas/balada/tenis_branco.png";
import lookAmeno11 from "../../assets/looks/ameno/masculinas/balada/pochete.png";
// Balada - Calor
import lookCalor6 from "../../assets/looks/calor/masculinas/balada/blusa_preta.png";
import lookCalor7 from "../../assets/looks/calor/masculinas/balada/short_branco.png";
import lookCalor8 from "../../assets/looks/calor/masculinas/balada/tenis_preto.png";
// Escola - Frio
import lookFrio10 from "../../assets/looks/frio/masculinas/escola/blusa_moletom_preto.png";
import lookFrio11 from "../../assets/looks/frio/masculinas/escola/calca_moletom_cinza.png";
import lookFrio12 from "../../assets/looks/frio/masculinas/escola/bota_preta.png";
// Escola - Ameno
import lookAmeno12 from "../../assets/looks/ameno/masculinas/escola/canelada_preta.png";
import lookAmeno13 from "../../assets/looks/ameno/masculinas/escola/calça_preta.png";
import lookAmeno14 from "../../assets/looks/ameno/masculinas/escola/blusa_adidas.png";
import lookAmeno15 from "../../assets/looks/ameno/masculinas/escola/tenis_puma.png";
import lookAmeno16 from "../../assets/looks/ameno/masculinas/escola/relogio.png";
// Escola - Calor
import lookCalor9 from "../../assets/looks/calor/masculinas/escola/regata_branca.png";
import lookCalor10 from "../../assets/looks/calor/masculinas/escola/short_preto.png";
import lookCalor11 from "../../assets/looks/calor/masculinas/escola/tenis_preto.png";
import lookCalor12 from "../../assets/looks/calor/masculinas/escola/relogio.png";
import lookCalor13 from "../../assets/looks/calor/masculinas/escola/garrafa_agua.png";
// Parque - Frio
import lookFrio13 from "../../assets/looks/frio/masculinas/parque/blusa_moletom_cinza.png";
import lookFrio14 from "../../assets/looks/frio/masculinas/parque/calca_moletom_preta.png";
import lookFrio15 from "../../assets/looks/frio/masculinas/parque/tenis_preto.png";
// Parque - Ameno
import lookAmeno17 from "../../assets/looks/ameno/masculinas/parque/polo_branca.png";
import lookAmeno18 from "../../assets/looks/ameno/masculinas/parque/bermuda_bege.png";   
import lookAmeno19 from "../../assets/looks/ameno/masculinas/parque/blusa_parque.png";
import lookAmeno20 from "../../assets/looks/ameno/masculinas/parque/tenis_baixo.png";  
import lookAmeno21 from "../../assets/looks/ameno/masculinas/parque/bone_parque.png";
// Parque - Calor
import lookCalor14 from "../../assets/looks/calor/masculinas/parque/regata_branca.png";
import lookCalor15 from "../../assets/looks/calor/masculinas/parque/shorts_preto.png";
import lookCalor16 from "../../assets/looks/calor/masculinas/parque/chinelo_preto.png";
import lookCalor17 from "../../assets/looks/calor/masculinas/parque/viseira_branca.png";
import lookCalor18 from "../../assets/looks/calor/masculinas/parque/garrafa_agua.png";
// Praia - Frio
import lookFrio16 from "../../assets/looks/frio/masculinas/praia/mergulho_preta.png";
import lookFrio17 from "../../assets/looks/frio/masculinas/praia/canga_preta_branca.png";
import lookFrio18 from "../../assets/looks/frio/masculinas/praia/toalha_branca.png";
// Praia - Ameno
import lookAmeno22 from "../../assets/looks/ameno/masculinas/praia/regata.png";
import lookAmeno23 from "../../assets/looks/ameno/masculinas/praia/camisa_termica.png";
import lookAmeno24 from "../../assets/looks/ameno/masculinas/praia/bermuda_praia.png";    
import lookAmeno25 from "../../assets/looks/ameno/masculinas/praia/chinelo_praia.png";
import lookAmeno26 from "../../assets/looks/ameno/masculinas/praia/bone.png";
// Praia - Calor
import lookCalor19 from "../../assets/looks/calor/masculinas/praia/sunga_preta.png";
import lookCalor20 from "../../assets/looks/calor/masculinas/praia/short_preto.png";
import lookCalor21 from "../../assets/looks/calor/masculinas/praia/chinelo_preto.png";
import lookCalor22 from "../../assets/looks/calor/masculinas/praia/viseira_branca.png";
import lookCalor23 from "../../assets/looks/calor/masculinas/praia/garrafa_agua.png";
import lookCalor24 from "../../assets/looks/calor/masculinas/praia/toalha_branca.png";
import lookCalor25 from "../../assets/looks/calor/masculinas/praia/guarda_sol.png";

// Restaurante - Frio
import lookFrio19 from "../../assets/looks/frio/masculinas/restaurante/jaqueta_puffer_branca.png";
import lookFrio20 from "../../assets/looks/frio/masculinas/restaurante/calca_cargo_preta.png";
import lookFrio21 from "../../assets/looks/frio/masculinas/restaurante/bota_preta.png";
// Restaurante - Ameno
import lookAmeno27 from "../../assets/looks/ameno/masculinas/restaurante/polo_social.png";
import lookAmeno28 from "../../assets/looks/ameno/masculinas/restaurante/camisa_social.png";
import lookAmeno29 from "../../assets/looks/ameno/masculinas/restaurante/colete.png";
import lookAmeno30 from "../../assets/looks/ameno/masculinas/restaurante/calça_social.png";
import lookAmeno31 from "../../assets/looks/ameno/masculinas/restaurante/sapatenis.png";
import lookAmeno32 from "../../assets/looks/ameno/masculinas/restaurante/relogio_couro.png";
// Restaurante - Calor
import lookCalor26 from "../../assets/looks/calor/masculinas/restaurante/camisa_branca.png";
import lookCalor27 from "../../assets/looks/calor/masculinas/restaurante/short_preto.png";
import lookCalor28 from "../../assets/looks/calor/masculinas/restaurante/tenis_preto.png";
// Shopping - Frio
import lookFrio22 from "../../assets/looks/frio/masculinas/shopping/jaqueta_puffer_preta.png";
import lookFrio23 from "../../assets/looks/frio/masculinas/shopping/calca_jeans_cinza.png";
import lookFrio24 from "../../assets/looks/frio/masculinas/shopping/bota_preta.png";
// Shopping - Ameno
import lookAmeno33 from "../../assets/looks/ameno/masculinas/shopping/camisa_oversized_branca.png";
import lookAmeno34 from "../../assets/looks/ameno/masculinas/shopping/calca_reta.png";
import lookAmeno35 from "../../assets/looks/ameno/masculinas/shopping/tenis_nike_cinza.png";
import lookAmeno36 from "../../assets/looks/ameno/masculinas/shopping/bone_ny.png";
import lookAmeno37 from "../../assets/looks/ameno/masculinas/shopping/corrente.png";
// Shopping - Calor
import lookCalor29 from "../../assets/looks/calor/masculinas/shopping/camisa_branca.png";
import lookCalor30 from "../../assets/looks/calor/masculinas/shopping/short_preto.png";
import lookCalor31 from "../../assets/looks/calor/masculinas/shopping/chinelo_preto.png";

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
                texto: "vista uma camiseta, mas prefira uma calça para o clima ameno no treino de hoje!",
                imagens:  [lookAmeno1, lookAmeno2, lookAmeno3, lookAmeno4, lookAmeno5],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda para curtir a academia no calor. Se hidrate!",
                imagens:  [lookCalor1, lookCalor2, lookCalor3, lookCalor4, lookCalor5],
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
                texto: "Prefira uma blusa leve, mas não esqueça a jaqueta, pode esfriar mais após a balada.",
                imagens:  [lookAmeno6, lookAmeno7, lookAmeno8, lookAmeno9, lookAmeno10, lookAmeno11],
            },
            calor: {
                texto: "Prefira uma camiseta leve e bermuda para curtir bem a balada no calor!",
                imagens: [lookCalor6, lookCalor7, lookCalor8],
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
                texto: "Leve uma blusa, mas fique confortável para aproveitar os estudos sob o clima ameno.",
                imagens: [lookAmeno12, lookAmeno13, lookAmeno14, lookAmeno15, lookAmeno16],
            },
            calor: {
                texto: "Vista roupas leves e beba bastante agua durante os estudos!",
                imagens:   [lookCalor9, lookCalor10, lookCalor11, lookCalor12, lookCalor13],
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
                imagens: [lookAmeno17, lookAmeno18, lookAmeno19, lookAmeno20, lookAmeno21],
            },
            calor: {
                texto: "Escolha um look leve e curta a sombra das árvores do parque no calor.",
                imagens:   [lookCalor14, lookCalor15, lookCalor16, lookCalor17, lookCalor18],
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
                texto: "Aproveite a praia sob clima ameno, mas não esqueça de levar uma blusa caso esfrie mais.",
                imagens: [lookAmeno22, lookAmeno23, lookAmeno24, lookAmeno25, lookAmeno26],
            },
            calor: {
                texto: "Clima perfeito para ir confortavél e fresquinho no calor da praia.",
                imagens:   [lookCalor19, lookCalor20, lookCalor21, lookCalor22, lookCalor23, lookCalor24, lookCalor25],
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
                texto: "Escolha um look fresco e aproveite o restaurante! Não esqueça de levar uma blusa.",
                imagens:  [lookAmeno27, lookAmeno28, lookAmeno29, lookAmeno30, lookAmeno31, lookAmeno32],
            },
            calor: {
                texto: "Vista uma camiseta leve e bermuda. Aproveite o restaurante!",
                imagens: [lookCalor26, lookCalor27, lookCalor28],
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
                texto: "Prefira looks confortáveis e leves para compras sob o clima ameno.",
                imagens:[lookAmeno33, lookAmeno34, lookAmeno35, lookAmeno36, lookAmeno37],
            },
            calor: {
                texto: "Vá leve e confortavél ao shopping no calor. Boa compras!",
                imagens: [lookCalor29, lookCalor30, lookCalor31],
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
