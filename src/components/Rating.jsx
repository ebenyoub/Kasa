import starSolid from "../assets/images/star-solid.svg";
import PropTypes from "prop-types"

const Rating = ({ rating }) => {
    const stars = () => {
        const starsArray = [];
        for (let i = 0; i < parseInt(rating); i++) {
            starsArray.push(<img key={`star-solid-${i}`} src={starSolid} alt="Star full" />);
        }
        for (let i = 0; i < 5 - parseInt(rating); i++) {
            starsArray.push(<img key={`star-regular-${i}`} src={starSolid} alt="Star regular" className="desabled" />);
        }
        return starsArray;
    };

    return (
        <div className="rating">
            {stars()}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string.isRequired
}

export default Rating;
