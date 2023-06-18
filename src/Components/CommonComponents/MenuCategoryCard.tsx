import React from "react";
import "./menuCategoryCard.scss";
import { Menu } from "../../Store/menuCategory";

type MenuCategoryCardType = {
    cardData: Menu;
}

export default function MenuCategoryCard({ cardData }: MenuCategoryCardType) {
    return (
        <div className="menu-card">
            <img className="menucard-cover" src={cardData.menuCover} alt="menu" />
            <div className="menu-category">
                <p className="category">{cardData.categoryName}</p>
                <p className="vector">→</p>
            </div>
        </div>
    )
}