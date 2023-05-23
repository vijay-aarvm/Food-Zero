import React from "react";
import "./styles.scss";
import ContactHeader from "./Components/Contact/ContactHeader";
import AddressLocation from "Components/Contact/AddressLocation";

export default function App() {
    return (
        <>
            <ContactHeader />
            <AddressLocation />
        </>
    );
}

