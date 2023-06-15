import React from "react";
import "./featuresAndBlogs.scss";
import fish from "../../assests/images/fish.png";
import veggies from "../../assests/images/veggies.png";
import fruits from "../../assests/images/fruits.png";
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

export default function Features() {
    return (
        <div className="features">
            <div className="quality-ingredients">
                <div className="premium-quality">
                    <img className="ingredients-image" src={fish} alt="fish" />
                    <h2 className="ingredients">Premium Quality</h2>
                    <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
                <div className="seasonal-veggies">
                    <img className="ingredients-image" src={veggies} alt="veggies" />
                    <h2 className="ingredients">Seasonal Vegetables</h2>
                    <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
                <div className="fresh-fruit">
                    <img className="ingredients-image" src={fruits} alt="fruits" />
                    <h2 className="ingredients">Fresh Fruit</h2>
                    <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
            </div>
            <div className="blogs">
                {blogs.map((blog, index: number) => (
                    <BlogCard obj={blog} key={index} />
                ))}
            </div>
        </div>
    )
}