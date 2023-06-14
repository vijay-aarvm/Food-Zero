import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.scss";
import searchicon from "../../assests/images/searchicon.png";
import CategoryCard from "./CategoryCard";
import RecentCommentsCard from "../CommonComponents/RecentCommentsCard";
import ArchivesCard from "./ArchivesCard";
import RecentPostsCard from "../CommonComponents/RecentPostsCard";
import TagsCard from "../CommonComponents/TagsCard";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../HelperFunctions/windowScroll";

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

    const blogData: any = useSelector((state: any) => state.blogData);

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
                {blogData.map((blog: any, index: number) => {
                    if (index < 4) {
                        return (
                            <Link style={{ textDecoration: "none", color: "inherit" }} onClick={scrollToTop} to={"/single_post_without_sidebar"} ><RecentPostsCard obj={blog} key={index} /></Link>
                        )
                    }
                    return null;
                }
                )}
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