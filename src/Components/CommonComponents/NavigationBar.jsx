import React from "react";
import "../../styles.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/images/Logo.png";
import navigaition_menu from "../../assests/images/navimenu.png";

export default function NavigationBar() {
    return (
        <div className="Navigation-bar">
            <div className="Navigation-menu">
                <img className="Navigation-menu-logo" src={logo} alt="logo"></img>
                <button className="Menu-btn"><img className="Navigation-menu-nav-btn" src={navigaition_menu} alt="nav-btn"></img></button>
            </div>
            <div className="Reservations-menu">
                <p className="Reservations-menu-contact">+86 852 346 000</p>
                <Link to={"/reservation_form"} className="Reservations-menu-reserve-btn">Reservations</Link>
            </div>
        </div>
    )
}