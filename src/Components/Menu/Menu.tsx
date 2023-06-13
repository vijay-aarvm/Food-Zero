import React from "react";
import "../../styles.scss";
import MenuHeader from "./MenuHeader";
import StarterCourseDishes from "./StarterCourseDishes";
import PastryDishes from "./PastryDishes";
import FormReservation from "../CommonComponents/FormReservation";
import Footer from "../CommonComponents/Footer";
import MainCourseDishes from "./MainCourseDishes";

export default function Menu() {
    return (
        <div>
            <MenuHeader />
            <StarterCourseDishes />
            <MainCourseDishes />
            <PastryDishes />
            <FormReservation />
            <Footer />
        </div>
    )
}