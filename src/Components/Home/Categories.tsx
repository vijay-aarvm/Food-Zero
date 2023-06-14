import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuCategoryCard from "../CommonComponents/MenuCategoryCard";
import { scrollToTop } from "../../HelperFunctions/windowScroll";
import TestimonyCard from "../CommonComponents/TestimonyCard";

export default function Categories() {

    const categoryData: any = useSelector((state: any) => state.menuCategoryData);
    const quotes = useSelector((state: any) => state.blogData);

    return (
        <div className="homepage-section5">
            <div className="category-headline">
                <h1 className="headline">Calories Energy Balance</h1>
                <p className="headline-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="menu-category">
                {categoryData.map((data: any, index: number) => (
                    <Link to={"/menu"} onClick={scrollToTop} style={{ textDecoration: "none", color: "inherit" }} ><MenuCategoryCard obj={data} key={index} /></Link>
                ))}
            </div>
            <div className="testimonals">
                {quotes.map((quote: any, index: number) => {
                    if (index < 1) {
                        return (
                            <TestimonyCard obj={quote} currentIndex={index} />
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}