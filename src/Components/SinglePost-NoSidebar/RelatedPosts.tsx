import React from "react";
import "./relatedPosts.scss";
import { useSelector } from "react-redux";
import BlogCard from "../CommonComponents/BlogCard";
import { bloginfo } from "../../Store/bloglist";

export default function RelatedPosts() {

    const blogData: any = useSelector((state: any) => state.blogData);

    return (
        <div className="related-posts-section">
            <h1 className="title">Related Posts</h1>
            <div className="posts">
                {blogData.slice(0, 2).map((blog: bloginfo) => (
                    <BlogCard obj={blog} />
                ))}
            </div>
        </div>
    )
}