import React from "react";
import VectorHeart from './assets/svg/VectorHeart.svg';
import VectorBasket from './assets/svg/VectorBasket.svg';
import './styles/style.scss';

function Header() {
    return (
        <div className='Header container'>
            <span className="logo">SHOP</span>
            <ul>
                <li>
                    <div className="favorite">
                        <img src={VectorHeart} alt="favorite" className="favorite-item_fav" />
                        <div className="favorite-item_count">2</div>
                    </div>
                </li>
                <li>
                    <div className="basket">
                        <img src={VectorBasket} alt="basket" className="basket-item_basket" />
                        <div className="basket-item_count none"></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header;