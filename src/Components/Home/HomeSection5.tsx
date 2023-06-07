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
        <div id="homepage-section5">
            <div id="category-headline">
                <h1 id="headline">Calories Energy Balance</h1>
                <p id="headline-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div id="menu-category">
                <img id="starters" src={starters} alt="starters" />
                <img id="mains" src={mains} alt="mains" />
                <img id="soups" src={soups} alt="soups" />
            </div>
            <div id="testimonals">
                <div id="testimony-content">
                    <h3 id="client-testimony">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
                        penatibus imperdiet. Turpis
                        egestas ultricies purus Lorem ipsum dolor sit amet .
                    </h3>
                    <img id="quote" src={quotes} alt="quote" />
                </div>
                <div id="client">
                    <img id="client-info" src={clientinfo} alt="client-info" />
                    <img id="paging" src={paging} alt="paging" />
                </div>
            </div>
        </div>
    )
}