import React, {useState} from 'react';
import MapUI from "./UI/map.jsx";
import Modal from "./UI/modal.jsx";

const Map = ({cities,regions}) => {
    const [selectedRegion, setSelectedRegion] = useState('Все')
    const [isPressed, setIsPressed] = useState(false);
    const filteredCities = selectedRegion === 'Все' ?
        cities :
        cities.filter(city => city.region === selectedRegion)
    return (
        <div className="map-section">
            <div className="map-section__header">
                {isPressed ?
                    <div className="map-section__dropdown" style={{zIndex: 1}}>
                        <h3 className="map-section__heading">Оффисы Softline</h3>
                        {isPressed ?
                            <svg onClick={()=>setIsPressed(false)} className="map-section__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.10156 16.0178L12.1016 7.99671L22.1016 16.0178" stroke="#444444" strokeWidth="3"/>
                            </svg>
                            :
                            <svg onClick={()=>setIsPressed(true)} className="map-section__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.10156 7.99683L12.1016 16.0179L22.1016 7.99683" stroke="#444444" strokeWidth="3"/>
                            </svg>
                        }
                    </div>
                    :
                    <div className="map-section__dropdown" style={{zIndex: 0}}>
                        <h3 className="map-section__heading">Оффисы Softline</h3>
                        {isPressed ?
                            <svg onClick={()=>setIsPressed(false)} className="map-section__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.10156 16.0178L12.1016 7.99671L22.1016 16.0178" stroke="#444444" strokeWidth="3"/>
                            </svg>
                            :
                            <svg onClick={()=>setIsPressed(true)} className="map-section__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.10156 7.99683L12.1016 16.0179L22.1016 7.99683" stroke="#444444" strokeWidth="3"/>
                            </svg>
                        }
                    </div>
                }
                <ul className="map-section__navigation">
                    {regions.map(item =>
                    <li className={selectedRegion === item ? 'map-section__item-selected' : 'map-section__item'}
                        key={item}
                        onClick={() => setSelectedRegion(item)}>
                        {item}
                    </li>)}
                </ul>
            </div>
            <div className="map-section__map">
                <MapUI/>
                {filteredCities.map((city) =>
                    ( <div
                        key={city.name}
                        className="map-section__map-container"
                        style={{ left: `${city.x / 15}%`, top: `${city.y / 12}%`, transform: 'translate(-50%, -50%)' }}>
                        <div className="map-section__map-dot">

                        </div> <span className="map-section__map-city">{city.name}</span>
                    </div> ))}
            </div>
            <Modal regionsArr = {regions} citiesArr={cities} isPressed={isPressed} setIsPressed={setIsPressed} />
        </div>
    );
};

export default Map;