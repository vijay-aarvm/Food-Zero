import React from "react";
import "./authorProfileCard.scss";


export default function AuthorProfileCard({ obj }: any) {

    const { authorProfile, authorName, blogPostedDate, blogPostedTime, totalComments } = obj;

    return (
        <div className="blog-author">
            <img className="author-profile" alt="author" src={authorProfile}></img>
            <div className="author-bio">
                <p className="author-name">{authorName}</p>
                <ul className="bio-list">
                    <li className="posted-date">{blogPostedDate}</li>
                    <li className="posted-time">{blogPostedTime}</li>
                    <li className="total-comments">{totalComments}</li>
                </ul>
            </div>
        </div>
    )
}