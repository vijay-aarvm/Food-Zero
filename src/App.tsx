import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router";
import Contact from "./Components/ContactPage/contact";
import ReservationForm from "./Components/ContactPage/ReservationForm";
import Home from "./Components/Home/Home";
import BlogTwoColumns from "./Components/BlogTwoColumns/BlogTwoColumn";
import BlogOneColumn from "./Components/BlogOneColumn/BlogOneColumn";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import SinglePost from "./Components/SinglePost-NoSidebar/SinglePost";
import PortfolioGrid from "./Components/PortfolioGrids/PortfolioGrid";
import SinglePortfolio from "./Components/SinglePortfolio/SinglePortfolio";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservation_form" element={<ReservationForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog_two_columns" element={<BlogTwoColumns />} />
                <Route path="blog_one_column" element={<BlogOneColumn />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about" element={<About />} />
                <Route path="single_post_without_sidebar" element={<SinglePost />} />
                <Route path="portfolio_grid" element={<PortfolioGrid />} />
                <Route path="single_portfolio" element={<SinglePortfolio />} />
            </Routes>
        </>
    );
}

