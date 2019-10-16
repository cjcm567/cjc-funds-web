/** @format */

import React, {CSSProperties} from "react"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import logoAsb from "../images/aboutus/logo-asb.svg"
import logoPwc from "../images/aboutus/logo-pwc.png"
import logoPublicTrust from "../images/aboutus/logo-public-trust.png"
import logoMinterEllison from "../images/aboutus/logo-minter-ellison.png"
import imageAuckland from "../images/banner/auckland.jpg"
import imagePhone from "../images/aboutus/phone.svg"
import imageAddress from "../images/aboutus/address.svg"
import imageEmail from "../images/aboutus/email.svg"
// function Iframe(props: any) {
//     return <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ""}} />
// }

export default function ContactUs() {
    const ceoStyle = {
        backgroundImage: `url(${imageAuckland})`,
    }
    return (
        <>
            <section className="contact-us section bg-secondary overlay" style={ceoStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-left"></div>
                        <div className="col-lg-6 justify-content-center px-5">
                            <div className="row justify-content-center">
                                {/* <h5 className="section-title-sm text-color">Our Some</h5> */}
                                <h2 className="section-title text-white">Contact Us</h2>
                                <ul className="pl-0 px-5">
                                    {/* contact items */}
                                    <li className="d-flex mb-30">
                                        {/* <img className="round-icon" height="12px" src={imagePhone} alt="imagePhone" /> */}
                                        <div className="align-self-center">
                                            <h4 className="text-white">+64 9 2803716</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        {/* <img className="round-icon" height="12px" src={imageEmail} alt="imageEmail" /> */}
                                        <div className="align-self-center font-primary">
                                            <h4 className="text-white">mark.fan@cariickassets.com</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        {/* <img
                                            className="round-icon"
                                            height="12px"
                                            src={imageAddress}
                                            alt="imageAddress"
                                        /> */}
                                        <div className="align-self-center font-primary">
                                            <h4 className="text-white">Carrick Just Asset Management Limited</h4>
                                            <h4 className="text-white">Level 2, 3 Margot Street, Epsom</h4>
                                            <h4 className="text-white">Auckland 1051</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
