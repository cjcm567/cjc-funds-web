/** @format */

import React, {Suspense} from "react"
import Layout from "../components/layout"

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
                                    {/* contact items */}
                                    <li className="d-flex mb-30">
                                        <i className="round-icon mr-3 ti-mobile"></i>
                                        <div className="align-self-center font-primary">
                                            <p>+88 0123 456 789</p>
                                            <p>+88 987 654 3210</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <i className="round-icon mr-3 ti-email"></i>
                                        <div className="align-self-center font-primary">
                                            <p>info@biztrox.com</p>
                                            <p>biztrox@email.com</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-30">
                                        <i className="round-icon mr-3 ti-map-alt"></i>
                                        <div className="align-self-center font-primary">
                                            <p>24/B Garden Street.</p>
                                            <p>Northambia, Weals, UK</p>
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
