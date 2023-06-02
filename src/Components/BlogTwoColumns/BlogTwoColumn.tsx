import React from "react";
import "../../styles.scss";
import BlogTwoColumnHeader from "./BlogTwoColumnHeader";
import BlogSection from "./BlogSection";

export default function BlogTwoColumns() {
    return (
        <div className="blog-Column-body">
            <BlogTwoColumnHeader />
            <BlogSection />
        </div>
    )
}

