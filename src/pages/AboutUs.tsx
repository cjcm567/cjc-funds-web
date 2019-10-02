/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import imageBackground from "../images/news/background.jpg"
import newsObject from "../data/newsData.json"

export default function AboutUs() {
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
                                    是一家被基金经理授权提供管理投资计划的基金公司。公司成立于2017年，总部位于新西兰奥克兰。本公司积极管理该计划下的资金，并致力于确保其客户实现其投资目标。
                                    我们在此管理投资计划下提供了一系列资金，以适应不同的投资者需求，并帮助我们的客户实现他们的投资目标。
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
                                <a href="http://www.ird.govt.nz" className="btn btn-primary">
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
                                        Carrick Investment Fund
                                        <br /> 投资理念{" "}
                                    </h2>
                                    <p className="text-white">
                                        •长期投资<br/> 
                                        •积极管理基金以获得最佳回报<br/> 
                                        •每次投资前都要进行详尽详尽的研究和分析<br/>
                                        •关于风险管理的纪律立场<br/> 
                                        •灵活的投资方法 <br/> 
                                        •进行适当的投资组合多元化<br/>
                                    </p>
                                    <img src="images/about/ceo-signature.png" alt="ceo-signature" />
                                    {/* <h5 className="text-white">John Doe</h5>
                                    <h6 className="text-white">CEO</h6> */}
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
                                <h2 className="section-title section-title-border-half">选择我们</h2>
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
                                                <i className="ti-minus text-primary mr-2"></i> 投资思路
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                            投资过程的第一阶段涉及投资理念的产生。 我们的投资经理人提出的想法是什么产品在许多可投资的产品中是我们可以投资的，以实现基金的目标之间的产品。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseTwo">
                                                <i className="ti-plus text-primary mr-2"></i> 研究与分析
                                            </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                            然后，我们会对要投资的证券进行详细分析。该分析可能包括价格预测，技术分析，定量分析，行业和公司特定的研究与分析。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseThree">
                                                <i className="ti-plus text-primary mr-2"></i> 投资组合建设
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse show" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                            决定要投资的证券后，我们会考虑资产分配和限额要求，将证券添加到投资组合中。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseThree">
                                                <i className="ti-plus text-primary mr-2"></i> 投资组合监控
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse show" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                            持续监控建筑组合的绩效，以使我们能够评估其绩效，并确保投资符合SIPO的要求。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4">
                                        <div className="card-header bg-gray border p-0">
                                            <a
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse"
                                                href="#collapseThree">
                                                <i className="ti-plus text-primary mr-2"></i> 战术分配和平衡
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse show" data-parent="#accordion">
                                            <div className="card-body font-secondary text-color pl-0 pb-0">
                                            我们积极管理投资。 我们致力于调整和平衡投资组合中的成分的策略，以为我们的客户实现最佳结果并遵守资产分配限制。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* skill  */}

                {/* <section
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
                </section> */}

                {/* testimonial */}
                {/* <section className="section pb-0">
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
                                    {/* <div className="outline-0">
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
                                    {/* <div className="outline-0">
                                        <i className="testimonial-icon ti-quote-left"></i>
                                        <p className="text-dark">
                                            Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid
                                            sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco
                                            labo ris nisi aliquip excepteur.
                                        </p>
                                        <h4 className="font-weight-normal">Julia Robertson</h4>
                                        <h6 className="font-secondary text-color">Happy Clients</h6>
                                    </div> */}
                                    {/* slider item */}
                                    {/* <div className="outline-0">
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
                </section>  */}
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
