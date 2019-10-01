/** @format */

import React, {Suspense} from "react"
import Layout from "../components/layout"
import "../styles/Home.css"
import Slider from "../Slider/Slider"
import serviceImage01 from "../images/service/service-1.jpg"
import serviceImage02 from "../images/service/service-2.jpg"
import serviceImage03 from "../images/service/service-3.jpg"
import serviceImage04 from "../images/service/service-4.jpg"
import AboutUsImage from "../images/background/about-bg.jpg"
import BlogImage01 from "../images/blog/blog-1.jpg"
import BlogImage02 from "../images/blog/blog-2.jpg"
import {Link} from "react-router-dom"

const IMAGE_DATA = [
    {
        src: require("../images/banner/banner-1.jpg"),
        alt: "banner-1",
    },
    {
        src: require("../images/banner/banner-2.jpg"),
        alt: "banner-2",
    },
    {
        src: require("../images/banner/banner-3.jpg"),
        alt: "banner-3",
    },
]
var sectionStyle = {
    backgroundImage: `url(${AboutUsImage})`,
}

function Home() {
    return (
        <>
            <Layout>
                <div className="App">
                    <Slider
                        items={IMAGE_DATA}
                        speed={1}
                        delay={2.1}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true}
                    />

                    {/* service  */}
                    <div>
                        <section className="section">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <h5 className="section-title-sm">优质服务</h5>
                                        <h2 className="section-title section-title-border">服务内容</h2>
                                    </div>
                                    {/* service item  */}
                                    <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                        <div className="card text-center">
                                            <h4 className="card-title pt-3">量化策略</h4>
                                            <div className="card-img-wrapper">
                                                <img
                                                    className="card-img-top rounded-0"
                                                    src={serviceImage01}
                                                    alt="service-image"></img>
                                            </div>
                                            <div className="card-body p-0">
                                                <br />
                                                <p className="card-text mx-2 mb-0">1. AI技术，数据挖掘发现机会</p>
                                                <p className="card-text mx-2 mb-0">2. 计算机7天24小时监控市场</p>
                                                <p className="card-text mx-2 mb-0">3. 全自动化高效稳定的执行</p>
                                                <Link to="/about-us/" className="btn btn-secondary translateY-25">
                                                    {" "}
                                                    更多
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* service item */}
                                    <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                        <div className="card text-center">
                                            <h4 className="card-title pt-3">控制风险</h4>
                                            <div className="card-img-wrapper">
                                                <img
                                                    className="card-img-top rounded-0"
                                                    src={serviceImage02}
                                                    alt="service-image"></img>
                                            </div>
                                            <div className="card-body p-0">
                                                <br />
                                                <p className="card-text mx-2 mb-0">1. 全面了解FOF可能表现</p>
                                                <p className="card-text mx-2 mb-0">
                                                    2. 实时监控，确保投中表现与过往一致
                                                </p>
                                                <p className="card-text mx-2 mb-0">
                                                    3.多周期多维度跟踪子基金业绩与数据
                                                </p>
                                                <Link to="/about-us/" className="btn btn-secondary translateY-25">
                                                    {" "}
                                                    更多
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* service item  */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card text-center">
                                            <h4 className="card-title pt-3">策略原则</h4>
                                            <div className="card-img-wrapper">
                                                <img
                                                    className="card-img-top rounded-0"
                                                    src={serviceImage03}
                                                    alt="service-image"></img>
                                            </div>
                                            <div className="card-body p-0">
                                                <br />
                                                <p className="card-text mx-2 mb-0">
                                                    1. 根据大类资产轮动规律配置策略及资产
                                                </p>
                                                <p className="card-text mx-2 mb-0">
                                                    2.中性策略为主，趋势策略和指数增强策略为辅
                                                </p>
                                                <p className="card-text mx-2 mb-0">
                                                    3. 多品种、多策略、多周期的量化策略投资配置思路
                                                </p>
                                                <Link to="/about-us/" className="btn btn-secondary translateY-25">
                                                  
                                                    更多
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* About Us */}

                    <section className="about section-sm overlay" style={sectionStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 ml-auto">
                                    <div className="rounded p-sm-5 px-3 py-5 bg-secondary">
                                        <h3 className="section-title section-title-border-half text-white">关于我们</h3>
                                        <p className="text-white mb-40">
                                            Excepteur sint occaecat cupidatat non proident sunt culpa qui officia
                                            deserunt mollit anim id est laborum.
                                        </p>
                                        <div>
                                            <ul className="d-inline-block pl-0">
                                                <li className="font-secondary mb-10 text-white float-sm-left mr-sm-5">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>Business
                                                    Services
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>Audit
                                                    &amp; Assurance
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>IT
                                                    Control Solutions
                                                </li>
                                            </ul>
                                            <ul className="d-inline-block pl-0">
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>Business
                                                    Services
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>Audit
                                                    &amp; Assurance
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>IT
                                                    Control Solutions
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/about-us/" className="btn btn-primary mt-4">
                                            更多
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* skill  */}
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="serviceJ">
                                        <h5 className="section-title-sm">Best Service</h5>
                                        <h2 className="section-title section-title-border-half">核心优势</h2>
                                    </div>
                                    {/* <div className="col-lg-7"> */}
                                    <div className="mb-40">
                                        <p className="text-dark mb-30">对大类资产的配置能力</p>
                                        <p className="text-dark mb-30">对量化投资顾问的筛选及合作能力</p>
                                        <p className="text-dark mb-30">对不同类型量化策略的筛选及配置能力</p>
                                    </div>
                                    {/* </div> */}
                                </div>
                                {/* <div className="col-lg-7 col-md-12">
                                    <img src={serviceImage04}></img>

                                </div> */}

                                <div className="col-lg-6 offset-lg-1">
                                <img src={serviceImage04} width="100%" className="img-fluid mb-60 rounded-top" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* blog  */}
                    <section className="section bg-gray">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <h5 className="section-title-sm">最新新闻</h5>
                                    <h2 className="section-title section-title-border-gray">公司时讯</h2>
                                </div>
                                {/* blog-item */}
                                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                    <div className="card">
                                        <div className="card-img-wrapper overlay-rounded-top">
                                            <img className="card-img-top" src={BlogImage01} alt="blog-thumbnail"></img>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="d-flex">
                                                <div className="py-3 px-4 border-right text-center">
                                                    <h3 className="text-primary mb-0">6</h3>
                                                    <p className="mb-0">Jun</p>
                                                </div>
                                                <div className="p-3">
                                                    <Link
                                                        to="/news/mixed-ownership-model-has-been-win-win"
                                                        className="h4 font-primary text-dark">
                                                        混合所有制模式开创双赢局面
                                                    </Link>
                                                    <p>Carrick Asset Editorial</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* blog-item  */}
                                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                    <div className="card">
                                        <div className="card-img-wrapper overlay-rounded-top">
                                            <img className="card-img-top" src={BlogImage02} alt="blog-thumbnail"></img>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="d-flex">
                                                <div className="py-3 px-4 border-right text-center">
                                                    <h3 className="text-primary mb-0">5</h3>
                                                    <p className="mb-0">Nov</p>
                                                </div>
                                                <div className="p-3">
                                                    <Link
                                                        to="/news/will-interest-rates-support-share-markets-again"
                                                        className="h4 font-primary text-dark">
                                                        疑问：利率会再次对股市起积极作用吗？
                                                    </Link>
                                                    <p>by Admin</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* blog-list */}
                                <div className="col-lg-4 col-12">
                                    <ul className="bg-white border rounded pl-0">
                                        <li className="d-flex border-bottom">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">25</h3>
                                                <p className="mb-2">Apr</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/celebrating-new-zealand-shares"
                                                    className="h4 font-primary text-dark">
                                                    恭喜新西兰股票市场新突破!
                                                </Link>

                                                <p>Carrick Asset Editorial</p>
                                            </div>
                                        </li>
                                        <li className="d-flex border-bottom">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">29</h3>
                                                <p className="mb-2">Oct</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/nz-housing-market-correction-or-crash"
                                                    className="h4 font-primary text-dark">
                                                    新西兰住房市场：回春或崩溃
                                                </Link>
                                                <p>Carrick Asset Editorial</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">20</h3>
                                                <p className="mb-2">Dec</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/end-bull-market-or-opportunity-to-buy"
                                                    className="h4 font-primary text-dark">
                                                    牛市的终结还是买入的机会？
                                                </Link>
                                                <p>Carrick Asset Editorial</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default function HomeComponent() {
    return (
        <Suspense fallback="loading...">
            <Home />
        </Suspense>
    )
}
