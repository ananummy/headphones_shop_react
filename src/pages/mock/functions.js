import React, { useState } from "react";
import { headphones, wirelessHeadphones } from "./data";
import VectorRate from '../assets/svg/VectorRate.svg'

export function CreateHP() {
    const [isActive, setActive] = useState('false')
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        headphones.map((el, id) => (
            <div key={id} className="item">
                <img src={el.img} alt='pic' className="item_img" />
                <div className="info">
                    <p className="item_title">{el.title}</p>
                    <p className="item_price">{el.price}</p>
                    <div className="item_rate">
                        <img src={VectorRate} alt="rate" />
                        <p>{el.rate}</p>
                    </div>
                    <button onClick={handleToggle} className='item_button' id="id">Купить</button>
                </div>
            </div>)
        )
    )
};

export function CreateWHP() {
    const [isActive, setActive] = useState('false')
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        wirelessHeadphones.map((el, id) => (
            <div key={id} className="item">
                <img src={el.img} alt='pic' className="item_img" />
                <div className="info">
                    <p className="item_title">{el.title}</p>
                    <p className="item_price">{el.price}</p>
                    <div className="item_rate">
                        <img src={VectorRate} alt="rate" />
                        <p>{el.rate}</p>
                    </div>
                    <button onClick={handleToggle} className='item_button' id="id">Купить</button>
                </div>
            </div>)
        )
    )
};
