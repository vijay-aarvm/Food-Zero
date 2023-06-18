import React from "react";
import "./starterCourseDishes.scss";
import starters from "../../assests/images/starter-items.png";
import MenuDisplay from "../CommonComponents/MenuDisplay";
import blueberry from "../../assests/images/blueberry.png";
import { Menucoursetype } from "../../Menucoursetypes";

const menu: Menucoursetype = [
    {
        "price": "$20",
        "dish": "Grilled Okra and Tomatoes ",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$18",
        "dish": "Cucumber Salad",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$12",
        "dish": " Basil Pancakes",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default function StarterCourseDishes() {
    return (
        <div className="starters-section">
            <div className="starters-header">
                <div className="title-container">
                    <p className="starters-title">Starters</p>
                    <p className="starters-title-desc">This is a section of starters. Choose your starters</p>
                </div>
                <img className="starters-title-wrapper-image blueberry" src={blueberry} alt="blueberry" />
            </div>
            <div className="starter-menu">
                <img className="starter-items" src={starters} alt="starters"></img>
                <div className="menu">
                    {menu.map((item) => (
                        <MenuDisplay obj={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}