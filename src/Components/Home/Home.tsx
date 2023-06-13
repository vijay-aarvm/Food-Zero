import React from "react";
import "../../styles.scss";
import HomeHeader from "./HomeHeader";
import HomeMenu from "./HomeMenu";
import ChefBanner from "./ChefBanner";
import Features from "./FeaturesAndBlogs";
import FormReservation from "../CommonComponents/FormReservation";
import Categories from "./Categories";
import Footer from "../CommonComponents/Footer";


export default function Home() {
    return (
        <div>
            <HomeHeader />
            <HomeMenu />
            <ChefBanner />
            <Features />
            <FormReservation />
            <Categories />
            <Footer />
        </div>
    )
}