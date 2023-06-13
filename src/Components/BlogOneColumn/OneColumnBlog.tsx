import React from "react";
import "../../styles.scss";
import BlogHeader from "../CommonComponents/BlogHeader";
import OneColumnBlogList from "./OneColumnBlogList";
import Footer from "../CommonComponents/Footer";

export default function OneColumnBlog() {
    return (
        <div className="blog-Column-body">
            <BlogHeader />
            <OneColumnBlogList />
            <Footer />
        </div>
    )
}