import React from "react";
import "../../styles.scss";
import HorizontalBlogCard from "../CommonComponents/HorizontalBlogCard";
import julieChristie from "../../assests/images/julie-christie.png";
import mangoCover from "../../assests/images/mango.png";
import asparagus from "../../assests/images/asparagus.png";
import dianne from "../../assests/images/dianne.png";
import momos from "../../assests/images/momos.png";
import jenifer from "../../assests/images/jenifer.png";
import lemon from "../../assests/images/lemon.png";
import theresa from "../../assests/images/theresa.png";
import goatMeat from "../../assests/images/goat-meat.png";
import cody from "../../assests/images/cody.png";
import wine from "../../assests/images/wine.png";
import leslie from "../../assests/images/leslie.png";

const blogInfo = [
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
    },

    {
        "blogCover": momos,
        "authorProfile": jenifer,
        "authorName": "Jenifer Lopez",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "The Best Style of Dough for Dumplings",
        "blogOneliner": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": lemon,
        "authorProfile": theresa,
        "authorName": "Theresa Webb",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "7 Reasons to Start Your Day With Lemon Water",
        "blogOneliner": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": goatMeat,
        "authorProfile": cody,
        "authorName": "Cody Fisher",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "Three Ideas for Cooking Goat Meat at Home",
        "blogOneliner": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": wine,
        "authorProfile": leslie,
        "authorName": "Leslie Alexander",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "12 Sparkling Wines We're Loving This Summer",
        "blogOneliner": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": mangoCover,
        "authorProfile": julieChristie,
        "authorName": "Julie Christie",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "2.Fruit and vegetables and protection against diseases",
        "blogOneliner": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": asparagus,
        "authorProfile": dianne,
        "authorName": "Dianne Russell",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "2.Asparagus Spring Salad with Rocket, Goat's Cheese",
        "blogOneliner": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": momos,
        "authorProfile": jenifer,
        "authorName": "Jenifer Lopez",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "2.The Best Style of Dough for Dumplings",
        "blogOneliner": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": lemon,
        "authorProfile": theresa,
        "authorName": "Theresa Webb",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "2.7 Reasons to Start Your Day With Lemon Water",
        "blogOneliner": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": goatMeat,
        "authorProfile": cody,
        "authorName": "Cody Fisher",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "2.Three Ideas for Cooking Goat Meat at Home",
        "blogOneliner": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": wine,
        "authorProfile": leslie,
        "authorName": "Leslie Alexander",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "2.12 Sparkling Wines We're Loving This Summer",
        "blogOneliner": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": mangoCover,
        "authorProfile": julieChristie,
        "authorName": "Julie Christie",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "3.Fruit and vegetables and protection against diseases",
        "blogOneliner": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": asparagus,
        "authorProfile": dianne,
        "authorName": "Dianne Russell",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "3.Asparagus Spring Salad with Rocket, Goat's Cheese",
        "blogOneliner": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": momos,
        "authorProfile": jenifer,
        "authorName": "Jenifer Lopez",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "3.The Best Style of Dough for Dumplings",
        "blogOneliner": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": lemon,
        "authorProfile": theresa,
        "authorName": "Theresa Webb",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "3.7 Reasons to Start Your Day With Lemon Water",
        "blogOneliner": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": goatMeat,
        "authorProfile": cody,
        "authorName": "Cody Fisher",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "3.Three Ideas for Cooking Goat Meat at Home",
        "blogOneliner": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        "blogCover": wine,
        "authorProfile": leslie,
        "authorName": "Leslie Alexander",
        "blogPostedDate": "October 17,2021",
        "blogPostedTime": "3:33 pm",
        "totalComments": "2 comments",
        "blogTitle": "3.12 Sparkling Wines We're Loving This Summer",
        "blogOneliner": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
];

export default function BlogSectionOneColumn() {
    return (
        <div className="blog-section-horizontal">
            <div className="breadcrumbs-horizontal">
                <p className="blog-path-horizontal">Home/Blog/</p>
                <p className="blog-path-source-horizontal">Blog List One Column</p>
            </div>
            <div className="blog-content-horizontal">
                {blogInfo.map((blog: any, index: number) => (
                    <HorizontalBlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>

    )
}