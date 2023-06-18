import React from "react";
// import "./singlePortfolio.scss";
import PortfolioHeader from "../CommonComponents/PortfolioHeader";
import SinglePortfolioContent from "./SinglePortfolioContent";
import NavigatePortfolio from "./NavigatePortfolio";
import Layout from "../LayoutComponent/Layout";
import headerBg from "../../assests/images/singleportfolio-bg.png";

export default function SinglePortfolio() {
    return (
        <div>
            <Layout>
                <PortfolioHeader title="Deep Sea Snow White Cod Fillet" backgroundImage={headerBg} />
                <SinglePortfolioContent />
                <NavigatePortfolio />
            </Layout>
        </div>
    )
}