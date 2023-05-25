import React from "react";
import "../../styles.scss";
import ContactHeader from "./ContactHeader";
import AddressLocation from "./AddressLocation";
import ReservationForm from "./ReservationForm";
import Footer from "Components/CommonComponents/Footer";

export default function Contact() {
    return (
        <>
            <ContactHeader />
            <AddressLocation />
            <ReservationForm />
            <Footer />
        </>
    )
}