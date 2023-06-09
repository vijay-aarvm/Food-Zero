import React from "react";
import "../../styles.scss";
import BlogCommonHeader from "../CommonComponents/BlogCommonHeader";
import BlogTwoColumnHeaderHero from "./BlogTwoColumnHeaderHero";

export default function BlogTwoColumnHeader() {
    return (
        <div className="blog-cloumn-header">
            <BlogCommonHeader />
            <BlogTwoColumnHeaderHero />
        </div>
    )
}