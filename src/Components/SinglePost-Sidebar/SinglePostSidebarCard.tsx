import React from "react";
import "../../styles.scss";
import NavigationBar from "../CommonComponents/NavigationBar";
import Sidebar from "./Sidebar";


export default function SinglePostSidebarCard({ obj }: any) {
    return (
        <div className="single-post-sidebar">
            <div className="single-post-sidebar-header">
                <img className="singlepost-sidebar-header-bg" src={obj.blogHeaderBg} alt="blog-header-bg" />
                <NavigationBar />
                <div className="blog-header-title">
                    <p className="blog-title">{obj.blogTitle}</p>
                    <div className="blog-author">
                        <img className="author-pic" src={obj.authorProfile} alt="author" />
                        <p className="author-name">{obj.authorName}</p>
                        <ul className="author-details">
                            <li className="posted-on">{obj.postedDate}</li>
                            <li className="posted-time">{obj.postedTime}</li>
                            <li className="no-of-comments">{obj.noOfComments}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="post-content">
                    <div className="blog-content">
                        <p className="blog-intro">{obj.blogIntro}</p>
                        <div className="blog-images">
                            <img className="blog-image1" src={obj.blogImage1} alt="image1" />
                            <img className="blog-image2" src={obj.blogImage2} alt="image2" />
                        </div>
                        <p className="blog-recipe">{obj.blogRecipe}</p>
                    </div>
                    <div className="blog-quote">
                        <div className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</div>
                    </div>
                    <div className="remaining-blog">
                        <p className="blog-conclusion">{obj.blogConclusion}</p>
                        {/* tag component to be added */}
                        <div className="author-about-section">
                            <img className="author" src={obj.authorProfile} alt="author" />
                            <div className="about-author">
                                <p className="author-name">{obj.authorName}</p>
                                <p className="about">{obj.aboutAuthor}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}