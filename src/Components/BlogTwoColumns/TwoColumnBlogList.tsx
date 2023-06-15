import React from "react";
import { useSelector } from "react-redux";
import "./twoColumnBloglist.scss";
import BlogCard from "../CommonComponents/BlogCard";
import { bloginfo } from "../../Store/bloglist";


export default function BlogSectionTwoColumns() {

    const blogData: any = useSelector((state: any) => state.blogData);

    return (
        <div className="blog-section">
            <div className="breadcrumbs">
                <p className="blog-path">Home/Blog/</p>
                <p className="blog-path-source">Blog Two Columns</p>
            </div>
            <div className="blog-content">
                {blogData.map((blog: bloginfo, index: number) => (
                    <BlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>

    )
}