import React from "react";
import "../../styles.scss";
import BlogHeader from "../CommonComponents/BlogHeader";
import TwoColumnBlogList from "./TwoColumnBlogList";
// import Footer from "../CommonComponents/Footer";
import Layout from "../LayoutComponent/Layout";

export default function TwoColumnBlogs() {
    return (
        <Layout>
            <div className="blog-Column-body">
                <BlogHeader obj={{ titleName: "Blogs - Two Columns" }} />
                <TwoColumnBlogList />
            </div>
        </Layout>
    )
}

