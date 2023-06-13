import React from "react";
import "./navigatePortfolio.scss";
import iconback from "../../assests/images/Icon_back.png";

export default function NavigatePortfolio() {
    return (
        <div className="navigate-portfolio">
            <div className="previous">
                <p className="previous-page">← PREVIOUS PAGE</p>
                <p className="previous-portfolio">Strip Steak With Rosemary Butter</p>
            </div>
            <button className="icon-back-btn"><img className="icon-back" src={iconback} alt="icon-back" /></button>
            <div className="next">
                <p className="next-page">NEXT PAGE →</p>
                <p className="next-portfolio">Option of natural wine available</p>
            </div>
        </div>
    )
}