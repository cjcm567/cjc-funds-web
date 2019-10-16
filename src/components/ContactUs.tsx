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
            <section className="contact-us section bg-secondary overlay-dark" style={ceoStyle}>
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
                                        <img src={imagePhone} alt="image Phone" className="pr-5" />
                                        <div className="align-self-center">
                                            <a href="tel:+64 9 2803716" className="h4 text-white">
                                                🇳🇿 +64 9 2803716
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <img src={imageEmail} alt="image email" className="pr-5" />
                                        <div className="align-self-center font-primary">
                                            <a href="mailto:mark.fan@carrickassets.com" className="h4 text-white">
                                                mark.fan@carrickassets.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <img src={imageAddress} alt="image address" className="pr-5" />
                                        <div className="align-self-center font-primary">
                                            <address className="h4 text-white">
                                                Carrick Just Asset Management Limited
                                                <br />
                                                Level 2, 3 Margot Street, Epsom
                                                <br />
                                                Auckland 1051, New Zealand
                                            </address>
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
