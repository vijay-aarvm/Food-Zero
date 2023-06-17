import React from "react";
import "./blogCard.scss";
import arrow from "../../assests/images/arrow.png";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../HelperFunctions/windowScroll";
import { bloginfo } from "../../Store/bloglist";
import AuthorProfileCard from "./AuthorProfileCard";

type blogcardType = {
    obj: bloginfo
}

export default function BlogCard({ obj }: blogcardType) {
    return (
        <div className="blog-card">
            <p className="blog-tag">Fashion</p>
            <img className="blog-cover-image" alt="post-cover-pic" src={obj.blogCover}></img>
            <div className="author-info">
                <div className="author-profile-container">
                    <AuthorProfileCard obj={obj} />
                </div>
                <div className="post-info">
                    <p className="post-title">{obj.blogTitle}</p>
                    <div className="dotted-line"></div>
                    <p className="post-oneliner">{obj.blogOneliner}</p>
                    <div className="read-article">
                        <Link to={"/single_portfolio"} onClick={scrollToTop} style={{ textDecoration: "none", color: "inherit" }} ><button className="read-more">{`Read More `}<img className="arrow" src={arrow} alt="arrow" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
