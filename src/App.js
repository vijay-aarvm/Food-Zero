import React from "react";
import "./styles.scss";
import ContactHeader from "./Components/Contact/ContactHeader";
import AddressLocation from "Components/Contact/AddressLocation";
import ReservationForm from "Components/Contact/ReservationForm";
import Footer from "Components/Contact/Footer";

export default function App() {
    return (
        <>
            <ContactHeader />
            <AddressLocation />
            <ReservationForm />
            <Footer />
        </>
    );
}

