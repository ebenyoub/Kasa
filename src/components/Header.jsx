import logo from "../assets/icons/logo.svg"
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={"/"} tabIndex="0">
                <img src={logo} alt="logo de Kasa" />
            </Link>
            <nav className="navbar">
                <NavLink to={"/"} tabIndex="0">Accueil</NavLink>
                <NavLink to={"/about"} tabIndex="0">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
