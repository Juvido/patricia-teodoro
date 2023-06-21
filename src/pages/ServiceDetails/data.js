import Service4 from "../../assets/images/completecons.png";
import Stage1 from "../../assets/images/stage1.png";
import Stage2 from "../../assets/images/stage2.png";
import Stage3 from "../../assets/images/stage3.png";

export const servicesOptions = [
  {
    title: "Coloração Pessoal",
    description: "Em construção! Texto sobre o serviço de Coloração Pessoal",
    price: "A definir",
    image: Service4,
    id: 1,
  },
  {
    title: "Descubra seu estilo",
    description: "Identificação do seu estilo pessoal e sua personalidade.",
    price: "800",
    image: Service4,
    id: 2,
    stage1: Stage1,
    text1: `1 - Nos encontraremos 2 vezes para identificação do seu estilo pessoal, biotipo, personalidade, rotina e objetivos dentro da consultoria de imagem.`, 
    time1: `2h`,
    stage2: Stage2,
    text2: `2 - Desenvolvimento de novas ideias e perspectivas sobre a imagem que deseja ser passada`,
    time2: `3h`,
    stage3: Stage3,
    text3:  `3 - Entrega do dossiê que irá te guiar no processo pós consultoria. Todo o trabalho será baseado nas atividades que desenvolveremos juntas nesse processo.`,
    time3: `1h`, 
  },
  {
    title: "Closet e Looks",
    description: "Em construção! Texto sobre o serviço de Closet",
    price: "A definir",
    image: Service4,
    id: 3,
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
