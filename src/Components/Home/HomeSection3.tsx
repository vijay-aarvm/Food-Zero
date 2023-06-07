import React from "react";
import "../../styles.scss";
import leafleft from "../../assests/images/leaf-left.png";
import leafright from "../../assests/images/leaf-right.png";
import mancooks from "../../assests/images/man-cooks.png";

export default function HomeSection3() {
    return (
        <div className="homepage-section3">
            <div className="man-cooks">
                <img className="leaf-left" src={leafleft} alt="leaf-left" />
                <img className="man-sprinkles" src={mancooks} alt="man-cooks" />
            </div>
            <div className="cook-details">
                <h1 className="excellent-cook">Excellent cook</h1>
                <p className="cook-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                    imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                </p>
                <img className="leaf-right" src={leafright} alt="leaf -right" />
            </div>
        </div>
    )
}