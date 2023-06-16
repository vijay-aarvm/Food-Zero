import React from "react";
import "./addressAndLocation.scss";
import restaurant from "../../assests/images/restaurant-sv.png";
import orange from "../../assests/images/Orange.png";
import lemonsOnTable from "../../assests/images/lemon-on-the-table.png";

export default function AddressAndLocation() {
    return (
        <div className="address-location">
            <div className="contact-section">
                <div className="contact-section-wrapper">
                    <img className="orange" src={orange} alt="orange"></img>
                    <img className="lemons-on-table" src={lemonsOnTable} alt="lemons"></img>
                </div>
                <p className="email-and-phone">We can be contacted via email <a href="/#">info@foodzero.com</a> or telephone on <a href="/#">+86 852 346 000</a></p>
            </div>
            <div className="address-section">
                <div className="address-and-map">
                    <p className="address">We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                    <button className="map-link"><p>View in maps</p></button>
                </div>
                <img className="restaurant-sv" src={restaurant} alt="restaurant"></img>
            </div>
        </div>
    )
}