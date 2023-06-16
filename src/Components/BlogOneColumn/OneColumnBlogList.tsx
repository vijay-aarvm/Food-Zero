import React from "react";
// import { useEffect, useState } from "react";
import "./oneColumnBloglist.scss";
import HorizontalBlogCard from "../CommonComponents/HorizontalBlogCard";
// import { blogList } from "./bloglist";
// import { Link } from "react-router-dom";
import { bloginfo } from "../../Store/bloglist";
import { useSelector } from "react-redux";

export default function OneColumnBlogs() {

    // const [blog, setBlog] = useState(blogList);

    // useEffect(() => {
    //     setInterval(() => {
    //         const fetchBlogs = async () => {
    //             const response = await fetch("https://localhost:3000");
    //             const updatedBlogs = await response.json();
    //             setBlog(updatedBlogs);
    //         }
    //         fetchBlogs();
    //     }, 60000)
    // }, [])

    const blogs = useSelector((data: any) => data.blogData)

    return (
        <div className="blog-section-horizontal">
            <div className="breadcrumbs-horizontal">
                <p className="blog-path-horizontal">Home/Blog/</p>
                <p className="blog-path-source-horizontal">Blog List One Column</p>
            </div>
            <div className="blog-content-horizontal">
                {blogs.map((blog: bloginfo) => (
                    <HorizontalBlogCard obj={blog} />
                ))}
            </div>
        </div >

    )
}
