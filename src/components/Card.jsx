import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <Link
      to={`/rentals/${data.id}`}
      className="card"
      ref={cardRef}
      tabIndex="0"
    >
        <LazyLoadImage
          key={data.id}
          className="lazy-image"
          src={data.cover}
          width="100%"
          height="100%"
          alt={data.title}
          effect="blur"
          placeholderSrc={data.cover}
          loading="lazy"
        />
        <StyledTitle className="card_title" $size={fontSize}>
          {data.title}
        </StyledTitle>
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;
