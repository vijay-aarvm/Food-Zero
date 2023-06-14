import React from "react";
// import "./singlePortfolio.scss";
import SinglePortfolioHeader from "./SinglePortfolioHeader";
import SinglePortfolioContent from "./SinglePortfolioContent";
import NavigatePortfolio from "./NavigatePortfolio";
import Layout from "../LayoutComponent/Layout";

export default function SinglePortfolio() {
    return (
        <div>
            <Layout>
                <SinglePortfolioHeader />
                <SinglePortfolioContent />
                <NavigatePortfolio />
            </Layout>
        </div>
    )
}