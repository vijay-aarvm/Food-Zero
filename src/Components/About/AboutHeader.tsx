import React from "react";
import "./aboutHeader.scss"
import NavigationBar from "../CommonComponents/NavigationBar";

export default function AboutHeader() {
    return (
        <div className="about-header-section">
            <div className="about-header-bg"></div>
            <NavigationBar />
            <div className="about-header-title">
                <p className="about-title">Who We Are</p>
                <p className="about-title-desc">The most important thing for us is to give you the comfortable dining experience</p>
            </div>
        </div>
    )
}