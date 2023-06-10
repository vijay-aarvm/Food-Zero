import React from "react";
import "../../styles.scss";
import NavigationBar from "../CommonComponents/NavigationBar";

export default function SinglePortfolioHeader() {
    return (
        <div className="single-portfolio-header">
            <div className="header-bg"></div>
            <NavigationBar />
            <p className="header-title">Deep Sea Snow White Cod Fillet</p>
        </div>
    )
}