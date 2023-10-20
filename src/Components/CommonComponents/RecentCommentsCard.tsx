import React from "react";
import "./recentCommentsCard.scss";

export default function RecentCommentsCard({ obj }: any) {
    return (
        <div className="comments">
            <p className="user-name">{obj.uName}</p>
            <p className="comment">{obj.comment}</p>
        </div>
    )
}