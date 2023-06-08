import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router";
import Contact from "./Components/ContactPage/contact";
import ReservationForm from "./Components/ContactPage/ReservationForm";
import Home from "./Components/Home/Home";
import BlogTwoColumns from "./Components/BlogTwoColumns/BlogTwoColumn";
import BlogOneColumn from "./Components/BlogOneColumn/BlogOneColumn";
import Menu from "./Components/Menu/Menu";


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
            </Routes>
        </>
    );
}

