import { Card } from "../../components/CardsHome";
import Card1 from "../../assets/images/Card-1.png";
import Card2 from "../../assets/images/Card-2.png";
import Card3 from "../../assets/images/Card-3.png";
import Card4 from "../../assets/images/Card-4.png";
import style from "./style.module.css";

export function Home() {
  return (
    <div className={style.main} >
      <a className={style.linkHome}> Home </a>

      <h3 className={style.servicos}> Nossos Serviços </h3>

      <div className={style.container}>
        <div className={style.cardRow}>
          <Card cardTitle="COLORAÇÃO PESSOAL" img={Card1} />
          <Card cardTitle="DESCUBRA SEU ESTILO" img={Card2} />
          <Card cardTitle="CLOSET E LOOKS" img={Card3} />
          <Card cardTitle="CONSULTORIA COMPLETA" img={Card4} />
        </div>
      </div>
      <h3> Conheça quem já investiu! </h3>
    </div>
  );
}
