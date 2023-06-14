import React from "react";
import "../../styles.scss";
import BlogHeader from "../CommonComponents/BlogHeader";
import TwoColumnBlogList from "./TwoColumnBlogList";
// import Footer from "../CommonComponents/Footer";
import Layout from "../LayoutComponent/Layout";

const title = [
    {
        "titleName": "Blogs - Two Columns"
    }
]

export default function TwoColumnBlogs() {
    return (
        <Layout>
            <div className="blog-Column-body">
                {title.map((data, index: number) => (
                    <BlogHeader obj={data} key={index} />
                ))}
                <TwoColumnBlogList />
            </div>
        </Layout>
    )
}

