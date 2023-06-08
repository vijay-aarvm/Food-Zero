import React from "react";
import "../../styles.scss";
import starters from "../../assests/images/starters.png";
import mains from "../../assests/images/mains.png";
import soups from "../../assests/images/soups.png";
import quotes from "../../assests/images/quotes.png";
import clientinfo from "../../assests/images/client.png";
import paging from "../../assests/images/pagination.png";

export default function HomeSection5() {
    return (
        <div className="homepage-section5">
            <div className="category-headline">
                <h1 className="headline">Calories Energy Balance</h1>
                <p className="headline-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="menu-category">
                <img className="starters" src={starters} alt="starters" />
                <img className="mains" src={mains} alt="mains" />
                <img className="soups" src={soups} alt="soups" />
            </div>
            <div className="testimonals">
                <div className="testimony-content">
                    <h3 className="client-testimony">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
                        penatibus imperdiet. Turpis
                        egestas ultricies purus Lorem ipsum dolor sit amet .
                    </h3>
                    <img className="quote" src={quotes} alt="quote" />
                </div>
                <div className="client">
                    <img className="client-info" src={clientinfo} alt="client-info" />
                    <img className="paging" src={paging} alt="paging" />
                </div>
            </div>
        </div>
    )
}