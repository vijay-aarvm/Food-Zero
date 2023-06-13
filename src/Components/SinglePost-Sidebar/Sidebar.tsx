import React from "react";
import "../../styles.scss";
import searchicon from "../../assests/images/searchicon.png";
import CategoryCard from "./CategoryCard";
import RecentCommentsCard from "./RecentCommentsCard";
import ArchivesCard from "./ArchivesCard";
import post1 from "../../assests/images/recentpost1.png";
import post2 from "../../assests/images/recentpost2.png";
import post3 from "../../assests/images/recentpost3.png";
import post4 from "../../assests/images/recentpost4.png";
import TagsCard from "./TagsCard";

const categories = [
    {
        "name": "Fashion",
        "count": "16"
    },
    {
        "name": "Food",
        "count": "20"
    },
    {
        "name": "Music",
        "count": "12"
    },
    {
        "name": "Travel",
        "count": "36"
    }
]

const comments = [
    {
        "uName": "John Mccain",
        "comment": "Vegan baked oatmeal with fresh berries"
    },
    {
        "uName": "Ana",
        "comment": "50 Foods That Are Super Healthy"
    },
    {
        "uName": "Camilla",
        "comment": "How Many Carbs Should You Eat for Weight Loss?"
    },
    {
        "uName": "Dailey",
        "comment": "22 Foods That Can Give You More Energy"
    }
]

const archives = [
    {
        "month": "October 2021",
        "archiveCount": "12"
    },
    {
        "month": "September 2021",
        "archiveCount": "6"
    },
    {
        "month": "August 2021",
        "archiveCount": "23"
    }
]

const tags = [
    {
        "name": "Design"
    },
    {
        "name": "Photography"
    },
    {
        "name": "Images"
    },
    {
        "name": "Video"
    },
    {
        "name": "Music"
    },
    {
        "name": "Travel"
    },
    {
        "name": "Travel"
    },
    {
        "name": "Travel"
    }
]

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="searchbar">
                <input className="search" placeholder="search..."></input>
                <img className="search-icon" src={searchicon} alt="glass" />
            </div>
            <div className="categories">
                <p className="categories-title">Categories</p>
                <div className="dotted-line"></div>
                {categories.map((category: any, index: number) => (
                    <CategoryCard obj={category} key={index} />
                ))}
            </div>
            <div className="recent-comments">
                <p className="recent-comments-title">Recent Comments</p>
                <div className="dotted-line"></div>
                {comments.map((comment: any, index: number) => (
                    <RecentCommentsCard obj={comment} key={index} />
                ))}
            </div>
            <div className="archives">
                <p className="archives-title">Archives</p>
                <div className="dotted-line"></div>
                {archives.map((archive: any, index: number) => (
                    <ArchivesCard obj={archive} key={index} />
                ))}
            </div>
            <div className="recent-posts">
                <p className="recent-posts-title">Recent Posted</p>
                <div className="dotted-line"></div>
                <img className="post1" src={post1} alt="post1" />
                <img className="post2" src={post2} alt="post2" />
                <img className="post3" src={post3} alt="post3" />
                <img className="post4" src={post4} alt="post4" />
            </div>
            <div className="tag-section">
                <p className="tags-title">Tags</p>
                <div className="dotted-line"></div>
                <div className="tags">
                    {tags.map((tag: any, index: number) => (
                        <TagsCard obj={tag} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}