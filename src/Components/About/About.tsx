import React from "react";
import "../../styles.scss";
import AboutHeader from "./AboutHeader";
import AboutUs from "./AboutUs";
import AboutProcess from "./AboutProcess";

export default function About() {
    return (
        <div>
            <AboutHeader />
            <AboutUs />
            <AboutProcess />
        </div>
    )
}