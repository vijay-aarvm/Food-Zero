import React from "react";
import "./pastryDishes.scss";
import pastries from "../../assests/images/pastry-drinks.png"
import MenuDisplay from "../CommonComponents/MenuDisplay";
import avocado from "../../assests/images/avocado.png";
import { Menucoursetype } from "../../Menucoursetypes";

const menu: Menucoursetype = [
    {
        "price": "$158",
        "dish": "Wine Pairing",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$168",
        "dish": "Natural Wine Pairing",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$90",
        "dish": "Whisky Flyer",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default function PastryDishes() {
    return (
        <div className="pastries-section">
            <div className="pastries-header">
                <p className="pastries-title">Pastries & Drinks</p>
                <p className="pastries-title-desc">This is a section of pastries & drinks. Choose your Pastries & drinks</p>
                <img className="pastries-title-wrapper-image avocado" src={avocado} alt="avocado" />
            </div>
            <div className="pastry-menu">
                <img className="pastry-items" src={pastries} alt="starters"></img>
                <div className="menu">
                    {menu.map((item) => (
                        <MenuDisplay obj={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}