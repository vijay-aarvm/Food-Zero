import React from "react";
// import "../../styles.scss";
import AboutHeader from "./AboutHeader";
import OurStory from "./OurStory";
import Process from "./Process";
import FormReservation from "../CommonComponents/FormReservation";
import Footer from "../CommonComponents/Footer";

export default function About() {
    return (
        <div>
            <AboutHeader />
            <OurStory />
            <Process />
            <FormReservation />
            <Footer />
        </div>
    )
}