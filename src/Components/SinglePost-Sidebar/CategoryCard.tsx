import React from "react";
import "../../styles.scss";

export default function CategoryCard({ obj }: any) {
    return (
        <div className="category">
            <p className="category-name">{obj.name}</p>
            <p className="category-count">{obj.count}</p>
        </div>
    )
}