import React from "react";
import "../../styles.scss";
import PortfolioGridHeader from "./PorfolioGridHeader";
import Portfolios from "./Portfolios";
import Footer from "../CommonComponents/Footer";

export default function PortfolioGrid() {
    return (
        <div>
            <PortfolioGridHeader />
            <Portfolios />
            <Footer />
        </div>
    )
}