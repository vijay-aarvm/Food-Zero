import React from "react";
import "../../styles.scss";
import BlogCommonHeader from "../CommonComponents/BlogCommonHeader";
import BlogOneColumnHeaderHero from "./BlogOneColumnHeaderHero";


export default function BlogOneColumnHeader() {
    return (
        <div className="blog-cloumn-header">
            <BlogCommonHeader />
            <BlogOneColumnHeaderHero />
        </div>
    )
}