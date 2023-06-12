import React from "react";
import "../../styles.scss";
import mancooks from "../../assests/images/man-cooks.png"

export default function HomeSection3() {
    return (
        <div className="homepage-section3">
            <div className="man-cooks">
                <img className="man-sprinkles" src={mancooks} alt="man-cooks" />
            </div>
        </div>
    )
}