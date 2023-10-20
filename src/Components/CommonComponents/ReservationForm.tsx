import React, { useState } from "react";
import "./reservationForm.scss";
import mint from "../../assests/images/Mint.png";

const timeSlots = ["11:00 am", "13:00 pm", "14:00 pm", "15:00 pm", "16:00 pm", "18:00 pm", "19:00 pm"];

const noOfPersons = ["0", "2", "4", "6", "8", "10", "15"];

export default function ReservationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        date: "",
        time: "00:00",
        noOfPersons: 0
    })


    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`you have booked your reservation successfully ${JSON.stringify(formData)}`);
        setFormData({
            firstName: "",
            lastName: "",
            mail: "",
            phone: "",
            date: "",
            time: "",
            noOfPersons: 0
        })
    }


    return (
        <form className="form">
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
                        {timeSlots.map((slot) => (
                            <option value={slot} key={slot}>{slot}</option>
                        ))}
                    </select>
                </div>
                <select className="no-of-persons" name="noOfPersons" onChange={handleChange} value={formData.noOfPersons}>
                    {noOfPersons.map((count) => (
                        <option value={count} key={count}>{count}</option>
                    ))}
                </select>
                <button type="submit" className="book-now" onClick={handleSubmit}>Book Now</button>
            </div>
        </form>
    )
}