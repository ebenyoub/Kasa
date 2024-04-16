import { useState } from "react"
import chevron from "../assets/images/chevron-up-solid.svg"
import PropTypes from "prop-types"


const Slider = ({ rental }) => {
    const [currentImage, setCurrentImage] = useState(0)

    const next = () => {
        const slider = document.querySelector(".slider .img_container img")
        const nextIndex = rental.pictures[currentImage + 1] ? currentImage + 1 : 0;
        slider.src = rental.pictures[nextIndex]
        setCurrentImage(nextIndex)
    }

    const before = () => {
        const slider = document.querySelector(".slider .img_container img")
        const nextIndex = currentImage - 1 >= 0 ? currentImage - 1 : rental.pictures.length - 1;
        slider.src = rental.pictures[nextIndex]
        setCurrentImage(nextIndex)
    }

    return (
        <div className="slider">
            <img className="slider__btn slider__btn__left" src={chevron} alt="Bouton précédent" onClick={before} />
            <img className="slider__btn slider__btn__right" src={chevron} alt="Bouton suivant" onClick={next} />
            <div className="img_container">
                <img src={rental && rental.pictures[currentImage]} alt="cosy" />
            </div>
            <ul className="circles">
                {rental.pictures.map((_, index) => (
                    <li className={currentImage === index ? "circle active" : "circle"} key={index} ></li>
                ))}
            </ul>
        </div>
    );
}

Slider.propTypes = {
    rental: PropTypes.object.isRequired
}

export default Slider;

