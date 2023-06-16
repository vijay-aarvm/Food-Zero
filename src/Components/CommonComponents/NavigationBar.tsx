import React, { useState } from "react";
import "./navigationBar.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/images/Logo.png";
import navigaition_menu from "../../assests/images/navimenu.png";
import NavigationPage from "./NavigationPage";

export default function NavigationBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navigation-bar">
            <div className="navigation-menu">
                <img className="navigation-menu-logo" src={logo} alt="logo"></img>
                <button className={`menu-btn ${isMenuOpen ? 'active' : ''}`} id="menu-button" onClick={toggleMenu}><img className="navigation-menu-nav-btn" src={navigaition_menu} alt="nav-btn"></img></button>
            </div>
            <div className="reservations-menu">
                <p className="reservations-menu-contact">+86 852 346 000</p>
                <Link to={"/reservation_form"} className="reservations-menu-reserve-btn">Reservations</Link>
            </div>
            {isMenuOpen && <NavigationPage toggleMenu={toggleMenu} />}
        </div>
    )
}