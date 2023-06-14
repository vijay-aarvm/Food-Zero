import React from "react";
import "./blogCard.scss";
import arrow from "../../assests/images/arrow.png";
import { Link } from "react-router-dom";

export default function BlogCard({ obj }: any) {
    return (
        <div className="blog-card">
            <img className="blog-cover-image" alt="post-cover-pic" src={obj.blogCover}></img>
            <div className="author-info">
                <div className="author-profile-container">
                    <img className="author-profile" alt="author" src={obj.authorProfile}></img>
                    <div className="author-bio">
                        <p className="author-name">{obj.authorName}</p>
                        <ul className="bio-list">
                            <li className="posted-date">{obj.blogPostedDate}</li>
                            <li className="posted-time">{obj.blogPostedTime}</li>
                            <li className="total-comments">{obj.totalComments}</li>
                        </ul>
                    </div>
                </div>
                <div className="post-info">
                    <p className="post-title">{obj.blogTitle}</p>
                    <div className="dotted-line"></div>
                    <p className="post-oneliner">{obj.blogOneliner}</p>
                    <div className="read-article">
                        <Link to={"/single_portfolio"} style={{ textDecoration: "none", color: "inherit" }} ><button className="read-more">{`Read More `}<img className="arrow" src={arrow} alt="arrow" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
