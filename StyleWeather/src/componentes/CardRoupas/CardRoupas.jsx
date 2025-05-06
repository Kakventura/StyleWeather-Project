// Esse arquivo contém o componente CardRoupas, que gera recomendações de roupas com base na temperatura, lugar e tipo de look (masculinos, femininos ou neutros).
import React, { useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import styles from './CardRoupas.module.css';
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
// Probabilidade de chuva
import guarda_chuva from "../../assets/looks/frio/itens_necessarios/guarda_chuva.png";

// Femininas
// Academia - Frio
import LookFrio25 from '../../assets/looks/frio/femininas/academia/blusa_preta.png';
import LookFrio26 from '../../assets/looks/frio/femininas/academia/leggin_preta.png';
import LookFrio27 from '../../assets/looks/frio/femininas/academia/tenis_preto.png';
import LookFrio28 from '../../assets/looks/frio/femininas/academia/garrafa_agua.png';
import LookFrio29 from '../../assets/looks/frio/femininas/academia/fone.png';
// Balada - Frio
import LookFrio30 from '../../assets/looks/frio/femininas/balada/jaqueta_branca.png';
import LookFrio31 from '../../assets/looks/frio/femininas/balada/jaqueta_roxa.png';
import LookFrio32 from '../../assets/looks/frio/femininas/balada/calca_couro_preta.png';
import LookFrio33 from '../../assets/looks/frio/femininas/balada/bota_longa_preta.png';
import LookFrio34 from '../../assets/looks/frio/femininas/balada/bolsa_preta.png';
// Escola - Frio
import LookFrio35 from '../../assets/looks/frio/femininas/escola/blusa_branca.png';
import LookFrio36 from '../../assets/looks/frio/femininas/escola/calca_moletom_branco.png';
import LookFrio37 from '../../assets/looks/frio/femininas/escola/bota_coturno_preta.png';
// Parque - Frio
import LookFrio38 from '../../assets/looks/frio/femininas/parque/blusa_roxa.png';
import LookFrio39 from '../../assets/looks/frio/femininas/parque/calca_termica_preta.png';
import LookFrio40 from '../../assets/looks/frio/femininas/parque/tenis_preto.png';
// Praia - Frio
import LookFrio41 from '../../assets/looks/frio/femininas/praia/mergulho_preta.png';
import LookFrio42 from '../../assets/looks/frio/femininas/praia/canga_preta_branca.png';
import LookFrio43 from '../../assets/looks/frio/femininas/praia/toalha_branca.png';
// Restaurante - Frio
import LookFrio44 from '../../assets/looks/frio/femininas/restaurante/blusa_preta.png';
import LookFrio45 from '../../assets/looks/frio/femininas/restaurante/calca_wide_branca.png';
import LookFrio46 from '../../assets/looks/frio/femininas/restaurante/jaquetaPuffer_preta.png';
import LookFrio47 from '../../assets/looks/frio/femininas/restaurante/bota_ugg_preta.png';
// Shopping - Frio
import LookFrio48 from '../../assets/looks/frio/femininas/shopping/blusa_croche_branca.png';
import LookFrio49 from '../../assets/looks/frio/femininas/shopping/blusa_la_preta.png';
import LookFrio50 from '../../assets/looks/frio/femininas/shopping/calca_pantalona_roxa.png';
import LookFrio51 from '../../assets/looks/frio/femininas/shopping/bota_ugg_preta.png';
import LookFrio52 from '../../assets/looks/frio/femininas/shopping/bolsa_preta.png';

// Academia - Ameno
import LookAmeno1 from '../../assets/looks/ameno/femininas/academia/saia_short.png';
import LookAmeno2 from '../../assets/looks/ameno/femininas/academia/legging.png';
import LookAmeno3 from '../../assets/looks/ameno/femininas/academia/tennis_esport.png';
import LookAmeno4 from '../../assets/looks/ameno/femininas/academia/meia.png';
import LookAmeno5 from '../../assets/looks/ameno/femininas/academia/fone.png';
// Balada - Ameno
import LookAmeno6 from '../../assets/looks/ameno/femininas/balada/macacao.png';
import LookAmeno7 from '../../assets/looks/ameno/femininas/balada/croopped_black.png';
import LookAmeno8 from '../../assets/looks/ameno/femininas/balada/jaqueta_couro.png';
import LookAmeno9 from '../../assets/looks/ameno/femininas/balada/saia_prata.png';
import LookAmeno10 from '../../assets/looks/ameno/femininas/balada/bota_cuturno.png';
// Escola - Ameno
import LookAmeno11 from '../../assets/looks/ameno/femininas/escola/body_branca.png';
import LookAmeno12 from '../../assets/looks/ameno/femininas/escola/blusa_crooped.png';
import LookAmeno13 from '../../assets/looks/ameno/femininas/escola/legging_flair.png';
import LookAmeno14 from '../../assets/looks/ameno/femininas/escola/vans_school.png';
import LookAmeno15 from '../../assets/looks/ameno/femininas/escola/faixa_branca.png';
// Parque - Ameno
import LookAmeno16 from '../../assets/looks/ameno/femininas/parque/vestido_longo_rosa.png';
import LookAmeno17 from '../../assets/looks/ameno/femininas/parque/macaquinho.png';
import LookAmeno18 from '../../assets/looks/ameno/femininas/parque/jaqueta_jeansclara.png';
import LookAmeno19 from '../../assets/looks/ameno/femininas/parque/papete.png';
import LookAmeno20 from '../../assets/looks/ameno/femininas/parque/presilha_flor.png';
// Praia - Ameno
import LookAmeno21 from '../../assets/looks/ameno/femininas/praia/maio_preto.png';
import LookAmeno22 from '../../assets/looks/ameno/femininas/praia/calça_saida.png';
import LookAmeno23 from '../../assets/looks/ameno/femininas/praia/sandalia.png';
import LookAmeno24 from '../../assets/looks/ameno/femininas/praia/saida_preta.png';
import LookAmeno25 from '../../assets/looks/ameno/femininas/praia/chapeu.png';
// Restaurante - Ameno
import LookAmeno26 from '../../assets/looks/ameno/femininas/restaurante/vestido_preto.png';
import LookAmeno27 from '../../assets/looks/ameno/femininas/restaurante/vestido_vermelho.png';
import LookAmeno28 from '../../assets/looks/ameno/femininas/restaurante/saltoalto.png';
import LookAmeno29 from '../../assets/looks/ameno/femininas/restaurante/lenço.png';
import LookAmeno30 from '../../assets/looks/ameno/femininas/restaurante/colar.png';
// Shopping - Ameno
import LookAmeno31 from '../../assets/looks/ameno/femininas/shopping/cropped_verde.png';
import LookAmeno32 from '../../assets/looks/ameno/femininas/shopping/calca_shop.png';
import LookAmeno33 from '../../assets/looks/ameno/femininas/shopping/saia_curta_jeans.png';
import LookAmeno34 from '../../assets/looks/ameno/femininas/shopping/allstar_bota.png';
import LookAmeno35 from '../../assets/looks/ameno/femininas/shopping/bolsa.png';
import LookAmeno36 from '../../assets/looks/ameno/femininas/shopping/xuxa.png';

// Academia - Calor
import LookCalor1 from '../../assets/looks/calor/femininas/academia/blusa_branca.png';
import LookCalor2 from '../../assets/looks/calor/femininas/academia/regata_branca.png';
import LookCalor3 from '../../assets/looks/calor/femininas/academia/short_saia_preto.png';
import LookCalor4 from '../../assets/looks/calor/femininas/academia/tenis_preto.png';
import LookCalor5 from '../../assets/looks/calor/femininas/academia/garrafa_agua.png';
import LookCalor6 from '../../assets/looks/calor/femininas/academia/fone.png';
// Balada - Calor
import LookCalor7 from '../../assets/looks/calor/femininas/balada/cropped_branco.png';
import LookCalor8 from '../../assets/looks/calor/femininas/balada/short_couro_preto.png';
import LookCalor9 from '../../assets/looks/calor/femininas/balada/short_jeans_azul.png';
import LookCalor10 from '../../assets/looks/calor/femininas/balada/papete_preta.png';
import LookCalor11 from '../../assets/looks/calor/femininas/balada/bolsa_preta.png';
// Escola - Calor
import LookCalor12 from '../../assets/looks/calor/femininas/escola/blusa_preta.png';
import LookCalor13 from '../../assets/looks/calor/femininas/escola/pantalona_branca.png';
import LookCalor14 from '../../assets/looks/calor/femininas/escola/crocs_branco.png';
import LookCalor15 from '../../assets/looks/calor/femininas/escola/garrafa_agua.png';
// Parque - Calor
import LookCalor16 from '../../assets/looks/calor/femininas/parque/vestido_branco.png';
import LookCalor17 from '../../assets/looks/calor/femininas/parque/cropped_preto.png';
import LookCalor18 from '../../assets/looks/calor/femininas/parque/jeans_azul.png';
import LookCalor19 from '../../assets/looks/calor/femininas/parque/papete_branca.png';
import LookCalor20 from '../../assets/looks/calor/femininas/parque/viseira_branca.png';
import LookCalor21 from '../../assets/looks/calor/femininas/parque/garrafa_agua.png';
// Praia - Calor
import LookCalor22 from '../../assets/looks/calor/femininas/praia/cropped_preto.png';
import LookCalor23 from '../../assets/looks/calor/femininas/praia/biquini_branco.png';
import LookCalor24 from '../../assets/looks/calor/femininas/praia/biquini_saida_preto.png';
import LookCalor25 from '../../assets/looks/calor/femininas/praia/saia_croche_branca.png';
import LookCalor26 from '../../assets/looks/calor/femininas/praia/chinelo_preto.png';
import LookCalor27 from '../../assets/looks/calor/femininas/praia/viseira_branca.png';
import LookCalor28 from '../../assets/looks/calor/femininas/praia/canga_preta_branca.png';
import LookCalor29 from '../../assets/looks/calor/femininas/praia/toalha_branca.png';
import LookCalor30 from '../../assets/looks/calor/itens_necessarios/protetor_solar.png';
// Restaurante - Calor
import LookCalor31 from '../../assets/looks/calor/femininas/restaurante/cropped_roxo.png';
import LookCalor32 from '../../assets/looks/calor/femininas/restaurante/short_alfaiataria_branco.png';
import LookCalor33 from '../../assets/looks/calor/femininas/restaurante/vestido_branco_eroxo.png';
// Shopping - Calor
import LookCalor34 from '../../assets/looks/calor/femininas/shopping/cropped_branco.png';
import LookCalor35 from '../../assets/looks/calor/femininas/shopping/cropped_roxo.png';
import LookCalor36 from '../../assets/looks/calor/femininas/shopping/short_couro_preto.png';
import LookCalor37 from '../../assets/looks/calor/femininas/shopping/papete_branca.png';
import LookCalor38 from '../../assets/looks/calor/femininas/shopping/bolsa_preta.png';

// Neutras
// Academia - Frio
import LookFrio53 from '../../assets/looks/frio/neutras/academia/blusa_cinza.png';
import LookFrio54 from '../../assets/looks/frio/neutras/academia/blusa_termica_preta.png';
import LookFrio55 from '../../assets/looks/frio/neutras/academia/calca_termica_preta.png';
import LookFrio56 from '../../assets/looks/frio/neutras/academia/tenis_preto.png';
import LookFrio57 from '../../assets/looks/frio/neutras/academia/fone.png';
import LookFrio58 from '../../assets/looks/frio/neutras/academia/garrafa_agua.png';
// Balada - Frio
import LookFrio59 from '../../assets/looks/frio/neutras/balada/jaqueta_couro_preta.png';
import LookFrio60 from '../../assets/looks/frio/neutras/balada/calca_preta.png';
import LookFrio61 from '../../assets/looks/frio/neutras/balada/tenis_branco.png';
// Escola - Frio
import LookFrio62 from '../../assets/looks/frio/neutras/escola/blusa_cinza.png';
import LookFrio63 from '../../assets/looks/frio/neutras/escola/calca_branca.png';
import LookFrio64 from '../../assets/looks/frio/neutras/escola/tenis_branco.png';
// Parque - Frio
import LookFrio65 from '../../assets/looks/frio/neutras/parque/blusa_pretaebranca.png';
import LookFrio66 from '../../assets/looks/frio/neutras/parque/calca_preta.png';
import LookFrio67 from '../../assets/looks/frio/neutras/parque/tenis_preto.png';
// Praia - Frio
import LookFrio68 from '../../assets/looks/frio/neutras/praia/mergulho_preta.png';
import LookFrio69 from '../../assets/looks/frio/neutras/praia/canga_preta_branca.png';
import LookFrio70 from '../../assets/looks/frio/neutras/praia/toalha_branca.png';
// Restaurante - Frio
import LookFrio71 from '../../assets/looks/frio/neutras/restaurante/blusa_preta_ebranca.png';
import LookFrio72 from '../../assets/looks/frio/neutras/restaurante/calca_branca.png';
import LookFrio73 from '../../assets/looks/frio/neutras/restaurante/bota_ugg_preta.png';
// Shopping - Frio
import LookFrio76 from '../../assets/looks/frio/neutras/shopping/blusa_preta.png';
import LookFrio77 from '../../assets/looks/frio/neutras/shopping/calca_branca.png';
import LookFrio78 from '../../assets/looks/frio/neutras/shopping/tenis_branco.png';

// Academia - Ameno
import LookAmeno37 from '../../assets/looks/ameno/neutras/academia/camisa_azul.png';
import LookAmeno38 from '../../assets/looks/ameno/neutras/academia/calça_leve.png';
import LookAmeno39 from '../../assets/looks/ameno/neutras/academia/tenis_academia.png';
import LookAmeno40 from '../../assets/looks/ameno/neutras/academia/meiao.png';
import LookAmeno41 from '../../assets/looks/ameno/neutras/academia/fone_preto.png';
// Balada - Ameno
import LookAmeno42 from '../../assets/looks/ameno/neutras/balada/blusa_couro.png';
import LookAmeno43 from '../../assets/looks/ameno/neutras/balada/camisa_colorida.png';
import LookAmeno44 from '../../assets/looks/ameno/neutras/balada/camisa_transparente.png';
import LookAmeno45 from '../../assets/looks/ameno/neutras/balada/calca_cinza.png';
import LookAmeno46 from '../../assets/looks/ameno/neutras/balada/cuturno_preto.png';
// Escola - Ameno
import LookAmeno47 from '../../assets/looks/ameno/neutras/escola/camisa_listrada.png';
import LookAmeno48 from '../../assets/looks/ameno/neutras/escola/social_preta.png';
import LookAmeno49 from '../../assets/looks/ameno/neutras/escola/calça_preta_larga.png';
import LookAmeno50 from '../../assets/looks/ameno/neutras/escola/calça_tactel.png';
import LookAmeno51 from '../../assets/looks/ameno/neutras/escola/tenis_preto.png';
// Parque - Ameno
import LookAmeno52 from '../../assets/looks/ameno/neutras/parque/camisa_croche.png';
import LookAmeno53 from '../../assets/looks/ameno/neutras/parque/regata_branca.png';
import LookAmeno54 from '../../assets/looks/ameno/neutras/parque/calça_verde.png';
import LookAmeno55 from '../../assets/looks/ameno/neutras/parque/bermuda_neutra.png';
import LookAmeno56 from '../../assets/looks/ameno/neutras/parque/chinelo_bege.png';
import LookAmeno57 from '../../assets/looks/ameno/neutras/parque/cinto.png';
// Praia - Ameno
import LookAmeno58 from '../../assets/looks/ameno/neutras/praia/camisa_termica_preta.png';
import LookAmeno59 from '../../assets/looks/ameno/neutras/praia/short_preto.png';
import LookAmeno60 from '../../assets/looks/ameno/neutras/praia/top.png';
import LookAmeno61 from '../../assets/looks/ameno/neutras/praia/kenner.png';
import LookAmeno62 from '../../assets/looks/ameno/neutras/praia/chapeu_palha.png';
// Restaurante - Ameno
import LookAmeno64 from '../../assets/looks/ameno/neutras/restaurante/camisa_social_verde.png';
import LookAmeno65 from '../../assets/looks/ameno/neutras/restaurante/short_alfaiataria_bege.png';
import LookAmeno67 from '../../assets/looks/ameno/neutras/restaurante/tenis_vans.png';
// Shopping - Ameno
import LookAmeno68 from '../../assets/looks/ameno/neutras/shopping/camisa_preta.png';
import LookAmeno69 from '../../assets/looks/ameno/neutras/shopping/moletom_preto.png';
import LookAmeno70 from '../../assets/looks/ameno/neutras/shopping/calca_preta_larga.png';
import LookAmeno71 from '../../assets/looks/ameno/neutras/shopping/calça_cargo.png';
import LookAmeno72 from '../../assets/looks/ameno/neutras/shopping/all_star_baixo.png';

// Academia - Calor
import LookCalor39 from '../../assets/looks/calor/neutras/academia/regata_branca.png';
import LookCalor40 from '../../assets/looks/calor/neutras/academia/short_preto.png';
import LookCalor41 from '../../assets/looks/calor/neutras/academia/tenis_preto.png';
import LookCalor42 from '../../assets/looks/calor/neutras/academia/garrafa_agua.png';
import LookCalor43 from '../../assets/looks/calor/neutras/academia/fone.png';
// Balada - Calor
import LookCalor44 from '../../assets/looks/calor/neutras/balada/regata_branca.png';
import LookCalor45 from '../../assets/looks/calor/neutras/balada/short_preto.png';
import LookCalor46 from '../../assets/looks/calor/neutras/balada/tenis_preto.png';
// Escola - Calor
import LookCalor47 from '../../assets/looks/calor/neutras/escola/blusa_polo_branca.png';
import LookCalor48 from '../../assets/looks/calor/neutras/escola/short_preto.png';
import LookCalor49 from '../../assets/looks/calor/neutras/escola/tenis_preto.png';
import LookCalor50 from '../../assets/looks/calor/neutras/escola/garrafa_agua.png';
// Parque - Calor
import LookCalor51 from '../../assets/looks/calor/neutras/parque/regata_preta.png';
import LookCalor52 from '../../assets/looks/calor/neutras/parque/short_branco.png';
import LookCalor53 from '../../assets/looks/calor/neutras/parque/chinelo_slide_preto.png';
import LookCalor54 from '../../assets/looks/calor/neutras/parque/viseira_branca.png';
// Praia - Calor
import LookCalor55 from '../../assets/looks/calor/neutras/praia/regata_branca.png';
import LookCalor56 from '../../assets/looks/calor/neutras/praia/short_preto.png';
import LookCalor57 from '../../assets/looks/calor/neutras/praia/chinelo_slide_preto.png';
import LookCalor58 from '../../assets/looks/calor/neutras/praia/toalha_branca.png';
import LookCalor59 from '../../assets/looks/calor/neutras/praia/viseira_branca.png';
import LookCalor60 from '../../assets/looks/calor/neutras/praia/garrafa_agua.png';
// Restaurante - Calor
import LookCalor62 from '../../assets/looks/calor/neutras/restaurante/blusa_branca.png';
import LookCalor63 from '../../assets/looks/calor/neutras/restaurante/calca_preta.png';
import LookCalor64 from '../../assets/looks/calor/neutras/restaurante/tenis_preto.png';
// Shopping - Calor
import LookCalor65 from '../../assets/looks/calor/neutras/shopping/blusa_polo_branca.png';
import LookCalor66 from '../../assets/looks/calor/neutras/shopping/short_preto.png';
import LookCalor67 from '../../assets/looks/calor/neutras/shopping/tenis_preto.png';

// Função para classificar temperatura
const classificarTemperatura = (temperatura) => {
    if (temperatura < 15) return "frio";
    if (temperatura < 25) return "ameno";
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
        feminino: {
            frio: {
                texto: "Use um conjunto aquecido e confortável para te aquecer nos treinos.",
                imagens: [LookFrio25, LookFrio26, LookFrio27, LookFrio28, LookFrio29],
            },
            ameno: {
                texto: "Escolha roupas flexíveis e respiráveis para manter o conforto nos treinos em clima ameno.",
                imagens: [LookAmeno1, LookAmeno2, LookAmeno3, LookAmeno4, LookAmeno5],
            },
            calor: {
                texto: "Use roupas leves como top e shorts para treinar com conforto no calor.",
                imagens: [LookCalor1, LookCalor2, LookCalor3, LookCalor4, LookCalor5, LookCalor6],
            }
        },
        neutro: {
            frio: {
                texto: "Conjunto térmico com camada base ajustável, ideal para atividades físicas em dias frios.",
                imagens: [LookFrio53, LookFrio54, LookFrio55, LookFrio56, LookFrio57, LookFrio58],
            },
            ameno: {
                texto: "Escolha roupas flexíveis e respiráveis para manter o conforto nos treinos em clima ameno.",
                imagens: [LookAmeno37, LookAmeno38, LookAmeno39, LookAmeno40, LookAmeno41],
            },
            calor: {
                texto: "Use roupas leves como top e shorts para treinar com conforto no calor.",
                imagens: [LookCalor39, LookCalor40, LookCalor41, LookCalor42, LookCalor43],
            }
        }
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
        feminino: {
            frio: {
                texto: "Escolha um casaco estiloso e uma bota confortável para arrasar na balada mesmo no frio.",
                imagens: [LookFrio30, LookFrio31, LookFrio32, LookFrio33, LookFrio34],
            },
            ameno: {
                texto: "Combine estilo e conforto com peças modernas que te deixem pronta para dançar a noite toda.",
                imagens: [LookAmeno6, LookAmeno7, LookAmeno8, LookAmeno9, LookAmeno10],
            },
            calor: {
                texto: "Use um vestido leve ou cropped com saia para se divertir com conforto no calor.",
                imagens: [LookCalor7, LookCalor8, LookCalor9, LookCalor10, LookCalor11],
            }
        },
        neutro: {
            frio: {
                texto: "Jaqueta de couro com camadas internas térmicas e calça slim para um visual urbano no frio.",
                imagens: [LookFrio59, LookFrio60, LookFrio61],
            },
            ameno: {
                texto: "Combine peças modernas que equilibrem estilo e conforto para uma noite agradável.",
                imagens: [LookAmeno42, LookAmeno43, LookAmeno44, LookAmeno45, LookAmeno46],
            },
            calor: {
                texto: "Invista em um look despojado e fresco para dançar a noite toda sem desconforto.",
                imagens: [LookCalor44, LookCalor45, LookCalor46],
            }
        }
    },
    escola: {
        masculino: {
            frio: {
                texto: "Vá confortável e quentinho no frio, bons estudos!",
                imagens: [lookFrio10, lookFrio11, lookFrio12],
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
        feminino: {
            frio: {
                texto: "Aposte em um look quentinho com moletom e calça confortável para enfrentar o frio na escola.",
                imagens: [LookFrio35, LookFrio36, LookFrio37],
            },
            ameno: {
                texto: "Prefira roupas casuais e práticas que combinem com a rotina escolar em dias mais frescos.",
                imagens: [LookAmeno11, LookAmeno12, LookAmeno13, LookAmeno14, LookAmeno15],
            },
            calor: {
                texto: "Roupas leves como saias e camisetas são ideais para dias quentes na escola.",
                imagens: [LookCalor12, LookCalor13, LookCalor14, LookCalor15],
            }
        },
        neutro: {
            frio: {
                texto: "Priorize conforto e aquecimento para se concentrar nos estudos sem distrações.",
                imagens: [LookFrio62, LookFrio63, LookFrio64],
            },
            ameno: {
                texto: "Um visual prático e adaptável é ideal para o vai e vem das aulas",
                imagens: [LookAmeno47, LookAmeno48, LookAmeno49, LookAmeno50, LookAmeno51],
            },
            calor: {
                texto: "Mantenha-se fresco com um estilo descomplicado para os dias mais quentes na escola.",
                imagens: [LookCalor47, LookCalor48, LookCalor49, LookCalor50],
            }
        }
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
        feminino: {
            frio: {
                texto: "Use roupas confortáveis como legging térmica e moletom para curtir o parque com estilo no frio.",
                imagens: [LookFrio38, LookFrio39, LookFrio40],
            },
            ameno: {
                texto: "Um visual leve com toque delicado é ideal para passeios ao ar livre em clima ameno.",
                imagens: [LookAmeno16, LookAmeno17, LookAmeno18, LookAmeno19, LookAmeno20],
            },
            calor: {
                texto: "Opte por vestidos leves ou short e blusinha para caminhar com conforto no calor.",
                imagens: [LookCalor16, LookCalor17, LookCalor18, LookCalor19, LookCalor20, LookCalor21],
            }
        },
        neutro: {
            frio: {
                texto: "Um visual aconchegante é essencial para aproveitar o ar livre nos dias mais frios.",
                imagens: [LookFrio65, LookFrio66, LookFrio67],
            },
            ameno: {
                texto: "Escolha um look confortável e stylish para passeios ao ar livre no clima perfeito.",
                imagens: [LookAmeno52, LookAmeno53, LookAmeno54, LookAmeno55, LookAmeno56, LookAmeno57],
            },
            calor: {
                texto: "Proteja-se do sol com um visual leve e descontraído para curtir a natureza.",
                imagens: [LookCalor51, LookCalor52, LookCalor53, LookCalor54],
            }
        }
    },
    praia: {
        masculino: {
            frio: {
                texto: "Vista um traje apropriado para mergulho, mas aproveite a praia mesmo no frio.",
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
        feminino: {
            frio: {
                texto: "Vista um traje apropriado para nadar, mas aproveite o mar mesmo com frio.",
                imagens: [LookFrio41, LookFrio42, LookFrio43],
            },
            ameno: {
                texto: "Aposte em peças soltinhas e confortáveis para curtir a brisa do mar em um dia ameno.",
                imagens: [LookAmeno21, LookAmeno22, LookAmeno23, LookAmeno24, LookAmeno25],
            },
            calor: {
                texto: "Use biquíni ou maiô com saída de praia leve para dias ensolarados e leve seu protetor solar.",
                imagens: [LookCalor22, LookCalor23, LookCalor24, LookCalor25, LookCalor26, LookCalor27, LookCalor28, LookCalor29, LookCalor30],
            }
        },
        neutro: {
            frio: {
                texto: "Aproveite o mar mesmo no frio com um visual que aqueça sem perder o estilo.",
                imagens: [LookFrio68, LookFrio69, LookFrio70],
            },
            ameno: {
                texto: "Um look prático e confortável é ideal para dias de praia com clima instável.",
                imagens: [LookAmeno58, LookAmeno59, LookAmeno60, LookAmeno61, LookAmeno62],
            },
            calor: {
                texto: "Frescor e proteção solar são a chave para curtir a praia nos dias quentes.",
                imagens: [LookCalor55, LookCalor56, LookCalor57, LookCalor58, LookCalor59, LookCalor60],
            }
        }
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
        feminino: {
            frio: {
                texto: "Prefira uma jaqueta quentinha e um look estiloso nesse frio, boa refeição!",
                imagens: [LookFrio44, LookFrio45, LookFrio46, LookFrio47],
            },
            ameno: {
                texto: "Um vestido elegante com acessórios discretos é perfeito para jantares em clima agradável.",
                imagens: [LookAmeno26, LookAmeno27, LookAmeno28, LookAmeno29, LookAmeno30],
            },
            calor: {
                texto: "Use roupas fresquinhas e elegantes para se manter confortável e estilosa.",
                imagens: [LookCalor31, LookCalor32, LookCalor33],
            }
        },
        neutro: {
            frio: {
                texto: "Um visual elegante e aquecido garante conforto em jantares mais refinados.",
                imagens: [LookFrio71, LookFrio72, LookFrio73],
            },
            ameno: {
                texto: "Equilíbrio é tudo: um look sofisticado, mas confortável para refeições ao ar livre.",
                imagens: [LookAmeno64, LookAmeno65, LookAmeno67]
            },
            calor: {
                texto: "Estilo leve e descomplicado combina com jantares de verão",
                imagens: [LookCalor62, LookCalor63, LookCalor64],
            }
        }
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
        feminino: {
            frio: {
                texto: "Usando uma roupa quentinha você aproveitará mais o passeio no frio.",
                imagens: [LookFrio48, LookFrio49, LookFrio50, LookFrio51, LookFrio52],
            },
            ameno: {
                texto: "Use peças estilosas e confortáveis para caminhar e aproveitar o shopping com leveza.",
                imagens: [LookAmeno31, LookAmeno32, LookAmeno33, LookAmeno34, LookAmeno35, LookAmeno36],
            },
            calor: {
                texto: "Opte por roupas leves como vestidos ou shorts com blusas frescas.",
                imagens: [LookCalor34, LookCalor35, LookCalor36, LookCalor37, LookCalor38],
            }
        },
        neutro: {
            frio: {
                texto: "Conforto e estilo são essenciais para maratonas de compras no inverno.",
                imagens: [LookFrio76, LookFrio77, LookFrio78],
            },
            ameno: {
                texto: "Um visual descontraído, mas fashion, é perfeito para passear nas lojas.",
                imagens: [LookAmeno68, LookAmeno69, LookAmeno70, LookAmeno71, LookAmeno72],
            },
            calor: {
                texto: "Looks leves e versáteis fazem a diferença nas compras de dias quentes.",
                imagens: [LookCalor65, LookCalor66, LookCalor67],
            }
        }
    }
};

// Função para gerar recomendação com base nos parâmetros
const gerarRecomendacao = (temperatura, lugar, tipoLook) => {
    if (!temperatura || !lugar || !tipoLook) return null;

    const faixa = classificarTemperatura(temperatura);
    const dados = sugestoesDeRoupa[lugar]?.[tipoLook]?.[faixa];

    if (!dados) return null;

    return dados;
};

const CardRoupas = ({ temperatura, lugar, tipoLook }) => {
    const { dadosClima } = useContext(AppContext);
    const temChuva = dadosClima?.temChuva;

    const recomendacao = gerarRecomendacao(temperatura, lugar, tipoLook);

    if (!recomendacao) return null;

    return (
        <div className={styles.container}>
            <h3 className={styles.titulo}>Recomendações de Look:</h3>
            <p className={styles.descricao}>{recomendacao.texto}</p>
            <div className={styles.gridRoupas}>
                {recomendacao.imagens.map((img, index) => (
                    <div key={index} className={styles.itemRoupa}>
                        <img
                            src={img}
                            alt={`Peça de roupa ${index + 1}`}
                            className={styles.imagemRoupa}
                        />
                    </div>
                ))}

                {temChuva && (
                <div className={`${styles.itemRoupa} ${styles.alertaChuva}`}>
                    <div className={styles.conteudoAlerta}>
                    <img
                        src={guarda_chuva}
                        alt="Guarda-chuva"
                        className={styles.imagemRoupa}
                    />
                    <p className={styles.alertaChuvaTexto}>Não esqueça o guarda-chuva!</p>
                    </div>
                </div>
                )}
            </div>

        </div>
    );
};

export { CardRoupas };