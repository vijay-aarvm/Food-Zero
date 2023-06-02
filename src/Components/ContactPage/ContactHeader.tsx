import React from "react";
import "../../styles.scss";
import NavigationBar from "../CommonComponents/NavigationBar";
import ContactHeaderHero from "./ContactHeaderHero";
import ContactHeaderOpenTime from "./ContactHeaderOpenTime";

export default function ContactHeader() {
    return (
        <div className="header-container">
            <div className="header-bg"></div>
            <NavigationBar />
            <ContactHeaderHero />
            <ContactHeaderOpenTime />
        </div>
    );
}
