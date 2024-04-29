import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorMessage = styled.p`
    @media (max-width:768px) {
        span {
            display: block;
        }
    }
`

const Error = () => {
    return (
        <main className="error-page">
            <h1>404</h1>
            {/* Le texte passe sur deux lignes en mode mobile */}
            <ErrorMessage>
                <span>Oups! La page que </span>
                <span>vous demandez n&apos;existe pas.</span>
            </ErrorMessage>
            {/* Ajout de text-decoration: underscore; sur le lien vers la page d'accueil */}
            <Link to={"/"}>Retourner sur la page d&apos;accueil</Link>
        </main>
    );
}

export default Error;
