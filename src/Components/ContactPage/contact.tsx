import React from "react";
import "../../styles.scss";
import ContactHeader from "./ContactHeader";
import AddressAndLocation from "./AddressAndLocation";
import ReservationForm from "../CommonComponents/ReservationForm";
import Layout from "../LayoutComponent/Layout";

export default function Contact() {
    return (
        <>
            <Layout>
                <ContactHeader />
                <AddressAndLocation />
                <ReservationForm />
            </Layout>
        </>
    )
}