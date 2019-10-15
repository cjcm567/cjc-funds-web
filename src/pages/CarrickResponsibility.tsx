/** @format */

import React, {useState} from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import imageAbout from "../images/aboutus/aboutus.jpg"
import imageCeo from "../images/aboutus/ceo.jpg"
import imagels from "../images/aboutus/ls.jpg"
const ceoStyle = {
    backgroundImage: `url(${imageCeo})`,
}
export default function CarrickResponsibility() {
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Social Responsibility  */}
                            <div className="col-lg-7">
                                <h5 className="section-title-sm">Social</h5>
                                <h2 className="section-title section-title-border-half">社会责任</h2>
                                <p>
                                    Carrick Just Asset Management
                                    Limited认真对待作为企业公民的责任，并制定了许多确保道德和可持续投资的政策。
                                    社会责任：现如今包括联合国，联合国儿童基金会和许多其他组织在内的全球组织都正在使用区块链技术来提高投资透明度，以此更好地分配资金并为全球近20亿“无银行账户”带来经济自由。Carrick
                                    Just Asset Management Limited很荣幸能够参与其中。
                                </p>
                                <p>
                                    几乎所有技术都有可能会被不法分子利用，为了尽最大可能去避免Carrick Just Asset
                                    Management Limited的技术被滥用，我们严格遵守所有反洗钱和打击资助恐怖主义行为（AML /
                                    CFT）法规并实施完整的KYC政策。
                                </p>
                                <p>
                                    Carrick Just Asset Management
                                    Limited不促进任何形式的匿名交易，仅在受监管或许可的区块链资产交易中进行交易。
                                    同时Carrick Just Asset Management
                                    Limited还是许多金融行业组织的支持者，我们努力保持专业性和顾客对行业的信任。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* philosophy */}

                <section className="about section-sm overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ml-auto">
                                {/* <div className="rounded p-sm-5 px-3 py-5 bg-secondary"> */}
                                <h3 className="section-title section-title-border-half text-white">Who We Are?</h3>
                                <p className="text-white mb-40">
                                    我们的目标是使投资人获得高于适当基准的回报。
                                    我们通过运用我们的投资方法，专业知识和理念积极管理资金。
                                </p>
                                {/* <div>
                                    <ul className="d-inline-block pl-0">
                                        <li className="font-secondary mb-10 text-white float-sm-left mr-sm-5">
                                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>Business Services
                                        </li>
                                        <li className="font-secondary mb-10 text-white">
                                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>Audit &amp;
                                            Assurance
                                        </li>
                                        <li className="font-secondary mb-10 text-white">
                                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>IT Control
                                            Solutions
                                        </li>
                                    </ul>
                                    <ul className="d-inline-block pl-0">
                                        <li className="font-secondary mb-10 text-white">
                                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>Business Services
                                        </li>
                                        <li className="font-secondary mb-10 text-white">
                                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>Audit &amp;
                                            Assurance
                                        </li>
                                        <li className="font-secondary mb-10 text-white">
                                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>IT Control
                                            Solutions
                                        </li>
                                    </ul>
                                </div> */}
                                <a href="/about-us" className="btn btn-primary mt-4">
                                    Read More
                                </a>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ceo section  */}
                <section className="section bg-gray">
                    <div className="container">
                        <div className="row rounded bg-gray">
                            <div className="col-lg-7">
                                {/*  regulation  */}
                                <div className="p-5">
                                    <h5 className="section-title-sm">Regulation</h5>
                                    <h2 className="section-title section-title-border-half">监管责任</h2>
                                    <p>
                                        Carrick Just Asset Management
                                        Limited与区块链和金融行业内外的各位值得信赖的顾问进行咨询，以确保我们在所有业务实践中保持客观，公正和道德。
                                        我们还会仔细筛选投资是否存在任何危险信号，例如有可能的诈骗或非法活动，以便排除可能已包含在任何其他投资组合中的资产。
                                    </p>
                                </div>
                            </div>
                            {/* ceo image */}
                            <div className="col-lg-5 rounded-right ceo-image"></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
