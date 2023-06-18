import React from "react";
import "./process.scss";
import rosemaryright from "../../assests/images/rosemary-right.png";
import meatsliced from "../../assests/images/meat-slice.png";
import meatpickled from "../../assests/images/meat-pickle.png";
import meatbaked from "../../assests/images/meat-baked.png";
import rosemaryleft from "../../assests/images/rosemary-left.png";

export default function Process() {
    return (
        <div className="our-process">
            <div className="process-title">
                <h1 className="title">Sophisticated Process</h1>
                <img className="title-wrapper-image rosemary-right" src={rosemaryright} alt="rosemary" />
            </div>
            <div className="slice">
                <img className="meat-sliced" src={meatsliced} alt="meat sliced" />
                <div className="about-slice">
                    <p className="slice-title">01.Slice</p>
                    <p className="aboutslice">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.</p>
                </div>
            </div>
            <div className="pickle-and-bake">
                <div className="bake">
                    <div className="about-bake">
                        <p className="bake-title">03.Bake</p>
                        <p className="aboutbake">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
                    </div>
                    <img className="meat-baked" src={meatbaked} alt="meat baked" />
                </div>
                <div className="pickle">
                    <img className="meat-pickled" src={meatpickled} alt="meat pickled" />
                    <div className="about-pickle">
                        <p className="pickle-title">02.pickled</p>
                        <p className="aboutpickle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
                    </div>
                </div>
            </div>
            <img className="our-process-wrapper-image rosemary-left" src={rosemaryleft} alt="rosemary" />
        </div>
    )
}