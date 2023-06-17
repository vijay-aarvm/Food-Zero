import React from "react";
import "./horizontalBlogCard.scss";
import arrow from "../../assests/images/arrow.png"
import { bloginfo } from "../../Store/bloglist";
import { scrollToTop } from "../../HelperFunctions/windowScroll";
import { Link } from "react-router-dom";
import AuthorProfileCard from "./AuthorProfileCard";

type Blogstype = {
    obj: bloginfo
}

export default function HorizontalBlogCard({ obj }: Blogstype) {
    return (
        <div className="blog-card-horizontal">
            <img className="blog-cover-image-horizontal" alt="post-cover-pic" src={obj.blogCover}></img>
            <div className="author-info-horizontal">
                <div className="author-profile-container-horizontal">
                    <AuthorProfileCard obj={obj} />
                </div>
                <div className="post-info-horizontal">
                    <p className="post-title-horizontal">{obj.blogTitle}</p>
                    <div className="dotted-line-horizontal"></div>
                    <p className="post-oneliner-horizontal">{obj.blogOneliner}</p>
                    <div className="read-article-horizontal">
                        <Link to={"/single_post_with_sidebar"} onClick={scrollToTop} style={{ textDecoration: "none", color: "inherit" }}><button className="read-more-horizontal">{`Read More `}<img className="arrow-horizontal" src={arrow} alt="arrow" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

