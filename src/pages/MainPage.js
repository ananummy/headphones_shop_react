import React from "react";
import { CreateHP, CreateWHP } from "./mock/functions";
import './styles/style.scss';


function MainPage() {
    return (
        <div className="Main container">
            <article>
                <p>Наушники</p>
                <div className="headphones-container container">
                    <CreateHP />
                </div>
            </article>
            <article>
                <p>Беспроводные наушники</p>
                <div className="wirelessHeadphones-container container">
                    <CreateWHP />
                </div>
            </article>
        </div>
    )
}

export default MainPage;