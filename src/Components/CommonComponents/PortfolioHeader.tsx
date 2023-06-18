import React from "react";
import "./portfolioHeader.scss";
import NavigationBar from "./NavigationBar";
// import headerBg from "../../assests/images/singleportfolio-bg.png"

export default function PortfolioHeader({ title, backgroundImage }: any) {
    return (
        <div className="header">
            <img className="header-bg" src={backgroundImage} alt="header-banner" />
            <NavigationBar />
            <p className="header-title">{title}</p>
        </div>
    )
}