import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types"

const StyledCard = styled(Link).attrs(props => ({
  style: {
    backgroundImage: `url(${props.$picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textDecoration: "none"
  }
}))``;

const StyledTitle = styled.p.attrs(props => ({
  style: {
    fontSize: `${props.$size}px`
  }
}))``;

const Card = ({ data }) => {
  const [cardHeight, setCardHeight] = useState(0);
  const cardRef = useRef(null);

  const handleResize = () => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.clientHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fontSize = cardHeight * 0.06;

  return (
    <StyledCard
      to={`/rentals/${data.id}`}
      className="card"
      $picture={data.cover}
      ref={cardRef}
      tabIndex="0"
    >
      <StyledTitle className="card_title" $size={fontSize}>
        {data.title}
      </StyledTitle>
    </StyledCard>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;
