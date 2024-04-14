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

const Banner = ({picture, isHeader, darken}) => {
    return (
        <StyledBanner className="banner" $picture={picture} $darken={darken}>
            { isHeader && <p>Chez vous, partout et ailleurs</p> }
        </StyledBanner>
    );
}

Banner.propTypes = {
    picture: PropTypes.string.isRequired,
    isHeader: PropTypes.bool,
    darken: PropTypes.string
}

export default Banner;
