import React from "react";
import TagsCard from "./TagsCard";
import "./tags.scss";

const tags = [
    {
        "name": "Design"
    },
    {
        "name": "Photography"
    },
    {
        "name": "Images"
    },
    {
        "name": "Video"
    },
    {
        "name": "Music"
    },
    {
        "name": "Travel"
    },
]

export default function Tags() {
    return (
        <div className="tag-section">
            <p className="tags-title">Tags</p>
            <div className="dotted-line"></div>
            <div className="tags">
                {tags.map((tag: any, index: number) => (
                    <TagsCard obj={tag} key={index} />
                ))}
            </div>
        </div>
    )
}