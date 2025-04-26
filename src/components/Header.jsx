import React from 'react';
import Logo from "./UI/logo.jsx";

const Header = ({headerItemsArr}) => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Logo/>
                </div>
                <ul className="header__list">
                    {headerItemsArr.map((item) =>
                        <li className="header__item" key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Header;