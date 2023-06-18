import React from "react";
import "../../styles.scss";
import PortfolioHeader from "../CommonComponents/PortfolioHeader";
import Portfolios from "./Portfolios";
import Layout from "../LayoutComponent/Layout";
import headerBg from "../../assests/images/portfoliogrid-bg.png";

export default function PortfolioGrid() {
    return (
        <div>
            <Layout>
                <PortfolioHeader title="Portfolio - Grids" backgroundImage={headerBg} />
                <Portfolios />
            </Layout>
        </div>
    )
}