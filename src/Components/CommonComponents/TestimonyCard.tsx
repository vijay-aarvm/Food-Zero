import React from "react";
import { useSelector } from "react-redux";
import "./testimonyCard.scss";
import quote from "../../assests/images/quotes.png";

export default function TestimonyCard({ obj, currentIndex, onPrevious, onNext }: any) {

    const quotes = useSelector((state: any) => state.blogData);
    const totalQuotes = Object.keys(quotes).length;

    const handlePrevious = () => {
        if (currentIndex > 0) {
            onPrevious();
        }
    }

    const handleNext = () => {
        if (currentIndex < totalQuotes - 1) {
            onNext();
        }
    }

    const quoteData = obj[currentIndex];

    return (
        <div className="testimonals">
            <div className="testimony-content">
                <p className="client-testimony">{quoteData.testimony}</p>
                <img className="quote" src={quote} alt="closing quotes" />
            </div>
            <div className="client">
                <div className="client-info">
                    <img className="client-img" src={quoteData.authorProfile} alt="client" />
                    <div className="client-metadata">
                        <p className="client-name">{quoteData.authorName}</p>
                        <p className="client-designation">{quoteData.designation}</p>
                    </div>
                </div>
                <div className="navigate-buttons">
                    <button className="previous-quote" onClick={handlePrevious} disabled={currentIndex === 0}>←</button>
                    <p className="quote-index">{`${currentIndex + 1} / ${totalQuotes}`}</p>
                    <button className="next-quote" onClick={handleNext} disabled={currentIndex === totalQuotes - 1}>→</button>
                </div>
            </div>
        </div>
    )
}