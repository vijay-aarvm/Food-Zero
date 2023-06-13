import React from "react";
import "../../styles.scss";
import BlogHeader from "../CommonComponents/BlogHeader";
import TwoColumnBlogList from "./TwoColumnBlogList";
import Footer from "../CommonComponents/Footer";

export default function TwoColumnBlogs() {
    return (
        <div className="blog-Column-body">
            <BlogHeader />
            <TwoColumnBlogList />
            <Footer />
        </div>
    )
}

