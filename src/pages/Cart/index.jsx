import { servicesOptions } from "../ServiceDetails/data.js";
import style from "./style.module.css";

export function Cart({ shoppingList }) {
  return (
    <div className={style.cart}>
      <a className={style.path}>
        Home {">"} Serviços {">"} Carrinho
      </a>
      <h1 className={style.title}>Carrinho de Compras</h1>
      {shoppingList.map((item) => {
        const option = servicesOptions.find((option) => option.id === item.id);
        return (
          
            <section key={option.id} className={style.generalSection}>
              <img
                src={option?.image}
                alt={option?.image}
                className={style.imgServices}
              />
              <div className={style.sectionDetails}>
                <h2 className={style.subTitle}> {option?.title} </h2>
                
                <div className={style.price}>
                  <img src={Real} alt={Real} />
                  <p className={style.value}>{option?.price}</p>
                </div>

              </div>
            </section>
        );
      })}
    </div>
  );
}
