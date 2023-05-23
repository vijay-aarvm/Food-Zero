import React from "react";
import "../../styles.scss";


export default function ContactHeaderOpenTime() {
    return (
        <div className="opentime">
            <div className="opentime-table">
                <div className="opentime-header">
                    <h3 className="opentime-title">Open Time</h3>
                    <h4 className="opened-days">Sunday - Friday</h4>
                </div>
                <div className="dotted-line"></div>
                <div className="available-timings">
                    <table className="time-table">
                        <tr>
                            <th className="brunch">Brunch</th>
                            <th className="lunch">Lunch</th>
                            <th className="dinner">Dinner</th>
                        </tr>
                        <tr>
                            <td className="brunch brunch-timing">11:00-12:00</td>
                            <td className="lunch lunch-timing">13:00-17:00</td>
                            <td className="dinner dinner-timing">18:00-20:00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}