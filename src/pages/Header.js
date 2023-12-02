import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavRoutes } from "./mock/data";
import VectorHeart from './assets/svg/VectorHeart.svg';
import VectorBasket from './assets/svg/VectorBasket.svg';
import './styles/style.scss';

function Header() {
    // let elList = 0
    // const [buy, setBuy] = useState(false);
    const [count, setCount] = useState(0);
    // JSON.parse(localStorage.getItem('el')) ? elList = JSON.parse(localStorage.getItem('el')).length : elList = 0;
    // console.log(elList);
    let list = JSON.parse(localStorage.getItem('el'))

    useEffect(() => {
        if (list)
            setCount(list.length)
        document.title = `${count}`;
    }, [list, count]);

    // setCount()

    // if (JSON.parse(localStorage.getItem('el'))) {
    //     setCount(JSON.parse(localStorage.getItem('el')).length);
    //     console.log(count);
    //     // console.log(JSON.parse(localStorage.getItem('el')));
    //     // setBuy(true);
    //     // setCount(`${JSON.parse(localStorage.getItem('el')).length}`)
    // }

    return (
        <div className='Header container'>
            <Link to={NavRoutes[0].path} key={NavRoutes[1].id} className="logo">SHOP</Link>
            <ul>
                <li>
                    <div className="favorite">
                        <img src={VectorHeart} alt="favorite" className="favorite-item_fav" />
                        <div className="favorite-item_count">2</div>
                    </div>
                </li>
                <li>
                    <Link to={NavRoutes[1].path} key={NavRoutes[1].id}>
                        <div className="basket">
                            <img src={VectorBasket} alt="basket" className="basket-item_basket" />
                            <div className={count ? "basket-item_count" : "basket-item_count none"}>{count}</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default Header;