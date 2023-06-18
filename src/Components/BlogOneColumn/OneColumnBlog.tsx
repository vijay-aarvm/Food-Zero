import React from "react";
import "../../styles.scss";
import BlogHeader from "../CommonComponents/BlogHeader";
import OneColumnBlogList from "./OneColumnBlogList";
// import Footer from "../CommonComponents/Footer";
import Layout from "../LayoutComponent/Layout";

export default function OneColumnBlog() {
    return (
        <Layout>
            <div className="blog-Column-body">
                <BlogHeader obj={{ titleName: "Blog List - One Column" }} />
                <OneColumnBlogList />
            </div>
        </Layout>
    )
}