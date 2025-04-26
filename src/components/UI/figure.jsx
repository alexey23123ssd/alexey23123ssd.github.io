import React, {useState} from 'react';

const Figure = ({item,className}) => {
    const [isClicked,setIsClicked] = useState(false);
    return (
            <figure className={className+"__item"}>
                <div  className={className+"__item-wrapper"}>
                    <img className={className+"__img"} src={item.img} alt={item.title}/>
                </div>
                <figcaption className={className+"__text"}>
                    {className === "business-section" ?
                        <div className="business-section__text__wrapper">
                            <p className="business-section__text__desc">{item.desc}</p>
                            {isClicked ?
                                <svg className="business-section__arrow" onClick={()=>setIsClicked(false)} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4285 8.21423L7.9999 1.78566L1.57132 8.21423" stroke="white" strokeWidth="2"/>
                                </svg>
                                :
                                <svg className="business-section__arrow" onClick={()=>setIsClicked(true)} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.57153 0.785767L8.0001 7.21434L14.4287 0.785767" stroke="white" strokeWidth="2"/>
                                </svg>
                            }
                        </div>
                        :
                        <p className={className+"__text__desc"}>{item.desc}</p>
                    }

                    {className === "business-section" && isClicked ?
                        <p className="business-section__text__content">{item.content}</p>
                        :
                        null
                    }
                </figcaption>
            </figure>
    );
};
export default Figure;