import React from "react";
import "./relatedPosts.scss";
import { useSelector } from "react-redux";
import BlogCard from "../CommonComponents/BlogCard";

export default function RelatedPosts() {

    const blogData: any = useSelector((state: any) => state.blogData)
    return (
        <div className="related-posts-section">
            <h1 className="title">Related Posts</h1>
            <div className="posts">
                {blogData.map((blog: any, index: number) => {
                    if (index < 2) {
                        return (
                            <BlogCard obj={blog} key={index} />
                        )
                    }
                    return null;
                }
                )}
            </div>
        </div>
    )
}