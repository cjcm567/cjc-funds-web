/** @format */

import React, {Suspense} from "react"
import Layout from "../components/layout"
import imagePhone from "../images/aboutus/phone.svg"
import imageAddress from "../images/aboutus/address.svg"
import imageEmail from "../images/aboutus/email.svg"

function ContactUs() {
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-1 col-md-5">
                                <h2 className="section-title">Contact Us</h2>
                                <ul className="pl-0">
                                    <li className="d-flex mb-30">
                                        <div className="round-icon mr-3">
                                            <img src={imagePhone} alt="imagePhone" />
                                        </div>
                                        <div className="align-self-center font-primary">
                                            <a href="tel:+64 9 2803716" className="text-dark">
                                                🇳🇿 +64 9 2803716
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <div className="round-icon mr-3">
                                            <img src={imageEmail} alt="imagePhone" />
                                        </div>
                                        <div className="align-self-center font-primary">
                                            <a href="mailto:mark.fan@carrickassets.com" className="text-dark">
                                                mark.fan@carrickassets.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <div className="round-icon mr-3">
                                            <img src={imageAddress} alt="imagePhone" />
                                        </div>
                                        <div className="align-self-center font-primary">
                                            <address className="text-dark">
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
                            {/* form */}
                            <div className="col-lg-6 col-md-7">
                                <div className="p-5 rounded box-shadow">
                                    <form action="#" className="row">
                                        <div className="col-lg-12">
                                            <h3>Contact Form</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                className="form-control"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea
                                                className="form-control p-2"
                                                name="message"
                                                id="message"
                                                wrap="off"
                                                rows={5}
                                                placeholder="Your Message Here..."
                                                required></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn btn-primary" type="submit" value="send">
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default function ContactUsComponent() {
    return (
        <Suspense fallback="loading...">
            <ContactUs />
        </Suspense>
    )
}
