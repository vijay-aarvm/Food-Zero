import React from "react";
import "../../styles.scss";
import instagram from "../../assests/images/instagram.png";
import twitter from "../../assests/images/twitter.png";
import facebook from "../../assests/images/facebook.png";
import youtube from "../../assests/images/youtube.png";


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="brand-name">
                    <h2>FoodZero.</h2>
                </div>
                <div className="contact-location">
                    <p className="contact-us">Contact</p>
                    <p className="telephone">
                        <a href="/#">+1+86 852 346 000</a>
                    </p>
                    <p className="mail">
                        <a href="mailto:info@foodzero.com">info@foodzero.com</a>
                    </p>
                    <p className="address">1959 Sepulveda Blvd, Culver City, CA, 90230</p>
                </div>
                <div className="write-to-us">
                    <p className="mail-title">Never Miss a Recipe</p>
                    <div className="mail-to-us">
                        <input className="mail-id" placeholder="Email Address" />
                        <button className="mail-button" value="submit">Subscribe</button>
                    </div>
                    <p className="subscription-note">Join our subscribers and get best recipe delivered each week!</p>
                </div>
            </div>
            <p className="footer-dotted-line"></p>
            <div className="copyright-section">
                <div className="copyright">
                    <p>© 2020 Zero Inc. All rights Reserved</p>
                </div>
                <div className="social-media-links">
                    <a href="/#"><img className="instagram-icon" alt="instagram" class="social-media-icon" src={instagram} /></a>
                    <a href="/#"><img className="twitter-icon" alt="twitter" class="social-media-icon" src={twitter} /></a>
                    <a href="/#"><img className="facebook-icon" alt="facebook" class="social-media-icon" src={facebook} /></a>
                    <a href="/#"><img className="youtube-icon" alt="youtube" class="social-media-icon" src={youtube} /></a>
                </div>
            </div>
        </div>
    )
}