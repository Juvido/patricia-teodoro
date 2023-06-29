import { useState } from "react";
import { Link } from "react-router-dom";
import Real from "../../assets/images/real.png";
import ClockIcon from "../../assets/images/clockIcon.png";
import style from "./style.module.css";
import { servicesOptions } from "./data";

export function ServiceDetails({ id, updateCartCount, setShoppingList }) {
  const option = servicesOptions.find((option) => option.id === id);
  const [showPopup, setShowPopup] = useState(false);
  const [numberShop, setNumberShop] = useState(0);
  

  const handleClick = () => {
    setShowPopup(true);
    const newNumberShop = numberShop + 1;
    setNumberShop(newNumberShop);

    const newShop = { id: option?.id, nome: option?.title };
    setShoppingList((prevList) => [...prevList, newShop]);
    updateCartCount(newNumberShop);
  };
  return (
    <>
      <div className={style.general}>
        <a className={style.path}> Home {">"} Serviços </a>
        <h2 className={style.subTitle}> {option?.title} </h2>

        <section className={style.mainSection}>
          <img
            src={option?.image}
            alt={option?.image}
            className={style.imgServices}
          />

          <div className={style.description}>
            <p className={style.text}> {option?.description}</p>

            <div className={style.price}>
              <img src={Real} alt={Real} />
              <p className={style.value}>{option?.price}</p>
            </div>

            <button className={style.button} onClick={handleClick}>
              Comprar
            </button>
          </div>
          {showPopup && (
            <div className={style.popup}>
              <button
                onClick={() => setShowPopup(false)}
                className={style.buttonClose}
              >
                x
              </button>
              <div className={style.popupContent}>
                <h2 className={style.popupTitle}>
                  Serviço adicionado ao carrinho com sucesso!
                </h2>

                <div className={style.popupDetails}>
                  <img
                    src={option?.image}
                    alt={option?.image}
                    className={style.popupImgServices}
                  />
                  <div className={style.popupServices}>
                    <h2 className={style.popupSubTitle}> {option?.title} </h2>
                    <p className={style.popupvalue}> R$ {option?.price}</p>
                  </div>
                </div>
                <div className={style.popupButtons}>
                  <Link to="/">
                    <button className={style.popupButtonsContinue}>
                      Seguir comprando
                    </button>
                  </Link>
                  <Link to="/finalizar">
                    <button className={style.popupButtonsFinish}>
                      Finalizar compra
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className={style.detailsSection}>
          <h3 className={style.secondSubTitle}> Como funciona cada etapa? </h3>

          <div className={style.stagesDiv}>
            <div className={style.textStagesDiv}>
              <img
                src={option?.stage1}
                alt={option?.stage1}
                className={style.imgStages}
              />
              <p className={style.textStages}> {option?.text1}</p>
              <div className={style.durationStages}>
                <img
                  src={ClockIcon}
                  alt={ClockIcon}
                  className={style.clockIcon}
                />
                <p className={style.timeStage}> {option?.time1}</p>
              </div>
            </div>

            <div className={style.textStagesDiv}>
              <img
                src={option?.stage2}
                alt={option?.stage2}
                className={style.imgStages}
              />
              <p className={style.textStages}> {option?.text2}</p>
              <div className={style.durationStages}>
                <img
                  src={ClockIcon}
                  alt={ClockIcon}
                  className={style.clockIcon}
                />
                <p className={style.timeStage}> {option?.time2}</p>
              </div>
            </div>
            <div className={style.textStagesDiv}>
              <img
                src={option?.stage3}
                alt={option?.stage3}
                className={style.imgStages}
              />
              <p className={style.textStages}> {option?.text1}</p>
              <div className={style.durationStages}>
                <img
                  src={ClockIcon}
                  alt={ClockIcon}
                  className={style.clockIcon}
                />
                <p className={style.timeStage}> {option?.time3}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
