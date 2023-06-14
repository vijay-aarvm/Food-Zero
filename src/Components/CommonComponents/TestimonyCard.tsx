import React from "react";
import { useSelector } from "react-redux";
import "./testimonyCard.scss";
import quote from "../../assests/images/quotes.png";

export default function TestimonyCard({ obj, currentIndex }: any) {

    const quotes = useSelector((state: any) => state.blogData);
    const totalQuotes = Object.keys(quotes).length;
    return (
        <div className="testimonals">
            <div className="testimony-content">
                <p className="client-testimony">{obj.testimony}</p>
                <img className="quote" src={quote} alt="closing quotes" />
            </div>
            <div className="client">
                <div className="client-info">
                    <img className="client-img" src={obj.authorProfile} alt="client" />
                    <div className="client-metadata">
                        <p className="client-name">{obj.authorName}</p>
                        <p className="client-designation">{obj.designation}</p>
                    </div>
                </div>
                <div className="navigate-buttons">
                    <button className="previous-quote">←</button>
                    <p className="quote-index">{`${currentIndex + 1} / ${totalQuotes}`}</p>
                    <button className="next-quote">→</button>
                </div>
            </div>
        </div>
    )
}