import Logo from "../../assets/images/logo.png"
import Bag from "../../assets/images/bag.png"
import { Link  } from "react-router-dom";
import style from "./style.module.css"


export function Navbar({cartCount}) {
    return (
    <>
      <div className={style.navbar}>
      <Link to="/">
        <a> Sobre </a>
      </Link>
        <a> Serviços </a>
        <img src={Logo} alt="Patricia Teodoro" className={style.logo}/>
        <a> Blog </a>
        <a> Contato </a>
        <div className={style.bagIcon}>
        <img src={Bag} alt="bag" />
        <span className={style.shopCount}>{cartCount}</span>
        </div>
      </div>
    </>
  );
}