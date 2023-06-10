import React from "react";
import "../../styles.scss";
import SinglePortfolioHeader from "./SinglePortfolioHeader";
import SinglePortfolioContent from "./SinglePortfolioContent";
import NavigatePortfolio from "./NavigatePortfolio";
import Footer from "../CommonComponents/Footer";

export default function SinglePortfolio() {
    return (
        <div>
            <SinglePortfolioHeader />
            <SinglePortfolioContent />
            <NavigatePortfolio />
            <Footer />
        </div>
    )
}