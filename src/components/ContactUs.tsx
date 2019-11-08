/** @format */

import React from "react"
import imageAuckland from "../images/banner/auckland.jpg"
import "../fonts/IconFont/iconfont.css"
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
                                <h2 className="section-title text-white">联系我们</h2>
                                <ul className="pl-0 px-5">
                                    <li className="d-flex">
                                        <span
                                            className="iconfont icon-hotelphone align-self-center pt-1 mr-2"
                                            style={{fontSize: "1.6rem", color: "#0057b8"}}></span>
                                        <div className="align-self-center">
                                            <a href="tel:+64 9 2803716" className="h4 text-white text-left">
                                                🇳🇿 +64 9 2803716
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-40">
                                        <span
                                            className="iconfont icon-Email align-self-center pt-1 mr-2"
                                            style={{fontSize: "1.6rem", color: "#0057b8"}}></span>
                                        <div className="align-self-center font-primary">
                                            <a href="mailto:info@carrickasset.com" className="h4 text-white text-left">
                                                info@carrickasset.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <span
                                            className="iconfont icon-address mr-2"
                                            style={{fontSize: "1.6rem", color: "#0057b8", marginTop: "-4px"}}></span>
                                        <div className="font-primary">
                                            <address className="h4 text-white text-left">
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
