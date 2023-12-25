import React, { useEffect } from "react";
import { headphones, wirelessHeadphones } from "./data";
import VectorRate from '../assets/svg/VectorRate.svg'
import VectorDelete from '../assets/svg/VectorDelete.svg'
import EllipseMinus from '../assets/svg/EllipseMinus.svg'
import EllipsePlus from '../assets/svg/EllipsePlus.svg'

export function CreateHP() {

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
                    <button onClick={() => AddToBasket(el)} className='item_button' id="id">Купить</button>
                </div>
            </div>)
        )
    )
};

export function CreateWHP() {

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
                    <button onClick={() => AddToBasket(el)} className='item_button' id="id">Купить</button>
                </div>
            </div>)
        )
    )
};

let shoppingList = [];
export const AddToBasket = (el) => {
    shoppingList.push(el)
    localStorage.setItem('count', JSON.stringify(shoppingList.length))
    localStorage.setItem('el', JSON.stringify(shoppingList))
};



export function CreateCart() {
    // const DelereCard = () => {
    //     localStorage.removeItem('el')

    // }
    let list = JSON.parse(localStorage.getItem('el'))
    return (
        list ?
            (list.map((el, id) => (
                <div key={id} className="shopping-cart_item">
                    <img src={el.img} alt='pic' className="card_img" />
                    <p className="card_name">{el.title}</p>
                    <p className="card_cost">{el.price}₽</p>
                    <img src={VectorDelete} className="deleteBasket" alt="delete" />
                    <div className="plusMinus">
                        <img src={EllipseMinus} alt="minus" />
                        <p className="cart_count">1</p>
                        <img src={EllipsePlus} alt="plus" />
                    </div>
                </div>
            ))) : <div>пусто</div>
    )
};


export const FinalCheck = () => {
    let list = JSON.parse(localStorage.getItem('el'))
    let sum = 0;
    if (list) {
        list.map((el) => (
            sum += el.price
        ))
    }
    return sum;
}
