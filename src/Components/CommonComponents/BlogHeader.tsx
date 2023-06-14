import React from "react";
import "./blogHeader.scss";
import NavigationBar from "./NavigationBar";

export default function BlogTwoColumnHeader({ obj }: any) {
    return (
        <div className="blog-cloumn-header">
            <div className="flower-bg"></div>
            <NavigationBar />
            <div className="blog-column-hero">
                <p className="blog-column-hero-title">{obj.titleName}</p>
                <p className="blog-column-hero-title-description">It is easy way to create your beautiful blog for daily</p>
            </div>
        </div>
    )
}