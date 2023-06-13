import React from "react";
import "./portfolioGridHeader.scss";
import NavigationBar from "../CommonComponents/NavigationBar";

export default function PortfolioGridHeader() {
    return (
        <div className="portfoliogrid-header">
            <div className="portfoliogrid-header-bg"></div>
            <NavigationBar />
            <p className="portfoliogrid-header-title">Portfolio - Grids</p>
        </div>
    )
}