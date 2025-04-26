import React from 'react';
import Figure from "./UI/figure.jsx";

const Business = ({businesses}) => {
    return (
        <div className="business-section">
            <h2 className="business-section__heading">Направления бизнеса</h2>
            <div className="business-section__items">
                {businesses.map((item, index) => <Figure key={index} item={item} className = "business-section"/>)}
            </div>
        </div>
    );
};

export default Business;