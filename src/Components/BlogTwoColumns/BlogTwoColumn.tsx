import React from "react";
import "../../styles.scss";
import BlogTwoColumnHeader from "./BlogTwoColumnHeader";
import BlogSectionTwoColumns from "./BlogSectionTwoColumns";
import Footer from "../CommonComponents/Footer";

export default function BlogTwoColumns() {
    return (
        <div className="blog-Column-body">
            <BlogTwoColumnHeader />
            <BlogSectionTwoColumns />
            <Footer />
        </div>
    )
}

