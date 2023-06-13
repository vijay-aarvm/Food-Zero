import React from "react";
import "./menuCategoryCard.scss";

export default function MenuCategoryCard({ obj }: any) {
    return (
        <div className="menu-card">
            <img className="menucard-cover" src={obj.menuCover} alt="menu" />
            <div className="menu-category">
                <p className="category">{obj.categoryName}</p>
                <p className="vector">→</p>
            </div>
        </div>
    )
}