import React from "react";
import "../../styles.scss";
import Gridcard from "./Gridcard";
import codfillet from "../../assests/images/whitecod.png";
import naturalwine from "../../assests/images/natural wine.png";
import pumpkinsoup from "../../assests/images/pumpkin soup.png";
import steak from "../../assests/images/strip steak.png";
import friedprawn from "../../assests/images/fried prawn.png";
import fishmaw from "../../assests/images/fishmaw.png";

const portfolioList = [
    {
        "coverImage": codfillet,
        "title": "Premium Deep Sea Snow White Cod Fillet",
        "session": "Lunch",
        "category": "Dinner"
    },
    {
        "coverImage": naturalwine,
        "title": "Option of natural wine available",
        "session": "Launch",
        "category": "Dinner"
    },
    {
        "coverImage": pumpkinsoup,
        "title": "Best pumpkin for pumpkin soup",
        "session": "Drink",
        "category": "Fruits"
    },
    {
        "coverImage": steak,
        "title": "Strip Steak With Rosemary Butter",
        "session": "Lunch",
        "category": "Starters"
    },
    {
        "coverImage": fishmaw,
        "title": "Braised Sliced Abalone,Fish Maw with Premium Seafood",
        "session": "Dinner",
        "category": "Lunch"
    },
    {
        "coverImage": friedprawn,
        "title": "Pan Fried Live Prawn with Superior Soy Sauce",
        "session": "Starter",
        "category": "Dinner"
    }
]

export default function PortfolioGridSection() {
    return (
        <div className="grid-section">
            <div className="category-list">
                <ul className="list">
                    <button><li>All</li></button>
                    <button><li>Starter</li></button>
                    <button><li>Lunch</li></button>
                    <button><li>Dinner</li></button>
                    <button><li>Drinks</li></button>
                    <button><li>Sweets</li></button>
                    <button><li>Fruits</li></button>
                </ul>
            </div>
            <div className="portfolio-section">
                {portfolioList.map((portfolio: any, index: number) => (
                    <Gridcard obj={portfolio} key={index} />
                ))}
            </div>
        </div>
    )
}