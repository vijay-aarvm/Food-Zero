import React from "react";
import "../../styles.scss";
import PortfolioGridHeader from "./PorfolioGridHeader";
import Portfolios from "./Portfolios";
import Layout from "../LayoutComponent/Layout";

export default function PortfolioGrid() {
    return (
        <div>
            <Layout>
                <PortfolioGridHeader />
                <Portfolios />
            </Layout>
        </div>
    )
}