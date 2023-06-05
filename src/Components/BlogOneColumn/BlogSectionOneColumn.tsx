import React from "react";
import "../../styles.scss";
import HorizontalBlogCard from "../CommonComponents/HorizontalBlogCard";
import { blogList } from "./bloglist"

export default function BlogSectionOneColumn() {
    return (
        <div className="blog-section-horizontal">
            <div className="breadcrumbs-horizontal">
                <p className="blog-path-horizontal">Home/Blog/</p>
                <p className="blog-path-source-horizontal">Blog List One Column</p>
            </div>
            <div className="blog-content-horizontal">
                {blogList.map((blog: any, index: number) => (
                    <HorizontalBlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>

    )
}