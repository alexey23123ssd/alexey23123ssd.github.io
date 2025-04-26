import React from 'react';

const Mission = () => {
    return (
        <div className="mission-section">
            <img src={"/src/img/Left pattern.png"} alt="" className="mission-section__left-pattern"/>
            <h2 className='mission-section__heading'>Миссия Softline</h2>
            <p className="mission-section__text">Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.</p>
            <img src={"/src/img/Right pattern.png"} alt="" className="mission-section__right-pattern"/>
        </div>
    );
};

export default Mission;