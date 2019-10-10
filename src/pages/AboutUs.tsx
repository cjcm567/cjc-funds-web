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
export default function AboutUs() {
    const [activeState, setActiveState] = useState()
    // const toggleAccordion = (id: number) => {
    //     setActiveState(activeState === "collapse" ? "collapse show" : "collapse")
    // }
    const toggleAccordion = () => {
        setActiveState(activeState === "collapse" ? "collapse show" : "collapse")
    }
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <h5 className="section-title-sm">Know About</h5>
                                <h2 className="section-title section-title-border-half">我们的历史</h2>
                                <p>
                                    Carrick Just Asset Management Limited
                                    是一家被新西兰政府授权提供管理投资计划的基金公司。公司成立于2019年，总部位于新西兰奥克兰。本公司积极管理该计划下的资金，并致力于确保其客户实现其投资目标。
                                    公司在此管理投资计划下提供了一系列资金，以适应不同的投资者需求，并帮助我们的客户实现他们的投资目标。
                                    我们有能力投资各种资产类别，我们的目标是使投资人获得高于适当基准的回报。
                                    我们通过运用我们的投资方法，专业知识和理念积极管理资金。
                                </p>
                                <p>
                                    单位信托基金是由Carrick管理的合并投资。 您的资金与其他投资者的资金合计并由我们投资。
                                    我们将为其提供的服务收取费用。 每个基金分为多个单位，您可以通过购买单位进行投资。
                                    您可以通过出售单位退出投资。
                                    每个单位的价格可能会波动，您的投资价值取决于Carrick的投资决策。
                                </p>
                                <p>
                                    每个基金都是一个证券投资实体（“ PIE”）。
                                    有关PIE的税收信息，点击按钮访问ird官方网站查询。
                                </p>
                                <a href="https://www.ird.govt.nz" className="btn btn-primary">
                                    Access to IRD web
                                </a>
                            </div>
                            {/* philosophy image */}
                            <div className="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
                                <img className="img-fluid w-100" src={imageAbout} alt="philosophy-image" />
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
                            <div className="col-lg-5 rounded-left ceo-image" style={ceoStyle}></div>
                            <div className="col-lg-7">
                                {/* ceo content */}
                                <div className="p-5">
                                    <h2 className="section-title section-title-border-half-white text-white">
                                        Carrick Investment Fund
                                        <br />
                                        投资理念
                                    </h2>
                                    <p className="text-white">•长期投资</p>
                                    <p className="text-white">•积极管理基金以获得最佳回报</p>
                                    <p className="text-white">•每次投资前都要进行详尽详尽的研究和分析</p>
                                    <p className="text-white">•关于风险管理的纪律立场</p>
                                    <p className="text-white">•灵活的投资方法</p>
                                    <p className="text-white">•进行适当的投资组合多元化</p>
                                    <a href="/about-us/carrick-Investment-philosophy" className="btn btn-info">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ceo section */}

                {/* skill */}
                <section className="section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="section-title-sm">Best Reason</h5>
                                <h2 className="section-title section-title-border-half">选择我们</h2>
                            </div>
                            {/* accordion */}
                            <div className="col-lg-6">
                                <div id="accordion" className="mb-md-50">
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="0" className="card-header bg-white border p-0">
                                            <p
                                                className="card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                投资思路
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                投资过程的第一阶段涉及投资理念的产生。
                                                我们的投资经理人提出的想法是什么产品在许多可投资的产品中是我们可以投资的，以实现基金的目标之间的产品。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="1" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                研究与分析
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                然后，我们会对要投资的证券进行详细分析。该分析可能包括价格预测，技术分析，定量分析，行业和公司特定的研究与分析。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="2" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                投资组合建设
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                决定要投资的证券后，我们会考虑资产分配和限额要求，将证券添加到投资组合中。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="3" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                投资组合监控
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                持续监控建筑组合的绩效，以使我们能够评估其绩效，并确保投资符合 SIPO
                                                的要求。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="4" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                战术分配和平衡
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                我们积极管理投资。
                                                我们致力于调整和平衡投资组合中的成分的策略，以为我们的客户实现最佳结果并遵守资产分配限制。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid w-100" src={imagels} alt="philosophy-image" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
