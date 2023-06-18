import React, { useState } from "react";
import "./formReservation.scss";

// const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`you have booked your reservation successfully ${JSON.stringify(formData)}`);
//     setFormData({
//         date: "",
//         time: "",
//         noOfPersons: 0
//     })
// }

// const handleChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//     });
// };

const ReservationHeader = () => {
    return (
        <div className="reservation-header">
            <h1 className="reservation-header-title">Make a Reservation</h1>
            <p className="reservation-header-headline">Get in touch with restaurant</p>
        </div>
    )
}

const SelectSchedule = () => {

    const Time = ["11:00 am", "13:00 pm", "14:00 pm", "15:00 pm", "16:00 pm", "18:00 pm", "19:00 pm"];
    const persons = ["0", "2", "4", "6", "8", "10", "15"];

    const [time, setTime] = useState(Time[0]);
    const [noOfPersons, setNoOfPersons] = useState(persons[0]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`you will be redirected to the reservation form`)
        setTime("11:00 am");
        setNoOfPersons("0");

    }
    return (
        <div className="schedule-options">
            <div className="select-schedule">
                <input type="date" className="date" name="date" placeholder="Choose the date"></input>
                <select className="time" name="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}>
                    {Time.map((value) => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
                <select className="no-of-persons" name="noOfPersons"
                    value={noOfPersons}
                    onChange={e => setNoOfPersons(e.target.value)}>
                    {persons.map((value) => (
                        <option value={value} key={value}>{`${value} persons`}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="book-now" onClick={handleSubmit}>Book Now</button>
        </div>
    )
}


export default function FormReservation() {
    return (
        <div className="form-reservation">
            <ReservationHeader />
            <SelectSchedule />
        </div>
    )
}