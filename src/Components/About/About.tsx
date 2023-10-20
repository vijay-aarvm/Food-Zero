import React from "react";
// import "../../styles.scss";
import AboutHeader from "./AboutHeader";
import OurStory from "./OurStory";
import Process from "./Process";
import FormReservation from "../CommonComponents/FormReservation";
import Layout from "../LayoutComponent/Layout";

export default function About() {
    return (
        <div>
            <Layout>
                <AboutHeader />
                <OurStory />
                <Process />
                <FormReservation />
            </Layout>
        </div>
    )
}