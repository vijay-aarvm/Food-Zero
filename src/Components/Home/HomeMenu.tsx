import React from "react";
import "./homeMenu.scss";
import branch from "../../assests/images/branch.png";
import MenuDisplay from "../CommonComponents/MenuDisplay";

const menu = [
    {
        "price": "$20",
        "dish": "Deep Sea Snow White Cod Fillet",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$22",
        "dish": "Steak With Rosemary Butter",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$18",
        "dish": "Cucumber Salad",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "price": "$90",
        "dish": "Natural Wine Pairing",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default function HomeMenu() {
    return (
        <div className="home-menu">
            <div className="menu-header">
                <div className="food-menu">
                    <h1 className="our-menu">Our Menu</h1>
                    <p className="our-menu-desc">This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="header-img">
                    <img className="branch" src={branch} alt="branch" />
                </div>
            </div>
            <div className="food-items">
                {menu.map((dish) =>
                    <MenuDisplay obj={dish} />
                )}
            </div>
        </div>
    )
}