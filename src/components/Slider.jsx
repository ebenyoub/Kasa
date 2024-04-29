import { useEffect, useState } from "react"
import chevron from "../assets/icons/chevron-up-solid.svg"
import PropTypes from "prop-types"

const Slider = ({ rental }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [preloadImages, setPreloadImages] = useState([]);

    // Créer les images préchargées uniquement lors du premier rendu
    useEffect(() => {
        const createImages = async () => {
            const imagesBuild = rental.pictures.map(url => {
                const newImage = new Image()
                newImage.src = url
                return newImage
            })
            setPreloadImages(imagesBuild)
        }
        createImages();
    }, [rental]);

    const next = () => {
        const nextIndex = currentImage < rental.pictures.length - 1 ? currentImage + 1 : 0;
        setCurrentImage(nextIndex)
    }

    const before = () => {
        const nextIndex = currentImage === 0 ? rental.pictures.length - 1 : currentImage - 1;
        setCurrentImage(nextIndex)
    }

    return (
        <div className="slider">
            <img className="slider__btn slider__btn__left" src={chevron} alt="Bouton précédent" onClick={before} />
            <img className="slider__btn slider__btn__right" src={chevron} alt="Bouton suivant" onClick={next} />
            <div className="img_container">
                <img src={preloadImages[currentImage] && preloadImages[currentImage].src} alt={`Image ${currentImage}`} />
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
