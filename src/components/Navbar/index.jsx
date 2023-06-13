import Logo from "../../assets/images/logo.png"
import Bag from "../../assets/images/bag.png"
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
//import { ConfirmationButton } from "../ConfirmationButton/index";


export function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    setLoggedInUser("");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

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