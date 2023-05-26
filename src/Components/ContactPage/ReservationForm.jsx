import React, { useState } from "react";
import "../../styles.scss";
import mint from "../../assests/images/Mint.png"

export default function ReservationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        date: "",
        time: "",
        noOfPersons: 0
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData));
    }


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
                    <input className="first-name" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName}></input>
                    <input className="last-name" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName}></input>
                </div>
                <div className="mail-and-phone">
                    <input className="mail" name="mail" placeholder="Email" onChange={handleChange} value={formData.mail}></input>
                    <input className="phone" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone}></input>
                </div>
                <div className="schedule">
                    <input type="date" className="select-date" name="date" placeholder="Choose the date" onChange={handleChange} value={formData.date}></input>
                    <select className="time" name="time" onChange={handleChange} value={formData.time}>
                        <option>11:00 am</option>
                        <option>13:00 pm</option>
                        <option>14:00 pm</option>
                        <option>15:00 pm</option>
                        <option>16:00 pm</option>
                        <option>18:00 pm</option>
                        <option>19:00 pm</option>
                    </select>
                </div>
                <select className="no-of-persons" name="noOfPersons" onChange={handleChange} value={formData.noOfPersons}>
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                    <option>8</option>
                    <option>10</option>
                    <option>15</option>
                </select>
                <button className="book-now" onClick={handleSubmit}>Book Now</button>
            </div>
        </div>
    )
}