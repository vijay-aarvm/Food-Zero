import React from "react";
import "../../styles.scss";
import BlogHeader from "../CommonComponents/BlogHeader";
import OneColumnBlogList from "./OneColumnBlogList";
// import Footer from "../CommonComponents/Footer";
import Layout from "../LayoutComponent/Layout";

const title = [
    {
        "titleName": "Blog List - One Column"
    }
]

export default function OneColumnBlog() {
    return (
        <Layout>
            <div className="blog-Column-body">
                {title.map((data, index: number) => (
                    <BlogHeader obj={data} key={index} />
                ))}
                <OneColumnBlogList />
            </div>
        </Layout>
    )
}