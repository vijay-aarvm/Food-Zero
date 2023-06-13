import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router";
import Contact from "./Components/ContactPage/contact";
import ReservationForm from "./Components/CommonComponents/ReservationForm";
import Home from "./Components/Home/Home";
import TwoColumnBlogs from "./Components/BlogTwoColumns/TwoColumnBlogs";
import OneColumnBlogs from "./Components/BlogOneColumn/OneColumnBlog";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import SinglePost from "./Components/SinglePost-NoSidebar/SinglePost";
import PortfolioGrid from "./Components/PortfolioGrids/PortfolioGrid";
import SinglePortfolio from "./Components/SinglePortfolio/SinglePortfolio";
import SinglePostSidebar from "./Components/SinglePost-Sidebar/SidebarPost";
import NavigationPage from "./Components/CommonComponents/NavigationPage";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservation_form" element={<ReservationForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog_two_columns" element={<TwoColumnBlogs />} />
                <Route path="/blog_one_column" element={<OneColumnBlogs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/single_post_without_sidebar" element={<SinglePost />} />
                <Route path="/portfolio_grid" element={<PortfolioGrid />} />
                <Route path="/single_portfolio" element={<SinglePortfolio />} />
                <Route path="/single_post_with_sidebar" element={<SinglePostSidebar />} />
                <Route path="/nav_page" element={<NavigationPage />} />
            </Routes>
        </>
    );
}

