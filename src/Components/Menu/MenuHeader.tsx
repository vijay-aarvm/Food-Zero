import React from "react";
import "./menuHeader.scss";
import NavigationBar from "../CommonComponents/NavigationBar";

export default function MenuHeader() {
    return (
        <div className="menupage-header">
            <div className="menu-header-bg"></div>
            <NavigationBar />
            <div className="menu-header-title">
                <p className="title">View Our New Menu</p>
                <p className="title-desc">The freshest ingredients for you every day</p>
            </div>
        </div>
    )
}