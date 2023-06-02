import React from "react";
import "../../styles.scss";
import NavigationBar from "../CommonComponents/NavigationBar";
import BlogTwoColumnHeaderHero from "./BlogTwoColumnHeaderHero";

export default function BlogTwoColumnHeader() {
    return (
        <div className="blog-cloumn-header">
            <div className="flower-bg"></div>
            <NavigationBar />
            <BlogTwoColumnHeaderHero />
        </div>
    )
}