import React from "react";
import "../../styles.scss";
import ContactHeader from "./ContactHeader";
import AddressAndLocation from "./AddressAndLocation";
import ReservationForm from "../CommonComponents/ReservationForm";
import Footer from "../CommonComponents/Footer";

export default function Contact() {
    return (
        <>
            <ContactHeader />
            <AddressAndLocation />
            <ReservationForm />
            <Footer />
        </>
    )
}