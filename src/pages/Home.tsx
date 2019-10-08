/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import serviceImage01 from "../images/service/service-1.jpg"
import serviceImage02 from "../images/service/service-2.jpg"
import serviceImage03 from "../images/service/service-3.jpg"
import serviceImage04 from "../images/service/service-4.jpg"
import AboutUsImage from "../images/background/about-bg.jpg"
import imageCapitalMarkets from "../images/news/what-does-future-hold-our-capital-markets.jpg"
import imageCorporateHealth from "../images/news/insights-our-corporate-health.jpg"
import newsData from "../data/newsData.json"
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
const sectionStyle = {
    backgroundImage: `url(${AboutUsImage})`,
}

function Home() {
    const newsObject = []
    for (let index = 0; index <= 2; index++) {
        newsObject.push(newsData[index])
    }

    const newsRender = newsObject.map(newsObjectItem => (
        <li className="d-flex border-bottom" key={newsObjectItem.props}>
            <div className="py-3 px-4 border-right text-center">
                <h3 className="text-primary mb-0" style={{minWidth: "2.2vw"}}>
                    {newsObjectItem.date.substr(0, 2).trim()}
                </h3>
                <p className="mb-2">{newsObjectItem.date.split(" ").pop()}</p>
            </div>
            <div className="p-3">
                <Link to="/news/celebrating-new-zealand-shares" className="h4 font-primary text-dark">
                    {newsObjectItem.title}
                </Link>
                <p>{newsObjectItem.author}</p>
            </div>
        </li>
    ))

    return (
        <>
            <Layout>
                <div className="App">
                   

                    <div className="mb-50">
                        <Carousel />
                    </div>
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
                                            <div className="card-img-wrapper mb-20">
                                                <img
                                                    className="card-img-top rounded-0"
                                                    height="200px"
                                                    src={serviceImage01}
                                                    alt="service-image"
                                                />
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="text-left pl-3">
                                                    <p className="card-text mx-2 mb-0">1. AI技术，数据挖掘发现机会</p>
                                                    <p className="card-text mx-2 mb-0">2. 计算机7天24小时监控市场</p>
                                                    <p className="card-text mx-2 mb-0">3. 全自动化高效稳定的执行</p>
                                                </div>
                                                <Link to="/about-us/" className="btn btn-secondary translateY-25">
                                                    更多
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* service item */}
                                    <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                        <div className="card text-center">
                                            <h4 className="card-title pt-3">控制风险</h4>
                                            <div className="card-img-wrapper mb-20">
                                                <img
                                                    className="card-img-top rounded-0"
                                                    height="200px"
                                                    src={serviceImage02}
                                                    alt="service-image"
                                                />
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="text-left pl-3">
                                                    <p className="card-text mx-2 mb-0">1. 全面了解FOF可能表现</p>
                                                    <p className="card-text mx-2 mb-0">
                                                        2. 实时监控，确保投中表现与过往一致
                                                    </p>
                                                    <p className="card-text mx-2 mb-0">
                                                        3.多周期多维度跟踪子基金业绩与数据
                                                    </p>
                                                </div>
                                                <Link to="/about-us/" className="btn btn-secondary translateY-25">
                                                    更多
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* service item  */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card text-center">
                                            <h4 className="card-title pt-3">策略原则</h4>
                                            <div className="card-img-wrapper mb-20">
                                                <img
                                                    className="card-img-top rounded-0"
                                                    height="200px"
                                                    src={serviceImage03}
                                                    alt="service-image"
                                                />
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="text-left pl-1">
                                                    <p className="card-text mx-2 mb-0">
                                                        1. 根据大类资产轮动规律配置策略及资产
                                                    </p>
                                                    <p className="card-text mx-2 mb-0">
                                                        2.中性策略为主，趋势策略和指数增强策略为辅
                                                    </p>
                                                    <p className="card-text mx-2 mb-0">
                                                        3. 多品种、多策略、多周期的量化策略投资配置思路
                                                    </p>
                                                </div>
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
                                            Carrick Just Asset Management Limited
                                            是一家被基金经理授权提供管理投资计划的基金公司。
                                        </p>
                                        <div>
                                            <ul className="d-inline-block pl-0">
                                                <li className="font-secondary mb-10 text-white float-sm-left mr-sm-5">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>投资思路
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                                    研究与分析
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                                    投资组合建设
                                                </li>
                                            </ul>
                                            <ul className="d-inline-block pl-0">
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                                    战术分配和平衡
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                                    灵活的投资方法
                                                </li>
                                                <li className="font-secondary mb-10 text-white">
                                                    <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                                    适当的投资组合多元化
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/about-us" className="btn btn-primary mt-4">
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
                    <section className="section bg-gray border-bottom">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <h5 className="section-title-sm">最新新闻</h5>
                                    <Link to="/news">
                                        <h2 className="section-title section-title-border-gray">公司时讯</h2>
                                    </Link>
                                </div>
                                {/* blog-item */}
                                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                    <Link to="/news/insights-our-corporate-health">
                                        <div className="card">
                                            <div className="card-img-wrapper overlay-rounded-top">
                                                <img
                                                    className="card-img-top"
                                                    height="200px"
                                                    src={imageCorporateHealth}
                                                    alt="image of Capital Markets"
                                                />
                                                {/*<img className="card-img-top" src={BlogImage01} alt="blog-thumbnail" />*/}
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="d-flex">
                                                    <div className="py-3 px-4 border-right text-center">
                                                        <h3 className="text-primary mb-0">1</h3>
                                                        <p className="mb-0">Oct</p>
                                                    </div>
                                                    <div className="p-3">
                                                        <a className="h4 font-primary text-dark">
                                                            洞察新西兰的企业健康
                                                        </a>
                                                        <p>Carrick Asset Editorial</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* blog-item  */}
                                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                    <Link to="/news/what-does-future-hold-our-capital-markets">
                                        <div className="card">
                                            <div className="card-img-wrapper overlay-rounded-top">
                                                <img
                                                    className="card-img-top"
                                                    height="200px"
                                                    src={imageCapitalMarkets}
                                                    alt="image of Capital Markets"
                                                />
                                                {/*<img className="card-img-top" src={BlogImage02} alt="blog-thumbnail" />*/}
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="d-flex">
                                                    <div className="py-3 px-4 border-right text-center">
                                                        <h3 className="text-primary mb-0">9</h3>
                                                        <p className="mb-0">Sep</p>
                                                    </div>
                                                    <div className="p-3">
                                                        <a className="h4 font-primary text-dark">
                                                            资本市场未来将如何发展？
                                                        </a>
                                                        <p>Carrick Asset Editorial</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* blog-list */}
                                <div className="col-lg-4 col-12">
                                    <ul className="bg-white border rounded pl-0">{newsRender}</ul>
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
