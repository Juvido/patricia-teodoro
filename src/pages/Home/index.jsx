import { Card } from "../../components/CardsHome";
import { Investor } from "../../components/Investor";
import Card1 from "../../assets/images/Card-1.png";
import Card2 from "../../assets/images/Card-2.png";
import Card3 from "../../assets/images/Card-3.png";
import Card4 from "../../assets/images/Card-4.png";
import Invest1 from "../../assets/images/invest1.png";
import Invest2 from "../../assets/images/invest2.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={style.main}>
      <Link to="/">
        <a className={style.linkHome}> Home </a>
      </Link>
      <h3 className={style.servicos}> Nossos Serviços </h3>

      <section className={style.container}>
        <div className={style.cardRow}>
          <Card cardTitle="COLORAÇÃO PESSOAL" img={Card1} />
          <Card cardTitle="DESCUBRA SEU ESTILO" img={Card2} />
          <Card cardTitle="CLOSET E LOOKS" img={Card3} />
          <Card cardTitle="CONSULTORIA COMPLETA" img={Card4} />
        </div>
      </section>
      <h3 className={style.textInvestors}> Conheça quem já investiu! </h3>

      <section className={style.investorSection}>
        <a className={style.arrowIcon}> ← </a>

        <div className={style.investorSection}>
          <Investor
            investorText="Fazer uma consultoria é resgatar sua essência"
            img={Invest1}
          />
          <Investor
            investorText="A Patricia se coloca no seu lugar. O foco é você Não o seu guarda-roupa."
            img={Invest2}
          />
        </div>

        <a className={style.arrowIcon}> → </a>
      </section>
    </div>
  );
}
