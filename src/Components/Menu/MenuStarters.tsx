import React from "react";
import "../../styles.scss";
import starters from "../../assests/images/starter-items.png";
import MenuDisplay from "../CommonComponents/MenuDisplay";

const menu = [
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

export default function MenuStarters() {
    return (
        <div className="starters-section">
            <div className="starters-header">
                <p className="starters-title">Starters</p>
                <p className="starters-title-desc">This is a section of starters. Choose your starters</p>
            </div>
            <div className="starter-menu">
                <img className="starter-items" src={starters} alt="starters"></img>
                <div className="menu">
                    {menu.map((item: any, index: number) => (
                        <MenuDisplay obj={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}