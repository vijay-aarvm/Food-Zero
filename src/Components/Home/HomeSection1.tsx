import React from "react";
import "../../styles.scss";
import NavigationBar from "../CommonComponents/NavigationBar";
import spice1 from "../../assests/images/spices1.png";
import spice2 from "../../assests/images/spices2.png";
import spice3 from "../../assests/images/spices3.png";
import mussels from "../../assests/images/mussels.png";
import saltpepper from "../../assests/images/salt-pepper.png";

export default function HomeSection1() {
    return (
        <div className="homepage-section1">
            <NavigationBar />
            <div className="healthy-eating">
                <p className="healthy-eat-description">Healthy Eating
                    is important
                    part of lifestyle</p>
                <div className="meat-on-a-plate">
                </div>
                <div className="spices">
                    <img className="spice1" src={spice1} alt="spices" />
                    <img className="spice2" src={spice2} alt="spices" />
                    <img className="spice3" src={spice3} alt="spices" />
                </div>
            </div>
            <div className="healthy-diet">
                <div className="mussels">
                    <img className="mussel-pasta" src={mussels} alt="mussels" /><br /><br /><br />
                    <p className="diet-desc">Start to plan your diet today</p><br /><br />
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