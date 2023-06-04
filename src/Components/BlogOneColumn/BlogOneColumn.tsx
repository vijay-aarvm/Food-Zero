import React from "react";
import "../../styles.scss";
import BlogOneColumnHeader from "./BlogOneColumnHeader";
import BlogSectionOneColumn from "./BlogSectionOneColumn";
import Footer from "../CommonComponents/Footer";

export default function BlogOneColumn() {
    return (
        <div className="blog-Column-body">
            <BlogOneColumnHeader />
            <BlogSectionOneColumn />
            <Footer />
        </div>
    )
}