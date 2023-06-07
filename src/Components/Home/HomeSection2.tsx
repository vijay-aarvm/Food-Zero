import React from "react";
import "../../styles.scss";
import branch from "../../assests/images/branch.png";

export default function HomeSection2() {
    return (
        <div className="homepage-section2">
            <div className="menu-header">
                <div className="food-menu">
                    <h1 className="our-menu">Our Menu</h1>
                    <p className="our-menu-desc">This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="header-img">
                    <img className="branch" src={branch} alt="branch" />
                </div>
            </div>
            <div className="food-items">
                <div className="item-column1">
                    <div className="food-item1">
                        <h3 className="item-price">$20</h3>
                        <p className="dotted-line"></p>
                        <h2 className="item-name">Deep Sea Snow White Cod Fillet</h2>
                        <p id="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="food-item2">
                        <h3 className="item-price">$18</h3>
                        <p className="dotted-line"></p>
                        <h2 className="item-name">Cucumber Salad</h2>
                        <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="item-column2">
                    <div className="food-item3">
                        <h3 className="item-price">$22</h3>
                        <p className="dotted-line"></p>
                        <h2 className="item-name">Steak With Rosemary Butter</h2>
                        <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="food-item4">
                        <h3 className="item-price">$90</h3>
                        <p className="dotted-line"></p>
                        <h2 className="item-name">Natural Wine Pairing</h2>
                        <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}