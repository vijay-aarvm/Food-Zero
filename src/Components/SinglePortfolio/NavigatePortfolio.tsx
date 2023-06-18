import React from "react";
import "./navigatePortfolio.scss";
import iconback from "../../assests/images/Icon_back.png";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../HelperFunctions/windowScroll";

export default function NavigatePortfolio() {
    return (
        <div className="navigate-portfolio">
            <div className="previous">
                <Link to={"/single_post_with_sidebar"} onClick={scrollToTop} style={{ textDecoration: "none", color: "inherit" }}><p className="previous-page">← PREVIOUS PAGE</p></Link>
                <p className="previous-portfolio">Strip Steak With Rosemary Butter</p>
            </div>
            <button className="icon-back-btn"><img className="icon-back" src={iconback} alt="icon-back" /></button>
            <div className="next">
                <Link to={"/single_post_with_sidebar"} onClick={scrollToTop} style={{ textDecoration: "none", color: "inherit" }}><p className="next-page">NEXT PAGE →</p></Link>
                <p className="next-portfolio">Option of natural wine available</p>
            </div>
        </div>
    )
}