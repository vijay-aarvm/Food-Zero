import React from "react";
import "../../styles.scss";
import MenuStarters from "./MenuStarters";
import MenuMains from "./MenuMains";
import MenuPastries from "./MenuPastries";
import FormReservation from "../CommonComponents/FormReservation";
import Footer from "../CommonComponents/Footer";

export default function MenuSection() {
    return (
        <div>
            <MenuStarters />
            <MenuMains />
            <MenuPastries />
            <FormReservation />
            <Footer />
        </div>
    )
}