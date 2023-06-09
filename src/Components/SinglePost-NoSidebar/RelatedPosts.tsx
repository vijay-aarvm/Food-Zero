import React from "react";
import "../../styles.scss";
import BlogCard from "../CommonComponents/BlogCard";
import julieChristie from "../../assests/images/julie-christie.png";
import mangoCover from "../../assests/images/mango.png";
import asparagus from "../../assests/images/asparagus.png";
import dianne from "../../assests/images/dianne.png";

const blogs = [
    {
        "blogCover": mangoCover,
        "authorProfile": julieChristie,
        "authorName": "Julie Christie",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "Fruit and vegetables and protection against diseases",
        "blogOneliner": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": asparagus,
        "authorProfile": dianne,
        "authorName": "Dianne Russell",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "Asparagus Spring Salad with Rocket, Goat's Cheese",
        "blogOneliner": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
]


export default function RelatedPosts() {
    return (
        <div className="related-posts-section">
            <h1 className="title">Related Posts</h1>
            <div className="posts">
                {blogs.map((blog: any, index: number) => (
                    <BlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>
    )
}