import React, {useState} from 'react';

const Modal = ({regionsArr,citiesArr,isPressed}) => {
    const [isClicked, setIsClicked] = useState(false);
    let pressed = "none";
    if(isPressed){
        pressed = "flex";
    }
    const handleClick = (event) => {
        let item;
        if(isClicked){
            setIsClicked(false);
            event.target.src = "src/img/Polygon 13.svg"
            item=event.target.closest(".map-section__modal-item");
            item.querySelector(".map-section__modal-item__list").style.display = "block";
        }
        else {
            setIsClicked(true);
            event.target.src = "src/img/Polygon 8.svg"
            item=event.target.closest(".map-section__modal-item");
            item.querySelector(".map-section__modal-item__list").style.display = "none";
        }

    }
    return (
        <div className="map-section__modal" style={{display:`${pressed}`}}>
            <div className="map-section__modal-wrapper">
                    {regionsArr.map(item => item === "Все"? "" :
                        <div className="map-section__modal-item">
                            <div className="map-section__modal-itemCont">
                                <h3 className="map-section__modal-item__heading">{item}</h3>
                                <img src="src/img/Polygon 8.svg" alt="" onClick={handleClick} className="map-section__modal-item__arrow"/>
                            </div>

                            <ul  className="map-section__modal-item__list">
                                { citiesArr.map((city,index) => city.region===item ?
                                    <li className="map-section__modal-item__list-item" key={index}>
                                        {city.name}
                                    </li>
                                    :
                                    "" )}
                            </ul>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Modal;