import React from "react";
import "./mainCourseDishes.scss";
import MenuDisplay from "../CommonComponents/MenuDisplay";
import mains from "../../assests/images/mains-items.png"
import { Menucoursetype } from "../../Menucoursetypes";


const menu: Menucoursetype = [
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
        "price": "$20",
        "dish": "Steaks with Grilled Kimchi",
        "aboutDish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default function MainCourseDishes() {
    return (
        <div className="mains-section">
            <div className="mains">
                <p className="mains-title">Mains</p>
                <p className="mains-title-desc">This is a section of Mains. Choose your mains</p>
            </div>
            <div className="main-menu">
                <div className="menu">
                    {menu.map((item) => (
                        <MenuDisplay obj={item} />
                    ))}
                </div>
                <img className="main-items" src={mains} alt="mains"></img>
            </div>
        </div>
    )
}