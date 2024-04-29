import { useEffect, useState } from "react"
import chevron from "../assets/icons/chevron-up-solid.svg"
import PropTypes from "prop-types"

const Slider = ({ rental }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [preloadImages, setPreloadImages] = useState([]);
    const [pagination, setPagination] = useState(false)

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
            <div className="img_container">
                <img src={preloadImages[currentImage] && preloadImages[currentImage].src} alt={`Image ${currentImage}`} />
            </div>
            {/* si le nombre d'image est inférieur à 1, on n'affiche pas le controle du slider (fleches + numerotation) */}
            {rental.pictures.length > 1 && (
                <>
                    <img className="slider__btn slider__btn__left" src={chevron} alt="Bouton précédent" onClick={before} />
                    <img className="slider__btn slider__btn__right" src={chevron} alt="Bouton suivant" onClick={next} />
                    {/* en cliquant sur la numerotation des images on peut basculer entre chiffres et animation */}
                    {pagination ?
                        <ul className="circles" onClick={() => setPagination(!pagination)}>
                            {rental.pictures.map((_, index) => (
                                <li className={currentImage === index ? "circle active" : "circle"} key={index} ></li>
                            ))}
                        </ul> :
                        <span className="number-img" onClick={() => setPagination(!pagination)}>{`${currentImage + 1}/${rental.pictures.length}`}</span>
                    }
                </>
            )}

        </div>
    );
}

Slider.propTypes = {
    rental: PropTypes.object.isRequired
}

export default Slider;
