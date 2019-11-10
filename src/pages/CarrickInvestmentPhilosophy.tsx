/** @format */

import React from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageph1 from "../images/aboutus/ph1.jpg"
import imageph2 from "../images/aboutus/ph2.jpg"
import imageph4 from "../images/aboutus/ph4.jpg"

export default function CarrickInvestmentPhilosophy() {
    return (
        <>
            <Helmet>
                <title>投资理念 | Carrick Asset</title>
                <meta
                    name="description"
                    content="Carrick Just Asset Management Limited 依赖于我们自己的价值评估，而不是市场评估。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Social Responsibility  */}
                            <div className="col-lg-8">
                                <h5 className="section-title-sm">Philosophy</h5>
                                <h2 className="section-title section-title-border-half">投资理念</h2>
                                <p>
                                    通常来说，市场价格会受许多因素影响。 Carrick Just Asset Management
                                    Limited专注于量化投资分析，在对价格分析的基础上，利用安全稳健的量化交易方式，把握市场机会已获得超额收益。通过科学、量化的分析方法进行证券买卖价格的定量分析与风险管理，实现在低风险的投资环境下达到价值最大化的目标。同时，通过完善的量化交易策略，达到尽量消除非系统风险的目的。
                                </p>
                            </div>
                            <div className="col-lg-4 text-right">
                                <img className="img-fluid w-100 text-right" alt="image of risk figure" src={imageph1} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" section-sm bg-gray">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="img-fluid w-100 mb-40" alt="image of risk figure" src={imageph2} />
                            </div>
                            <div className="col-lg-8 ml-auto">
                                <h4 className="section-title section-title-border-half text-dark">
                                    量化为本，立足长远
                                </h4>
                                <p className="text-dark mb-40">
                                    凯利资产基金管理坚持以专业的量化研究为立足点，不断寻找量化交易机会，剖析证券市场上的价格动力和本质，选择合适的时点投资布局，分享量化快速稳健交易带来的利益。我们相信，深入、前瞻、专业的量化研究是超越市场平均回报并获取可持续收益，进而为基金持有人实现价值最大化的基础。同时，公司注重量化调研，通过技术更新，量化策略的提升，紧密跟踪市场趋势，持续动态评估，防范风险。
                                </p>
                                {/* <Link className="btn btn-primary mt-4" to="/about-us">
                                    更多
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" section-sm">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-8 mr-auto">
                                <h4 className="section-title section-title-border-half text-dark">
                                    坚守价值，稳健投资
                                </h4>
                                <p className="text-dark mb-40">
                                    本着为投资者创造长期可持续回报的目标，凯利资产基金管理一直保持稳健的投资风格，始终将风险评估放在首位，通过完善的量化交易策略，达到尽量消除非系统风险的目的。通过积极、主动的量化组合管理，挖掘市场机会，以期获得超额收益。
                                </p>
                                <Link className="btn btn-primary" to="/about-us">
                                    更多
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <img className="img-fluid w-100 mb-40" alt="image of risk figure" src={imageph4} />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
