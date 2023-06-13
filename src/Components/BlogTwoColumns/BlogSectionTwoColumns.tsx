import React from "react";
import { useSelector } from "react-redux";
import "../../styles.scss";
import BlogCard from "../CommonComponents/BlogCard";
// import { blogList } from "../BlogOneColumn/bloglist";
// import store from "../BlogOneColumn/foodzeroStore";

export default function BlogSectionTwoColumns() {

    // const state: any = store.getState();

    const blogData: any = useSelector((state: any) => state.blogData)

    return (
        <div className="blog-section">
            <div className="breadcrumbs">
                <p className="blog-path">Home/Blog/</p>
                <p className="blog-path-source">Blog Two Columns</p>
            </div>
            <div className="blog-content">
                {blogData.map((blog: any, index: number) => (
                    <BlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>

    )
}