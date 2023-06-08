import React from "react";
import "../../styles.scss";
import AboutHeader from "./AboutHeader";
import AboutUs from "./AboutUs";
import AboutProcess from "./AboutProcess";
import FormReservation from "../CommonComponents/FormReservation";
import Footer from "../CommonComponents/Footer";

export default function About() {
    return (
        <div>
            <AboutHeader />
            <AboutUs />
            <AboutProcess />
            <FormReservation />
            <Footer />
        </div>
    )
}