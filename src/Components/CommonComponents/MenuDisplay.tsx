import React from "react";
import "../../styles.scss";

export default function MenuDisplay() {
    return (
        <div className="food-item">
            <h3 className="item-price">$20</h3>
            <p className="dotted-line"></p>
            <h2 className="item-name">Deep Sea Snow White Cod Fillet</h2>
            <p id="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}