import { servicesOptions } from "../ServiceDetails/data.js";
import Real from "../../assets/images/real.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export function Cart({ shoppingList }) {
  return (
    <div className={style.cart}>
      <a className={style.path}>
        Home {">"} Serviços {">"} Carrinho
      </a>
      <h1 className={style.title}>Resumo da compra</h1>
      {shoppingList.length === 0 ? (
        <p className={style.emptyCartMessage}> Seu carrinho está vazio</p>
      ) : (
        shoppingList.map((item) => {
          const option = servicesOptions.find(
            (option) => option.id === item.id
          );
          return (
            <section key={option.id} className={style.generalSection}>
              <div className={style.shopDetail}>
                <img
                  src={option?.image}
                  alt={option?.image}
                  className={style.imgServices}
                />
                <div className={style.sectionDetails}>
                  <h2 className={style.subTitle}> {option?.title} </h2>

                  <div className={style.price}>
                    <img src={Real} alt={Real} className={style.realIcon} />
                    <p className={style.value}>{option?.price}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      )}
      <Link to="/finalizar">
        <button className={style.btnFinish}> Prosseguir </button>
      </Link>
    </div>
  );
}
