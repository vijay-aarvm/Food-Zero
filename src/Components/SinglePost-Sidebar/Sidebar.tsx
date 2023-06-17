import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.scss";
import searchicon from "../../assests/images/searchicon.png";
import RecentCommentsCard from "../CommonComponents/RecentCommentsCard";
import TypeAndCount from "./TypeAndCount";
import RecentPostsCard from "../CommonComponents/RecentPostsCard";
// import TagsCard from "../CommonComponents/TagsCard";
import Tags from "../CommonComponents/Tags";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../HelperFunctions/windowScroll";
import { bloginfo } from "../../Store/bloglist";

type Categoriestype = {
    "name": string,
    "count": string
}[];

type Commentstype = {
    "uName": string,
    "comment": string
}[];

type Archivestype = {
    "month": string,
    "archiveCount": string
}[];

const categories: Categoriestype = [
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

const comments: Commentstype = [
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

const archives: Archivestype = [
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

export default function Sidebar() {

    const blogData = useSelector((state: any) => state.blogData);

    return (
        <div className="sidebar">
            <div className="searchbar">
                <input className="search" placeholder="search..."></input>
                <img className="search-icon" src={searchicon} alt="glass" />
            </div>
            <TypeAndCount title="Categories" obj={categories} />
            <div className="recent-comments">
                <p className="recent-comments-title">Recent Comments</p>
                <div className="dotted-line"></div>
                {comments.map((comment) => (
                    <RecentCommentsCard obj={comment} />
                ))}
            </div>
            <TypeAndCount title="Archives" obj={archives} />
            <div className="recent-posts">
                <p className="recent-posts-title">Recent Posted</p>
                <div className="dotted-line"></div>
                {blogData.slice(0, 4).map((blog: bloginfo) => (
                    <Link style={{ textDecoration: "none", color: "inherit" }} onClick={scrollToTop} to={"/single_post_without_sidebar"} ><RecentPostsCard obj={blog} /></Link>
                )
                )}
            </div>
            <Tags />
        </div>
    )
}