import React from "react";
import "../../styles.scss";
import BlogCard from "../CommonComponents/BlogCard";
import { blogList } from "../BlogOneColumn/bloglist";

export default function BlogSectionTwoColumns() {
    return (
        <div className="blog-section">
            <div className="breadcrumbs">
                <p className="blog-path">Home/Blog/</p>
                <p className="blog-path-source">Blog Two Columns</p>
            </div>
            <div className="blog-content">
                {blogList.map((blog: any, index: number) => (
                    <BlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>

    )
}