import React from "react";
import "../../styles.scss";
import fish from "../../assests/images/fish.png";
import veggies from "../../assests/images/veggies.png";
import fruits from "../../assests/images/fruits.png";
import blog1 from "../../assests/images/blog1.png";
import blog2 from "../../assests/images/blog2.png";


export default function HomeSection4() {
    return (
        <div id="homepage-section4">
            <div id="quality-ingredients">
                <div id="premium-quality">
                    <img id="fish" className="ingredients-image" src={fish} alt="fish" />
                    <h2 className="ingredients">Premium Quality</h2>
                    <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
                <div id="seasonal-veggies">
                    <img id="veggies" className="ingredients-image" src={veggies} alt="veggies" />
                    <h2 className="ingredients">Seasonal Vegetables</h2>
                    <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
                <div id="fresh-fruit">
                    <img id="fruits" className="ingredients-image" src={fruits} alt="fruits" />
                    <h2 className="ingredients">Fresh Fruit</h2>
                    <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
            </div>
            <div className="blogs">
                <img id="blog1-feature-image" src={blog1} alt="blog1" />
                <img id="blog2-feature-image" src={blog2} alt="blog2" />
            </div>
        </div>
    )
}