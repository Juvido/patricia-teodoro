import { Link } from "react-router-dom";
import Real from "../../assets/images/real.png";
import ClockIcon from "../../assets/images/clockIcon.png";
import style from "./style.module.css";
import { servicesOptions } from "./data";

export function ServiceDetails({ id }) {
  const option = servicesOptions.find((option) => option.id === id);

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

            <Link to="/carrinho">
              <button className={style.button}> Comprar </button>
            </Link>
          </div>
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
