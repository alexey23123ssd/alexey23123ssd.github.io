import React, {useState} from 'react';

const Gallery = ({galleryArr}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? galleryArr.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLast = currentIndex === galleryArr.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <section className="gallery-section">
            <div className="gallery-section__header-cont">
                <h2 className="gallery-section__heading">Корпоративная жизнь</h2>
                <div className="gallery-section__buttons">
                    <button  onClick={prevSlide} className="gallery-section__button gallery-section_button-left">
                        <img src="src/img/left.svg" alt="arrow-left" className="gallery-section__arrow-left"/>
                    </button>
                    <button onClick={nextSlide} className="gallery-section__button gallery-section_button-right">
                        <img src="src/img/right.svg" alt="arrow-right" className="gallery-section__arrow-right"/>
                    </button>
                </div>
            </div>
            <div className="gallery-section__slider">
                    <img src={galleryArr[currentIndex]}
                         alt="img"
                         className="gallery-section__slider-item"
                    />
            </div>
        </section>
    );
};

export default Gallery;