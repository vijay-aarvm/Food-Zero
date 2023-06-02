import React from "react";
import "../../styles.scss";
import arrow from "../../assests/images/arrow.png"

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
                        <button className="read-more">{`Read More `}<img className="arrow" src={arrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// .blog-card {
//     @include flex-column();
//     width: 500px;
//     height: 600px;
//     text-align: center;
//     align-items: center;

//     .blog-cover-image {
//         width: 500px;
//         height: 600px;
//     }

//     .author-info {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         text-align: left;

//         .author-profile-container {
//             @include flex-row();
//             font-family: $lato;
//             color: #5E6600;
//             font-size: 12px;

//             .author-profile {
//                 width: 60px;
//                 height: 60px;
//             }

//             .author-bio {
//                 @include flex-row();
//                 gap: 0px;

//                 .bio-list {
//                     @include flex-row();
//                     gap: 25px;
//                     padding-left: 20px;
//                 }
//             }
//         }

//         .post-info {
//             @include flex-column();
//             width: 420px;
//             font-weight: 700;
//             align-items: flex-start;
//             text-align: left;

//             .post-title {
//                 font-family: $rufina;
//                 font-size: 30px;
//                 width: 400px;
//                 margin: 10px 10px 10px 0;
//             }

//             .dotted-line {
//                 width: 420px;
//                 border: none;
//                 border-top: 2px dotted black;
//             }

//             .post-oneliner {
//                 font-family: $lato;
//                 font-size: 15px;
//                 color: #4D4D4D;
//             }

//             .read-article {
//                 @include flex-row();
//                 gap: 100px;

//                 .read-more {
//                     background: none;
//                     border: none;
//                     font-family: $lato;
//                     font-size: 15px;
//                     padding: 20px 10px 10px 0;

//                     &:hover {
//                         cursor: pointer;
//                     }

//                     .arrow {
//                         width: 20px;
//                         height: 10px;
//                     }
//                 }
//             }
//         }
//     }
// }