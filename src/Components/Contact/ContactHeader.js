import React from "react";
import "../../styles.scss";
import ContactHeaderNavigation from "./ContactHeaderNavigation";
import ContactHeaderHero from "./ContactHeaderHero";
import ContactHeaderOpenTime from "./ContactHeaderOpenTime";

export default function ContactHeader() {
    return (
        <div className="header-container">
            <div className="header-bg"></div>
            <ContactHeaderNavigation />
            <ContactHeaderHero />
            <ContactHeaderOpenTime />
        </div>
    );
}
