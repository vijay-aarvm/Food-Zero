import React from "react";
import "./commentCard.scss";

export default function CommentCard({ obj }: any) {
    return (
        <div className="comment-card">
            <img className="user" src={obj.userProfile} alt="user" />
            <div className="comment-info">
                <p className="username">{obj.uName}</p>
                <p className="postedtime">{obj.postedTime}</p>
                <p className="comment">{obj.comment}</p>
            </div>
            <button className="reply-btn">Reply</button>
        </div>
    )
}