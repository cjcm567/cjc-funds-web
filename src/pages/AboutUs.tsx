/** @format */

import React, {useState, Suspense, lazy} from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {LazyImage} from "react-lazy-images"
import Layout from "../components/layout"
import Flow from "../components/Flow"
import imagePreloader from "../images/preloader.gif"
import imageCompanyDetails from "../images/aboutus/company-details.jpg"
import imageCompanyTeam from "../images/aboutus/company-team.jpg"
import imagePhilosophy from "../images/aboutus/company-philosophy.jpg"
import imageArrowTop from "../images/funds/arrow-top.png"
import imageArrowBottom from "../images/funds/arrow-bottom.png"
import imageProcess from "../images/funds/process.png"

const Preloader = () => {
    return <img src={imagePreloader} alt="loading..." />
}
const PartnersComponent = lazy(() => import("../components/Partners"))
const Partners = () => {
    return (
        <Suspense fallback={Preloader}>
            <PartnersComponent />
        </Suspense>
    )
}
export default function AboutUs() {
    return (
        <>
            <Helmet>
                <title>公司简介 | Carrick Asset</title>
                <meta name="description" content="我们旨在帮助您实现您的投资目标与财富梦想" />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 mb-5">
                                <div className="card text-center">
                                    <h4 className="card-title pt-3">公司简介</h4>
                                    <div className="card-img-wrapper">
                                        <img
                                            src={imageCompanyDetails}
                                            alt="image of Company Details"
                                            className="card-img-top rounded-0"
                                            height="200px"
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <p className="card-text mx-2 mb-0 pt-5">
                                            我们旨在帮助您实现您的投资目标与财富梦想
                                        </p>
                                        <Link
                                            to="/about-us/company-details"
                                            className="btn btn-secondary translateY-25">
                                            点击了解更多
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mb-5">
                                <div className="card text-center">
                                    <h4 className="card-title pt-3">精英团队</h4>
                                    <div className="card-img-wrapper">
                                        <img
                                            src={imageCompanyTeam}
                                            alt="image of company team"
                                            className="card-img-top rounded-0"
                                            height="200px"
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <p className="card-text mx-2 mb-0 pt-5">经验丰富 理性投资</p>
                                        <Link to="/about-us/team" className="btn btn-secondary translateY-25">
                                            点击了解更多
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-sm-6 mb-5">
                                <div className="card text-center">
                                    <h4 className="card-title pt-3">投资理念</h4>
                                    <div className="card-img-wrapper">
                                        <LazyImage
                                            src={imagePhilosophy}
                                            alt="image of company Philosophy"
                                            placeholder={({imageProps, ref}) => (
                                                <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                            )}
                                            actual={({imageProps}) => (
                                                <img
                                                    className="card-img-top rounded-0"
                                                    height="200px"
                                                    {...imageProps}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <p className="card-text mx-2 mb-0 pt-5">为您创建最佳的投资组合</p>
                                        <Link
                                            to="/about-us/carrick-Investment-philosophy"
                                            className="btn btn-secondary translateY-25">
                                            点击了解更多
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <div className="section position-relative ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h2 className="section-title section-title-border">投资流程</h2>
                            </div>
                            <div className="col-12 text-center">
                                <img src={imageProcess} alt="image of process of investment" width="80%" />
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4 col-sm-6 mb-md-50">
                                    <div
                                        className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative"
                                        style={{minHeight: "40vh"}}>
                                        <div className="process-item-number">1</div>
                                        <h5 className="text-primary">项目策划，寻找符合以下条件的公司</h5>
                                        <div className="row mb-1">
                                            <div className="col-lg-5">
                                                <p>1. 竞争优势</p>
                                                <p>2. 行业顺风</p>
                                                <p>3. 低传动比</p>
                                            </div>
                                            <div className="col-lg-7">
                                                <p>4. 利润和收入增长</p>
                                                <p>5. 大量现金转换</p>
                                                <p>6. 高品质的管理</p>
                                                <p>7. 大量的再投资机会</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-md-50 ">
                                    <div
                                        className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative"
                                        style={{minHeight: "40vh"}}>
                                        <div className="process-item-number">2</div>
                                        <h5 className="text-primary">研究公司具体情况</h5>
                                        <p>1. 预测财务</p>
                                        <p>2. 进行情景分析，现场调研</p>
                                        <p>3. 评估业务质量，清单得分和流动性</p>
                                        <p>4. 将折价/合理估值与同业和历史进行比较</p>
                                        <p>5. 建立价格目标和排名</p>
                                        <p>6. 与竞争对手，供应商，客户和其他利益相关者进行渠道检查</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-md-50">
                                    <div
                                        className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative"
                                        style={{minHeight: "40vh"}}>
                                        <div className="process-item-number">3</div>
                                        <h5 className="text-primary">建立投资组合</h5>
                                        <p>1. 通过确定信念水平和预期收益进行加权</p>
                                        <p>2. 无现金头寸限制</p>
                                        <p>3. 包括对冲货币和市场风险</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-3 col-sm-6 mb-md-50">
                                    <div className="process-item-two py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                        <div className="process-item-number">4</div>
                                        <h5 className="text-primary">项目可能性分析与评估</h5>
                                        <p>1. 审查业务质量以及最近企业公告的含义</p>
                                        <p>2. 计算收益和投资组合权重</p>
                                        <p>3. 维护全面的投资组合仪表板</p>
                                        <p>4. 每两周一次的投资委员会会议和每周的投资团队会议</p>
                                        <p>5. 积极监测行业发展</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 mb-md-50">
                                    <div className="process-item-two py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                        <div className="process-item-number">5</div>
                                        <h5 className="text-primary">投资决策</h5>
                                        <p>1. 通过凯利资本管理的资深投资团队，对投资标的进行最终整合与配置</p>
                                        <p>2. 根据宏观经济形势及市场状况，决定配置方向</p>
                                        <p>3. 结合资料研究及实地调研考察等，对待研究标的进行进一步的筛选</p>
                                        <p>4. 选择合适的时机买入</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 mb-md-50">
                                    <div className="process-item-two py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                        <div className="process-item-number">6</div>
                                        <h5 className="text-primary">签署投资合同与拨付资金</h5>
                                        <p>1. 与投资人签署合同并根据合同内的规定，在相应的时间内进行转款</p>
                                        <p>2. 严格按照合同中的协议条款，在规定的时间内进行资产建立</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 mb-md-50">
                                    <div className="process-item-two py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                        <div className="process-item-number">7</div>
                                        <h5 className="text-primary">投后管理</h5>
                                        <p>1. 投资经理每周对所管理的投资组合进行评估，以决定是否调整以及如何调整</p>
                                        <p>2. 投资决策委员会定期讨论公司所有的投资组合，并提出调整意见</p>
                                        <p>3. 风险控制委员会定期对公司内部合规及投资组合风险进行评估，并提出调整意见</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Partners />
            </Layout>
        </>
    )
}
