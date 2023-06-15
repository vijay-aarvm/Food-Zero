import React from "react";
import "./navigationPage.scss";
import navpagebg from "../../assests/images/nav-fullscreenbg.png";
import instagram from "../../assests/images/instagram.png";
import twitter from "../../assests/images/twitter.png";
import facebook from "../../assests/images/facebook.png";
import youtube from "../../assests/images/youtube.png";
import { Link } from "react-router-dom";

const socialMediaIcons = [{
    name: "instagram",
    component: instagram
}, {
    name: "twitter",
    component: twitter
}, {
    name: "facebook",
    component: facebook
}, {
    name: "youtube",
    component: youtube
}];


const renderSocialMediaIcons = () => {
    return (
        <div className="social-media-links">
            {
                socialMediaIcons?.map((mediaIcon) => (
                    <a href="/#">
                        <img className={`${mediaIcon.name}-icon social-media-icon`} alt={mediaIcon.name} src={mediaIcon.component} />
                    </a>
                ))
            }
        </div>
    );
}



export default function NavigationPage({ toggleMenu }: any) {
    return (
        <div className="navigation-page">
            <img className="navpage-bg" src={navpagebg} alt="navbg" />
            <button className="close" id="close-button" onClick={toggleMenu}>X</button>
            <div className="navigation-list">
                <div className="page-list">
                    <ul className="links">
                        <Link className="router-link" to={"/"}><li className="link">HOME</li></Link>
                        <Link className="router-link" to={"/menu"}><li className="link">MENU</li></Link>
                        <li style={{ color: "#9CAA00" }}>Blogs
                            <ul>
                                <Link style={{ listStyle: "none" }} className="router-link" to={"/blog_one_column"}><li className="link">1 COLUMNS</li></Link>
                                <Link style={{ listStyle: "none" }} className="router-link" to={"/blog_two_columns"}><li className="link">2 COLUMNS</li></Link>
                                <Link style={{ listStyle: "none" }} className="router-link" to={"/single_post_with_sidebar"}><li className="link">SIDEBAR POST</li></Link>
                            </ul>
                        </li>
                        <Link className="router-link" to={"/about"}><li className="link">ABOUT</li></Link>
                        <Link className="router-link" to={"/contact"}><li className="link">CONTACT</li></Link>
                    </ul>
                </div>
                <div className="navpage-address">
                    <div className="contact-location">
                        <p className="contact-us">Contact</p>
                        <div className="dotted-line"></div>
                        <p className="telephone">
                            <a href="/#">+1+86 852 346 000</a>
                        </p>
                        <p className="mail">
                            <a href="mailto:info@foodzero.com">info@foodzero.com</a>
                        </p>
                        <p className="address">1959 Sepulveda Blvd, Culver City, CA, 90230</p>
                    </div>
                    {renderSocialMediaIcons()}
                </div>
            </div>
        </div>
    )
}