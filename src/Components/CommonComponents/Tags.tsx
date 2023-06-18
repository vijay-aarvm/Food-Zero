import React from "react";
import "./tags.scss";

const tags = ["Design", "Photography", "Images", "Video", "Music", "Travel"];

export default function Tags() {
    return (
        <div className="tag-section">
            <p className="tags-title">Tags</p>
            <div className="dotted-line"></div>
            <div className="tags">
                {tags.map((tag: string) => (
                    <div className="tag-container">
                        <p className="tag-name">{tag}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}