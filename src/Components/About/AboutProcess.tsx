import React from "react";
import "../../styles.scss";
import rosemaryright from "../../assests/images/rosemary-right.png";
import meatsliced from "../../assests/images/meat-slice.png";
import meatpickled from "../../assests/images/meat-pickle.png";
import meatbaked from "../../assests/images/meat-baked.png";

export default function AboutProcess() {
    return (
        <div className="our-process">
            <div className="process-title">
                <h1 className="title">Sophisticated Process</h1>
                <img className="rosemary-right" src={rosemaryright} alt="rosemary" />
            </div>
            <div className="slice">
                <img className="meat-sliced" src={meatsliced} alt="meat sliced" />
                <div className="about-slice">
                    <p className="slice-title">01.Slice</p>
                    <p className="about-slice">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                </div>
            </div>
            <div className="pickle-and-bake">
                <div className="bake">
                    <img className="meat-baked" src={meatbaked} alt="meat baked" />
                    <div className="about-bake">
                        <p className="bake-title">03.Bake</p>
                        <p className="about-bake">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                    </div>
                </div>
                <div className="pickle">
                    <img className="meat-pickled" src={meatpickled} alt="meat pickled" />
                    <div className="about-pickle">
                        <p className="pickle-title">02.pickled</p>
                        <p className="about-pickle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}