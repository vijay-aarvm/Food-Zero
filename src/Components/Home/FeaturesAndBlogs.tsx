import React from "react";
import "./featuresAndBlogs.scss";
import fish from "../../assests/images/fish.png";
import veggies from "../../assests/images/veggies.png";
import fruits from "../../assests/images/fruits.png";
import BlogCard from "../CommonComponents/BlogCard";
import { useSelector } from "react-redux";
import { bloginfo } from "../../Store/bloglist";

export default function Features() {

    const blogs = useSelector((state: any) => state.blogData);

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
                {blogs.slice(0, 2).map((blog: bloginfo) => (
                    <BlogCard obj={blog} />
                )
                )}
            </div>
        </div>
    )
}