import { Link } from "react-router-dom";
import Real from "../../assets/images/real.png";
import style from "./style.module.css";
import { servicesOptions } from "./data";

export function ServiceDetails({ id }) {
  const option = servicesOptions.find((option) => option.id === id);
  console.log(option);
  return (
    <>
      <div className={style.general}>
        <a className={style.path}> Home {">"} Serviços </a>
        <h2 className={style.subTitle}> {option?.title} </h2>

        <section className={style.mainSection}>
          <img src={option?.image} alt={option?.image} className={style.img} />

          <div className={style.description}>
            <p className={style.text}> {option?.description}</p>

            <div className={style.price}>
              <img src={Real} alt={Real} />
              <p className={style.value}>{option?.price}</p>
            </div>

            <Link to="/carrinho">
              <button className={style.button}> Comprar </button>
            </Link>
          </div>
        </section>

        <section className={style.secondSection}>
          <h3 className={style.secondSubTitle}> Como funciona cada etapa? </h3>
        </section>
      </div>
    </>
  );
}
