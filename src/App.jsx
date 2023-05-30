import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router";
import Contact from "Components/ContactPage/contact";
import ReservationForm from "Components/ContactPage/ReservationForm";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/reservation_form" element={<ReservationForm />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

