import logo from "../assets/icons/logo.svg"
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorMessage = styled.p`
    @media (max-width:768px) {
        span {
            display: block;
        }
    }
`

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Logo dans footer" />
            </Link>
            {/* Text sur deux lignes en mode mobile */}
            <ErrorMessage>
                <span>© 2020 Kasa. All </span>
                <span>right reserved</span>
            </ErrorMessage>
        </footer>
    );
}

export default Footer;
