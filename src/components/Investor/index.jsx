import style from "./style.module.css";

export function Investor(props) {
  return (
    <div className={style.investorContainer}>
      <img src={props.img} alt={props.imgTitle} className={style.imgInvestor} />
      
        <h2 className={style.investorText}>{props.investorText}</h2>
        <p className={style.investorStars}>
        ★★★★★
        </p>
      
    </div>
  );
}
