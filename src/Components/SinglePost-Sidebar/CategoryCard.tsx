import React from "react";
import "./categoryCard.scss";

export default function CategoryCard({ obj }: any) {
    return (
        <div className="category">
            <p className="category-name">{obj.name}</p>
            <p className="category-count">{obj.count}</p>
        </div>
    )
}