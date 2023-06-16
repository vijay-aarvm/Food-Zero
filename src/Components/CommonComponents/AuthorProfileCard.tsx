import React from "react";
import "./authorProfileCard.scss";


export default function AuthorProfileCard({ obj }: any) {

    const { authorProfile, authorName, blogPostedDate, blogPostedTime, totalComments } = obj;

    return (
        <div className="blog-author">
            <img className="author-pic" src={authorProfile} alt="author" />
            <p className="author-name">{authorName}</p>
            <ul className="author-details">
                <li className="posted-on">{blogPostedDate}</li>
                <li className="posted-time">{blogPostedTime}</li>
                <li className="no-of-comments">{totalComments}</li>
            </ul>
        </div>
    )
}