import React from "react";
import "../../styles.scss";
import MenuHeader from "./MenuHeader";
import StarterCourseDishes from "./StarterCourseDishes";
import PastryDishes from "./PastryDishes";
import FormReservation from "../CommonComponents/FormReservation";
import Layout from "../LayoutComponent/Layout";
import MainCourseDishes from "./MainCourseDishes";

export default function Menu() {
    return (
        <div>
            <Layout>
                <MenuHeader />
                <StarterCourseDishes />
                <MainCourseDishes />
                <PastryDishes />
                <FormReservation />
            </Layout>
        </div>
    )
}