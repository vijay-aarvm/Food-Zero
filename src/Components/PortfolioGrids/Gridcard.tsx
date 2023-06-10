import React from "react";
import "../../styles.scss";

export default function Gridcard({ obj }: any) {
    // const isIndexOdd = (obj: any) => {
    //     return obj.index % 2 !== 0;
    // };

    return (
        <div className="gridcard">
            <img className="portfolio-cover" src={obj.coverImage} alt="portfoliocover" />
            <div className="portfolio-details">
                <p className="portfolio-title">{obj.title}</p>
                <div className="tags">
                    <p className="session">{obj.session}</p>
                    <p className="category">{obj.category}</p>
                </div>
            </div>
        </div>
    );
}
