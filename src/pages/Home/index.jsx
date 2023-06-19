import { Card } from "../../components/CardsHome";
import { Investor } from "../../components/Investor";
import Card1 from "../../assets/images/Card-1.png";
import Card2 from "../../assets/images/Card-2.png";
import Card3 from "../../assets/images/Card-3.png";
import Card4 from "../../assets/images/Card-4.png";
import Invest1 from "../../assets/images/invest1.png";
import Invest2 from "../../assets/images/invest2.png";
import Calender from "../../assets/images/Calendar.png";
import Logo from "../../assets/images/logo.png";
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
          <Link to="/coloracao">
            <Card cardTitle="COLORAÇÃO PESSOAL" img={Card1} />
          </Link>
          <Link to="/descubra">
            <Card cardTitle="DESCUBRA SEU ESTILO" img={Card2} />
          </Link>
          <Link to="/closet">
            <Card cardTitle="CLOSET E LOOKS" img={Card3} />
          </Link>
          <Link to="/consultoria-completa">
            <Card cardTitle="CONSULTORIA COMPLETA" img={Card4} />
          </Link>
        </div>
      </section>

      <h3 className={style.textInvestors}> Conheça quem já investiu! </h3>

      <section className={style.investorSection}>
        <a className={style.arrowIcon}> ← </a>

        <div className={style.investorSection}>
          <Investor
            investorText="Fazer uma consultoria é resgatar sua essência"
            img={Invest1}
            className={style.imgInvestor}
          />
          <Investor
            investorText="A Patricia se coloca no seu lugar. O foco é você Não o seu guarda-roupa."
            img={Invest2}
            className={style.imgInvestor}
          />
        </div>

        <a className={style.arrowIcon}> → </a>
      </section>

      <section className={style.scheduleSection}>
        <h3 className={style.scheduleSubTitle}> Ainda na dúvida?! </h3>

        <p className={style.scheduleText}>
          Agende uma <span style={{ color: "#98758E" }}>consulta gratuita</span>
          comigo. <br></br>Disponibilizo 15 mimutos para você me contar um pouco
          sobre você e resolver suas dúvidas sobre meu serviço.
        </p>

        <img src={Calender} className={style.calender} />
        <button type="submit" className={style.buttonCalender}>
          Agendar
        </button>

        <h3 className={style.scheduleSubTitle}> Assine nossa Newsletter </h3>

        <div className={style.inputSection}>
          <p className={style.textForm}> Receba conteúdos exclusivos </p>
          <input
            name="email"
            type="email"
            placeholder="e-mail"
            className={style.emailInput}
          />
        </div>
      </section>

     
    </div>
  );
}
