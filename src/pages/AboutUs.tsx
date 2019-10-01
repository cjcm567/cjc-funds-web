/** @format */

import React from "react"
import Layout from "../components/layout"
import logo from "../images/logo.svg"

export default function AboutUs() {
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <h5 className="section-title-sm">Know About</h5>
                                <h2 className="section-title section-title-border-half">Our Philosophy</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt
                                    laboris nisi ut aliquip ex commodo consequat. duis aute irure dolor in
                                    reprehenderivoluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur sint
                                    ocaecat cupidatat noproident sunt culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                                <p>
                                    Sed perspiciatis unde omnisiste natus error sit voluptatem accusantium.doloremque
                                    ladantium totam rem aperieaque ipsa quae ab illo inventore.veritatis. et quasi
                                    architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Explore More
                                </a>
                            </div>
                            {/* philosophy image */}
                            <div className="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
                                <img
                                    className="img-fluid w-100"
                                    src="images/about/philosophy.jpg"
                                    alt="philosophy-image"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* philosophy */}

                {/* ceo section */}
                <section>
                    <div className="container">
                        <div className="row rounded bg-secondary">
                            {/* ceo image */}
                            <div
                                className="col-lg-5 rounded-left ceo-image"
                                style={{backgroundImage: "url(images/about/ceo.jpg);"}}></div>
                            <div className="col-lg-7">
                                {/* ceo content */}
                                <div className="p-5">
                                    <h2 className="section-title section-title-border-half-white text-white">
                                        We are efficient to
                                        <br /> make your business rise{" "}
                                    </h2>
                                    <p className="text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor
                                        didunt laboris nisi ut aliquip ex commodo consequat. duis aute irure dolor in
                                        reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur
                                        sint ocaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                    <img src="images/about/ceo-signature.png" alt="ceo-signature" />
                                    <h5 className="text-white">John Doe</h5>
                                    <h6 className="text-white">CEO</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ceo section */}

                {/* skill */}
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="section-title-sm">Best Reason</h5>
                                <h2 className="section-title section-title-border-half">Why Choose Us</h2>
                            </div>
                            {/* accordion */}
                            <div className="col-lg-6">
                                <div id="accordion" className="mb-md-50">
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseOne">
                                                <i className="ti-minus text-primary mr-2"></i> Our Company Mission
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                                Duis aute irure dolor in reprehenderit voluptate velit esse cillum
                                                dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non
                                                proident sunt culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseTwo">
                                                <i className="ti-plus text-primary mr-2"></i> Our Company Mission
                                            </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                                Duis aute irure dolor in reprehenderit voluptate velit esse cillum
                                                dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non
                                                proident sunt culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseThree">
                                                <i className="ti-plus text-primary mr-2"></i> Our Company Mission
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                                Duis aute irure dolor in reprehenderit voluptate velit esse cillum
                                                dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non
                                                proident sunt culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* progressbar */}
                            <div className="col-lg-6">
                                <div className="progressbar">
                                    <h5 className="progressbar-title">Branding</h5>
                                    <div className="progress" data-percent="85%">
                                        <div className="progress-bar progress-bar-striped" style={{width: "85%;"}}>
                                            <div className="progress-bar-value">85%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <h5 className="progressbar-title">Branding</h5>
                                    <div className="progress" data-percent="75%">
                                        <div className="progress-bar progress-bar-striped" style={{width: "75%;"}}>
                                            <div className="progress-bar-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <h5 className="progressbar-title">Consulting</h5>
                                    <div className="progress" data-percent="90%">
                                        <div className="progress-bar progress-bar-striped" style={{width: "90%;"}}>
                                            <div className="progress-bar-value">90%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <h5 className="progressbar-title">Business</h5>
                                    <div className="progress" data-percent="75%">
                                        <div className="progress-bar progress-bar-striped" style={{width: "75%;"}}>
                                            <div className="progress-bar-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* skill  */}

                <section
                    className="fun-facts overlay-dark section-sm"
                    style={{backgroundImage: "url(images/background/cta.jpg);"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                    <i className="round-icon ti-server mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                    <div className="text-center text-sm-left">
                                        <h2 className="count text-white mb-0" data-count="230">
                                            0
                                        </h2>
                                        <p className="text-white mb-0">Projects Done</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                    <i className="round-icon ti-face-smile mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                    <div className="text-center text-sm-left">
                                        <h2 className="count text-white mb-0" data-count="789">
                                            0
                                        </h2>
                                        <p className="text-white mb-0">Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                    <i className="round-icon ti-thumb-up mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                    <div className="text-center text-sm-left">
                                        <h2 className="count text-white mb-0" data-count="580">
                                            0
                                        </h2>
                                        <p className="text-white mb-0">Cup Of Coffee</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                    <i className="round-icon ti-cup mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                    <div className="text-center text-sm-left">
                                        <h2 className="count text-white mb-0" data-count="130">
                                            0
                                        </h2>
                                        <p className="text-white mb-0">Awards Win</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* testimonial */}
                <section className="section pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h5 className="section-title-sm">Clients</h5>
                                <h2 className="section-title section-title-border"> What client Say </h2>
                            </div>
                            <div className="col-lg-5 col-md-5 pr-0 align-self-center">
                                <img className="img-fluid w-100" src="images/client.png" alt="clients-image" />
                            </div>
                            <div className="col-lg-7 col-md-7 align-self-center pl-0">
                                <div className="testimonial-slider p-5">
                                    {/* slider item */}
                                    <div className="outline-0">
                                        <i className="testimonial-icon ti-quote-left"></i>
                                        <p className="text-dark">
                                            Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid
                                            sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco
                                            labo ris nisi aliquip excepteur.
                                        </p>
                                        <h4 className="font-weight-normal">Julia Robertson</h4>
                                        <h6 className="font-secondary text-color">Happy Clients</h6>
                                    </div>
                                    {/* slider item */}
                                    <div className="outline-0">
                                        <i className="testimonial-icon ti-quote-left"></i>
                                        <p className="text-dark">
                                            Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid
                                            sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco
                                            labo ris nisi aliquip excepteur.
                                        </p>
                                        <h4 className="font-weight-normal">Julia Robertson</h4>
                                        <h6 className="font-secondary text-color">Happy Clients</h6>
                                    </div>
                                    {/* slider item */}
                                    <div className="outline-0">
                                        <i className="testimonial-icon ti-quote-left"></i>
                                        <p className="text-dark">
                                            Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid
                                            sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco
                                            labo ris nisi aliquip excepteur.
                                        </p>
                                        <h4 className="font-weight-normal">Julia Robertson</h4>
                                        <h6 className="font-secondary text-color">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

// export default function AboutUsComponent() {
//     return (
//         <Suspense fallback="loading...">
//             <AboutUs />
//         </Suspense>
//     )
// }
