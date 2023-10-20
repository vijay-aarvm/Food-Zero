import React from "react";
import "./recentPostsCard.scss";
import { bloginfo } from "../../Store/bloglist";

type recentPostsType = {
    obj: bloginfo
}

export default function RecentPostsCard({ obj }: recentPostsType) {
    return (
        <div className="recent-post">
            <img className="recent-post-coverimg" src={obj.blogCover} alt="cover" />
            <div className="recent-post-info">
                <p className="recent-post-title">{obj.blogTitle}</p>
                <div className="recent-post-metadata">
                    <p className="posted-by">{obj.authorName}</p>
                    <p className="posted-on">{obj.blogPostedDate}</p>
                </div>
            </div>
        </div>
    )
}