import Service1 from "../../assets/images/coloracao.png"
import Service2 from "../../assets/images/estilo.png"
import Service3 from "../../assets/images/closet.png"
import Service4 from "../../assets/images/completecons.png";
import Stage1 from "../../assets/images/stage1.png";
import Stage2 from "../../assets/images/stage2.png";
import Stage3 from "../../assets/images/stage3.png";

export const servicesOptions = [
  {
    title: "Coloração Pessoal",
    description: "Encontre as cores que realçam sua beleza única! Com uma análise detalhada da sua pele, cabelo e olhos, identificamos sua paleta de cores. ",
    price: "500",
    image: Service1,
    id: 1,
    stage1: Stage1,
    text1: `1 - Nos encontraremos 1 vez para identificação do seu estilo pessoal, personalidade, rotina e objetivos dentro da consultoria de imagem.`, 
    time1: `1h30min`,
    stage2: Stage2,
    text2: `2 - Desenvolvimento de novas ideias e perspectivas sobre a imagem que deseja ser passada`,
    time2: `2h`,
    stage3: Stage3,
    text3:  `3 - Entrega do dossiê que irá te guiar no processo pós consultoria. Todo o trabalho será baseado nas atividades que desenvolveremos juntas nesse processo.`,
    time3: `1h`, 
  },
  {
    title: "Descubra seu estilo",
    description: "Descubra o estilo que melhor reflete sua personalidade e objetivos. Identifique suas preferências, aumentando sua confiança e impacto visual.",
    price: "850",
    image: Service2,
    id: 2,
    stage1: Stage1,
    text1: `1 - Nos encontraremos 2 vezes para identificação do seu estilo pessoal, personalidade, rotina e objetivos dentro da consultoria de imagem.`, 
    time1: `1h30min`,
    stage2: Stage2,
    text2: `2 - Desenvolvimento de novas ideias e perspectivas sobre a imagem que deseja ser passada`,
    time2: `2h`,
    stage3: Stage3,
    text3:  `3 - Entrega do dossiê que irá te guiar no processo pós consultoria. Todo o trabalho será baseado nas atividades que desenvolveremos juntas nesse processo.`,
    time3: `1h`, 
  },
  {
    title: "Closet e Looks",
    description: "Uma análise completa do seu guarda-roupa, identificando peças-chave. Iremos criar combinações versáteis e maximizar o potencial do seu guarda-roupa",
    price: "1.000",
    image: Service3,
    id: 3,
    stage1: Stage1,
    text1: `1 - Nos encontraremos 2 vezes para identificação do seu estilo pessoal, biotipo, personalidade, rotina e objetivos dentro da consultoria de imagem.`, 
    time1: `2h`,
    stage2: Stage2,
    text2: `2 - Desenvolvimento de combinação de peças e perspectivas sobre a imagem que deseja ser passada`,
    time2: `2h`,
    stage3: Stage3,
    text3:  `3 - Entrega do dossiê que irá te guiar no processo pós consultoria. Todo o trabalho será baseado nas atividades que desenvolveremos juntas nesse processo.`,
    time3: `1h`, 
  },
  {
    title: "Consultoria Completa",
    description: `Identificação do seu estilo pessoal, Análise do closet, Limpeza, ESCOLHAS do que representa você E para finalizar Entrega do dossiê.`,
    price: "2.500",
    image: Service4,
    stage1: Stage1,
    text1: `1 - Nos encontraremos 2 vezes para identificação do seu estilo pessoal, biotipo, personalidade, rotina e objetivos dentro da consultoria de imagem.`, 
    time1: `2h`,
    stage2: Stage2,
    text2: `2 - Análise do closet, Limpeza e identificação do que representa você. Nesta etapa também montamos looks e desenvolvemos novas ideias e perspectivas`,
    time2: `3h a 4h`,
    stage3: Stage3,
    text3:  `3 - Entrega do dossiê que irá te guiar no processo pós consultoria. Todo o trabalho será baseado nas atividades que desenvolveremos juntas nesse processo.`,
    time3: `1h`,  
    id: 4,
  },
];
