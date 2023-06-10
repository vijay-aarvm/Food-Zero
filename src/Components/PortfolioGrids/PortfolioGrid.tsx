import React from "react";
import "../../styles.scss";
import PortfolioGridHeader from "./PorfolioGridHeader";
import PortfolioGridSection from "./PortfolioGridSection";
import Footer from "../CommonComponents/Footer";

export default function PortfolioGrid() {
    return (
        <div>
            <PortfolioGridHeader />
            <PortfolioGridSection />
            <Footer />
        </div>
    )
}