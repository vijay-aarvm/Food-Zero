import React from "react";
import "./homeHeader.scss";
import NavigationBar from "../CommonComponents/NavigationBar";
import spices1 from "../../assests/images/spices1.png";
import spices2 from "../../assests/images/spices2.png";
import spices3 from "../../assests/images/spices3.png";
import mussels from "../../assests/images/mussels.png";
import saltpepper from "../../assests/images/salt-pepper.png";

export default function HomeHeader() {
    return (
        <div className="homepage-header">
            <NavigationBar />
            <div className="healthy-eating">
                <div className="title-container">
                    <p className="healthy-eat-description">Healthy Eating
                        is important
                        part of lifestyle</p>
                </div>
                <div className="meat-on-a-plate">
                </div>
                <div className="spices">
                    <img className="spices1" src={spices1} alt="spices" />
                    <img className="spices2" src={spices2} alt="spices" />
                    <img className="spices3" src={spices3} alt="spices" />
                </div>
                <div className="title-description">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                    <p className="scroll-direction">Scroll --------------</p>
                </div>
            </div>
            <div className="healthy-diet">
                <div className="mussels">
                    <img className="mussel-pasta" src={mussels} alt="mussels" />
                    <p className="diet-desc">Start to plan your diet today</p>
                    <p className="mussel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                </div>
                <div className="salt-pepper">
                    <p className="salt-pepper-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                    <img className="salt-pepper-img" src={saltpepper} alt="salt-pepper" />
                </div>
            </div>
        </div>
    )
}