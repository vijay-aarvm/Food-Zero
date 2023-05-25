import React from "react";
import "../../styles.scss";
import mint from "../../assests/images/Mint.png"

export default function ReservationForm() {
    return (
        <div className="form">
            <div className="form-header">
                <img className="mint" src={mint} alt="mint"></img>
                <div className="form-title">
                    <p className="form-header-title">Make a Reservation</p>
                    <p className="form-header-subtitle">Get in touch with restaurant</p>
                </div>
            </div>
            <div className="form-input">
                <div className="name">
                    <input className="first-name" placeholder="First Name"></input>
                    <input className="last-name" placeholder="Last Name"></input>
                </div>
                <div className="mail-and-phone">
                    <input className="mail" placeholder="Email"></input>
                    <input className="phone" placeholder="Phone"></input>
                </div>
                <div className="schedule">
                    <input type="date" className="select-date" placeholder="Choose the date"></input>
                    <select className="time">
                        <option>11:00 am</option>
                        <option>13:00 pm</option>
                        <option>14:00 pm</option>
                        <option>15:00 pm</option>
                        <option>16:00 pm</option>
                        <option>18:00 pm</option>
                        <option>19:00 pm</option>
                    </select>
                </div>
                <select className="no-of-persons">
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                    <option>8</option>
                    <option>10</option>
                    <option>15</option>
                </select>
                <button className="book-now">Book Now</button>
            </div>
        </div>
    )
}