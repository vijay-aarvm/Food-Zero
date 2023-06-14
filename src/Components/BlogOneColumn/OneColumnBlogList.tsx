import React, { useMemo } from "react";
// import { useEffect, useState } from "react";
import "./oneColumnBloglist.scss";
import HorizontalBlogCard from "../CommonComponents/HorizontalBlogCard";
import store from "../../Store/foodzeroStore";
// import { blogList } from "./bloglist";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../HelperFunctions/windowScroll";

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

    const state = useMemo(() => store.getState(), []);

    return (
        <div className="blog-section-horizontal">
            <div className="breadcrumbs-horizontal">
                <p className="blog-path-horizontal">Home/Blog/</p>
                <p className="blog-path-source-horizontal">Blog List One Column</p>
            </div>
            <div className="blog-content-horizontal">
                {state.blogData.map((blog: any, index: number) => (
                    <Link to={"/single_post_with_sidebar"} onClick={scrollToTop} style={{ textDecoration: "none", color: "inherit" }}><HorizontalBlogCard obj={blog} key={index} /></Link>
                ))}
            </div>
        </div >

    )
}
