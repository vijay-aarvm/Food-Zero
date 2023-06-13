import React from "react";
import "./blogHeader.scss";
import NavigationBar from "./NavigationBar";

export default function BlogTwoColumnHeader() {
    return (
        <div className="blog-cloumn-header">
            <div className="flower-bg"></div>
            <NavigationBar />
            <div className="blog-column-hero">
                <p className="blog-column-hero-title">Blog - Two Columns</p>
                <p className="blog-column-hero-title-description">It is easy way to create your beautiful blog for daily</p>
            </div>
        </div>
    )
}