import React from "react";
import "./portfolios.scss";
import PortfolioCard from "../CommonComponents/PortfolioCard";
import codfillet from "../../assests/images/whitecod.png";
import naturalwine from "../../assests/images/natural wine.png";
import pumpkinsoup from "../../assests/images/pumpkin soup.png";
import steak from "../../assests/images/strip steak.png";
import friedprawn from "../../assests/images/fried prawn.png";
import fishmaw from "../../assests/images/fishmaw.png";

// type Portfoliotype = {
//     "coverImage": string,
//     "title": string,
//     "session": string,
//     "category": string,
//     '"large" | "small" | "medium"': boolean;
// }[];

const portfolioList = [
    {
        "coverImage": codfillet,
        "title": "Premium Deep Sea Snow White Cod Fillet",
        "session": "Lunch",
        "category": "Dinner",
        "large": true,
    },
    {
        "coverImage": naturalwine,
        "title": "Option of natural wine available",
        "session": "Lunch",
        "category": "Dinner",
        "small": true,
    },
    {
        "coverImage": pumpkinsoup,
        "title": "Best pumpkin for pumpkin soup",
        "session": "Drink",
        "category": "Fruits",
        "small": true
    },
    {
        "coverImage": steak,
        "title": "Strip Steak With Rosemary Butter",
        "session": "Lunch",
        "category": "Starters",
        "large": true,

    },
    {
        "coverImage": fishmaw,
        "title": "Braised Sliced Abalone,Fish Maw with Premium Seafood",
        "session": "Dinner",
        "category": "Lunch",
        "medium": true
    },
    {
        "coverImage": friedprawn,
        "title": "Pan Fried Live Prawn with Superior Soy Sauce",
        "session": "Starter",
        "category": "Dinner",
        "medium": true
    }
]

export default function Portfolios() {
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
                {portfolioList.map((portfolio) => (
                    <PortfolioCard obj={portfolio} />
                ))}
            </div>
            <div className="loading">Loading...</div>
        </div>
    )
}