import { Link } from "react-router-dom";
import Service4 from "../../assets/images/completecons.png";
import Real from "../../assets/images/real.png";
import style from "./style.module.css";

export function Complete() {
  return (
    <>
      <div className={style.general}>
        
        <a className={style.path}> Home {">"} Serviços </a>
        <h2 className={style.subTitle}> Consultoria Completa </h2>

        <section className={style.mainSection}>
          <img src={Service4} alt={Service4} className={style.img} />

          <div className={style.description}>
            <p className={style.text}>
              Identificação do seu estilo pessoal, Análise do closet, Limpeza,
              ESCOLHAS do que representa você E para finalizar Entrega do
              dossiê.
            </p>

            <div className={style.price}>
              <img src={Real} alt={Real} />
              <p className={style.value}>2.500 </p>
            </div>

            <button className={style.button}> Comprar </button>
          </div>
        </section>

        <section className={style.secondSection} >
            <h3 className={style.secondSubTitle}> Como funciona cada etapa? </h3>




        </section>


      </div>
    </>
  );
}
