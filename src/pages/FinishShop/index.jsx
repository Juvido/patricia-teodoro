import { Link } from "react-router-dom";
import style from "./style.module.css";

export function FinishShop() {
  return (
    <div className={style.mainCart}>
      <a className={style.path}>
        Home {">"} Serviços {">"} Carrinho
      </a>
      <h2 className={style.cartTitle}> Informações Pessoais</h2>

      <form className={style.cartForm}>
        <div className={style.formPersonalData}>
          <label> Nome </label>
          <input
            type="text"
            required={true}
            placeholder="Ana Silveira"
            className={style.inputPersonalData}
          />
          <label> E-mail </label>
          <input
            type="email"
            required={true}
            placeholder="anasilveira@email.com"
            className={style.inputPersonalData}
          />
          <label> CPF </label>
          <input
            type="text"
            required={true}
            placeholder="xxx.xxx.xxx-xx"
            className={style.inputPersonalData}
          />
        </div>
        <div className={style.formAddres}>
          <label> Telefone </label>
          <input type="text" required={true} placeholder="xx xxxxx-xxxx" className={style.inputPersonalData} />
          <label> Endereço </label>
          <input type="text" required={true} placeholder="Rua" className={style.inputAddressStreet} />
          <div className={style.formAddresNumbers}>
            <input type="text" required={true} placeholder="Numero" className={style.inputAddressDetail}/>
            <input type="text" required={true} placeholder="CEP" className={style.inputAddressDetail}/>
          </div>
          <div className={style.formAddresCity}>
            <input type="text" required={true} placeholder="Cidade" className={style.inputAddressDetail}/>
            <input type="text" required={true} placeholder="Estado" className={style.inputAddressDetail} />
          </div>
          <button className={style.formBttn}> Prosseguir </button>
        </div>
      </form>

      <Link to="/">
        <a className={style.bttnBack}> <span style={{ color: "#777777", fontWeight:"900"  }}> ← </span> Voltar </a>
      </Link>
    </div>
  );
}
