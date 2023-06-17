import Logo from "../../assets/images/logo.png"
import Bag from "../../assets/images/bag.png"
import { Link  } from "react-router-dom";



export function Navbar() {
    return (
    <>
      <div className="mx-auto flex items-center justify-around  lg:px-8 quad-background h-auto">
      <Link to="/">
        <a> Sobre </a>
      </Link>
        <a> Servicos </a>
        <img src={Logo} alt="Patricia Teodoro" />
        <a> Blog </a>
        <a> Contato </a>
        <img src={Bag} alt="bag" />
      </div>
    </>
  );
}