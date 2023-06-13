import React from "react";
import "./ourStory.scss";
import ourstory from "../../assests/images/ourstory.png";
import manager from "../../assests/images/manager.png";
import chef from "../../assests/images/chef.png";
import playpause from "../../assests/images/play.png"

export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="our-story">
                <div className="ourstory-title">
                    <h1 className="title">Our Story</h1>
                    <p className="title-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>
                </div>
                <img className="ourstory-img" src={ourstory} alt="ourstory" />
            </div>
            <div className="our-team">
                <div className="our-manager">
                    <p className="manager-title">Restuarant Manager</p>
                    <p className="manager-name">Carson Hugn</p>
                    <img className="manager" src={manager} alt="manager" />
                    <p className="about-manager">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                </div>
                <div className="our-chef">
                    <p className="about-chef">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                    <p className="chef-title">Executive Chef</p>
                    <p className="chef-name">Jane Cooper</p>
                    <img className="chef" src={chef} alt="chef" />
                </div>
            </div>
            <div className="our-food-video">
                <div className="ourfood"></div>
                <p className="video-title">It looks delicious</p>
                <p className="title-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="play-btn"><img className="play-pause" src={playpause} alt="play/pause" /></button>
            </div>
        </div>
    )
}