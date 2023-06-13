import React from "react";
import "./footer.scss";
import instagram from "../../assests/images/instagram.png";
import twitter from "../../assests/images/twitter.png";
import facebook from "../../assests/images/facebook.png";
import youtube from "../../assests/images/youtube.png";

const ContactInfo = () => {
    // const [phoneNum, setPhoneNumber] = useState("");
    // useEffect(() => {
    //     setTimeout(() => {
    //         setPhoneNumber('+1+86 852 346 000')
    //     });
    // }, []);
    return (
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
    );
};

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

export default function Footer() {
    const renderBrandName = () => {
        return (
            <div className="brand-name">
                <h2>FoodZero.</h2>
            </div>
        );
    };

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
                {/* <a href="/#"><img className="instagram-icon" alt="instagram" src={instagram} /></a>
                <a href="/#"><img className="twitter-icon" alt="twitter" src={twitter} /></a>
                <a href="/#"><img className="facebook-icon" alt="facebook" src={facebook} /></a>
                <a href="/#"><img className="youtube-icon" alt="youtube" src={youtube} /></a> */}
            </div>
        );
    }

    return (
        <div className="footer-container">
            <div className="footer">
                {renderBrandName()}
                <ContactInfo />
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
                {renderSocialMediaIcons()}
            </div>
        </div>
    )
}