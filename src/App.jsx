import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router";
import Contact from "Components/ContactPage/contact";
import ReservationForm from "Components/ContactPage/ReservationForm";
import Home from "Components/Home/Home";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservation_form" element={<ReservationForm />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

