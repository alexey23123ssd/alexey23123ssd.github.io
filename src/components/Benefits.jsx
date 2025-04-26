import React from 'react';
import Figure from "./UI/figure.jsx";

const Benefits = ({benefitsArr,benefistsArr}) => {
    return (
        <div className="benefits-section">
            <h2 className="benefits-section__heading">Компенсационный пакет</h2>
            <div className="benefits-section__items">
                    {benefitsArr.map((item,index) => <Figure item={item} key={index} className="benefits-section" />)}
            </div>
            <hr className="benefits-section__break"/>
            <h3 className="benefits-section__heading-small">Программа дополнительной мотивации <br/>
                <span className="benefits-section__heading-small_red"> доплата 12% от суммы</span>
            </h3>
                <div className="benefits-section__items">
                        {benefistsArr.map((item,index) => <Figure item={item} key={index} className="benefits-section" />)}
                </div>
        </div>
    );
};

export default Benefits;