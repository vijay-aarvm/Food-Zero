import React from "react";
import "./categories.scss";
import quotes from "../../assests/images/quotes.png";
import clientinfo from "../../assests/images/client.png";
import paging from "../../assests/images/pagination.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuCategoryCard from "../CommonComponents/MenuCategoryCard";
import { scrollToTop } from "../../HelperFunctions/windowScroll";

export default function Categories() {

    const categoryData: any = useSelector((state: any) => state.menuCategoryData);

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
                <div className="testimony-content">
                    <h3 className="client-testimony">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
                        penatibus imperdiet. Turpis
                        egestas ultricies purus Lorem ipsum dolor sit amet .
                    </h3>
                    <img className="quote" src={quotes} alt="quote" />
                </div>
                <div className="client">
                    <img className="client-info" src={clientinfo} alt="client-info" />
                    <img className="paging" src={paging} alt="paging" />
                </div>
            </div>
        </div>
    )
}