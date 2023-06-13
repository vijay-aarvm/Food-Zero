import React from "react";
import "./chefBanner.scss";
import mancooks from "../../assests/images/man-cooks.png"

export default function ChefBanner() {
    return (
        <div className="homepage-section3">
            <div className="man-cooks">
                <img className="man-sprinkles" src={mancooks} alt="man-cooks" />
            </div>
        </div>
    )
}