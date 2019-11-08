/** @format */

import React, {Suspense} from "react"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import imagePhone from "../images/aboutus/phone.svg"
import imageAddress from "../images/aboutus/address.svg"
import imageEmail from "../images/aboutus/email.svg"

function ContactUs() {
    return (
        <>
            <Helmet>
                <title>联系我们 | Carrick Asset</title>
                <meta name="description" content="Carrick Asset 联系我们页面" />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-1 col-md-5">
                                <h2 className="section-title">联系我们</h2>
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
                                            <a href="mailto:info@carrickasset.com" className="text-dark">
                                                info@carrickasset.com
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
                                    <form name="contactus" method="post" className="row">
                                        <input type="hidden" name="form-name" value="contactus" />
                                        <div className="col-lg-12">
                                            <h4 className="mb-10">敬请留下您的联系方式，我们会尽快与您取得联系</h4>
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="姓名"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="邮箱"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                className="form-control"
                                                placeholder="标题"
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
                                                placeholder="请告诉我们您的详细问题，以便我们更快地为您提供帮助。"
                                                required></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn btn-primary" type="submit" value="send">
                                                提交
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
