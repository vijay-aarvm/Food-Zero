import React from "react";
import "./authorProfileCard.scss";

export default function AuthorProfileCard({ obj }: any) {
    return (
        <div className="blog-author">
            <img className="author-pic" src={obj.authorProfile} alt="author" />
            <p className="author-name">{obj.authorName}</p>
            <ul className="author-details">
                <li className="posted-on">{obj.blogPostedDate}</li>
                <li className="posted-time">{obj.blogPostedTime}</li>
                <li className="no-of-comments">{obj.totalComments}</li>
            </ul>
        </div>
    )
}