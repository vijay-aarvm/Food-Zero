import React, { useState } from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuCategoryCard from "../CommonComponents/MenuCategoryCard";
import { scrollToTop } from "../../HelperFunctions/windowScroll";
import TestimonyCard from "../CommonComponents/TestimonyCard";

export default function Categories() {

    const categoryData: any = useSelector((state: any) => state.menuCategoryData);
    const quotes = useSelector((state: any) => state.blogData);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleNext = () => {
        if (currentIndex < quotes.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

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
                <TestimonyCard obj={quotes} currentIndex={currentIndex} onPrevious={handlePrevious} onNext={handleNext} />
            </div>
        </div>
    )
}