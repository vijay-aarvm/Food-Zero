import React from "react";
import "../../styles.scss";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import FormReservation from "../CommonComponents/FormReservation";
// import NavigationBar from "../CommonComponents/NavigationBar";


export default function Home() {
    return (
        <div>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <FormReservation />
        </div>
    )
}