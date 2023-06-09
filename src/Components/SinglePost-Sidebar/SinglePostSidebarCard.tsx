import React from "react";
import "../../styles.scss";
import NavigationBar from "../CommonComponents/NavigationBar";
import Sidebar from "./Sidebar";
import prevpostimg from "../../assests/images/prevpost.png";
import nextpostimg from "../../assests/images/nextpost.png";
import CommentCard from "./CommentCard";
import store from "../BlogOneColumn/foodzeroStore";


export default function SinglePostSidebarCard({ obj }: any) {

    const state = store.getState();

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
            <div className="post-navigator">
                <div className="previous-post">
                    <img className="previous-post-img" src={prevpostimg} alt="previous post cover" />
                    <p className="btn">← PREVIOUS POST</p>
                    <p className="title">7 Reasons to Start Your Day With Lemon Water</p>
                </div>
                <div className="next-post">
                    <img className="next-post-img" src={nextpostimg} alt="next post cover" />
                    <p className="btn">NEXT POST →</p>
                    <p className="title">12 Sparkling Wines We're Loving This Summer</p>
                </div>
            </div>
            <div className="comment-section">
                <p className="total-comments">{`${Object.keys(state.commentData).length} Comments`}</p>
                {state.commentData.map((comment: any, index: number) => (
                    <CommentCard obj={comment} key={index} />
                ))}
                <div className="dotted-line"></div>
            </div>
            <div className="comment-form">
                <p className="form-title">Leave a Reply</p>
                <div className="write-comment">
                    <label htmlFor="comment">Comment</label><br />
                    <input type="text" id="comment" className="comment"></input><br /><br />
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" className="name" required /><br /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="text" id="email" className="email" required /><br /><br />
                    <label htmlFor="website">Website</label><br />
                    <input type="text" id="website" className="website" /><br /><br />
                    <input type="submit" value="Post Comment" className="post-comment" />
                </div>
            </div>
        </div>
    )
}