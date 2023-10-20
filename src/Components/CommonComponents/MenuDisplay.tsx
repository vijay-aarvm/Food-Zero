import React from "react";
import "./menuDisplay.scss";

export default function MenuDisplay({ obj }: any) {
    return (
        <div className="food-item">
            <h3 className="item-price">{obj.price}</h3>
            <p className="dotted-line"></p>
            <h2 className="item-name">{obj.dish}</h2>
            <p className="item-desc">{obj.aboutDish}</p>
        </div>
    )
}