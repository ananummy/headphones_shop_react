import React from "react";
import { CreateCart, FinalCheck } from "./mock/functions";

function CartPage() {
    return (
        <div className="Main container">
            <h1>Карзина</h1>
            <article className="cart-page">
                <div className="shopping-cart">
                    <CreateCart />
                </div>
                <div className="order">
                    <div>
                        <p>ИТОГО</p>
                        <p className="total">{FinalCheck()}₽</p>
                    </div>
                    <button>Перейти к оформлению</button>
                </div>
            </article>
        </div>
    )
}

export default CartPage;