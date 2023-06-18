import React from "react";
import "./singlePortfolioContent.scss";
import lemonjuice from "../../assests/images/lemonjuice.png";
import spinachrice from "../../assests/images/spinachrice.png";
import bread from "../../assests/images/bread.png";

export default function SinglePortfolioContent() {
    return (
        <div className="portfolio-content">
            <div className="overlapping-content">
                <div className="section-1">
                    <img className="section1-img" src={lemonjuice} alt="lemon juice" />
                    <div className="section1-content">
                        <p className="content-title">Melt in Your Mouth</p>
                        <p className="title-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className="content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
                    </div>
                </div>
                <div className="section-2">
                    <img className="section2-img" src={spinachrice} alt="fish with spinach" />
                    <div className="section2-content">
                        <p className="content-title">The Best Taste</p>
                        <p className="content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <div className="section3-content">
                    <p className="content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
                    <p className="content-title">Cooking Suggestions</p>
                    <p className="title-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img className="section3-img" src={bread} alt="bread" />
                </div>
            </div>
        </div>
    )
}