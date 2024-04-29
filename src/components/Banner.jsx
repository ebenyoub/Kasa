import styled from "styled-components";
import PropTypes from "prop-types"

const StyledBanner = styled.div`
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${props => props.$picture});
        background-size: cover;
        background-position: center;
        filter: brightness(${props => props.$darken});
    }
`

const BannerText = styled.p`
    @media (max-width:768px) {
        span {
            display: block;
        }
    }
`

const Banner = ({ picture, isHeader, darken }) => {
    return (
        <StyledBanner className="banner" $picture={picture} $darken={darken}>
            {/* Ajout BannerText pour le mode mobile. Sur deux lignes et aligné à gauche */}
            {isHeader &&
                <BannerText>
                    <span>Chez vous, </span>
                    <span>partout et ailleurs</span>
                </BannerText>
            }
        </StyledBanner>
    );
}

Banner.propTypes = {
    picture: PropTypes.string.isRequired,
    isHeader: PropTypes.bool,
    darken: PropTypes.string
}

export default Banner;
