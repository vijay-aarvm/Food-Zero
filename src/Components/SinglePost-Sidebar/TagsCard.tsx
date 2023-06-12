import React from "react";
import "../../styles.scss";

export default function TagsCard({ obj }: any) {
    return (
        <div className="tag-container">
            <p className="tag-name">{obj.name}</p>
        </div>
    )
}