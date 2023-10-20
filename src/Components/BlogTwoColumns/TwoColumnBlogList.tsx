import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./twoColumnBloglist.scss";
import BlogCard from "../CommonComponents/BlogCard";
import { bloginfo } from "../../Store/bloglist";
import BreadCrumbs from "../CommonComponents/BreadCrumbs";


export default function BlogSectionTwoColumns() {

    const blogData: any = useSelector((state: any) => state.blogData);

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const lastBlogIndex = currentPage * blogsPerPage;
    const firstBlogIndex = lastBlogIndex - blogsPerPage;
    const currentBlogs = blogData.slice(firstBlogIndex, lastBlogIndex);

    const totalPages = Math.ceil(blogData.length / blogsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="blog-section">
            <BreadCrumbs path="Home / Blog /" source="Blog Two Columns" />
            <div className="blog-content">
                {currentBlogs.map((blog: bloginfo, index: number) => (
                    <BlogCard obj={blog} key={index} />
                ))}
            </div>
            <ul className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li
                        key={index}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </li>
                ))}
            </ul>
        </div>

    )
}