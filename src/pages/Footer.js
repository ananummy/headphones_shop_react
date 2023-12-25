import React from "react";
import Ru from './assets/svg/RU.svg'
import VK from './assets/svg/VK.svg'
import Telegram from './assets/svg/Telegram.svg'
import Whatsapp from './assets/svg/Whatsapp.svg'
import './styles/style.scss';

function Footer() {
    return (
        <div className="container">
            <div className="Footer">
                <div className="logo">SHOP</div>
                <div className="links">
                    <nav>
                        <ul>
                            <a href="#"><li>Избранное</li></a>
                            <a href="#"><li>Корзина</li></a>
                            <a href="#"><li>Контакты</li></a>
                        </ul>
                    </nav>
                    <a href="#"><div>Условия сервиса</div></a>
                    <div className="language">
                        <img src={Ru} alt="change language" />
                        <p className="rus">Рус</p>
                        <p className="eng">Eng</p>
                    </div>
                </div>
                <div className="social">
                    <a href="#"><img src={VK} alt="vk" /></a>
                    <a href="#"><img src={Telegram} alt="telegram" /></a>
                    <a href="#"><img src={Whatsapp} alt="whatsapp" /></a>
                </div></div>

        </div>
    )
}

export default Footer;