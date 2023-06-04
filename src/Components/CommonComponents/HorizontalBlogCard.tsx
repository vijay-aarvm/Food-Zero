import React from "react";
import "../../styles.scss";
import arrow from "../../assests/images/arrow.png"

export default function HorizontalBlogCard({ obj }: any) {
    return (
        <div className="blog-card-horizontal">
            <img className="blog-cover-image-horizontal" alt="post-cover-pic" src={obj.blogCover}></img>
            <div className="author-info-horizontal">
                <div className="author-profile-container-horizontal">
                    <img className="author-profile-horizontal" alt="author" src={obj.authorProfile}></img>
                    <div className="author-bio-horizontal">
                        <p className="author-name-horizontal">{obj.authorName}</p>
                        <ul className="bio-list-horizontal">
                            <li className="posted-date-horizontal">{obj.blogPostedDate}</li>
                            <li className="posted-time-horizontal">{obj.blogPostedTime}</li>
                            <li className="total-comments-horizontal">{obj.totalComments}</li>
                        </ul>
                    </div>
                </div>
                <div className="post-info-horizontal">
                    <p className="post-title-horizontal">{obj.blogTitle}</p>
                    <div className="dotted-line-horizontal"></div>
                    <p className="post-oneliner-horizontal">{obj.blogOneliner}</p>
                    <div className="read-article-horizontal">
                        <button className="read-more-horizontal">{`Read More `}<img className="arrow-horizontal" src={arrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

