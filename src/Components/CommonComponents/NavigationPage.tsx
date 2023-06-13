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
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/menu"}><li>Menu</li></Link>
                        <li>Blogs
                            <ul>
                                <Link to={"/blog_one_column"}><li>1 Columns</li></Link>
                                <Link to={"/blog_two_columns"}><li>2 Columns</li></Link>
                                <Link to={"/single_post_with_sidebar"}><li>SideBar Post</li></Link>
                            </ul>
                        </li>
                        <Link to={"/about"}><li>About</li></Link>
                        <Link to={"/contact"}><li>Contact</li></Link>
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