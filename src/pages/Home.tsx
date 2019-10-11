/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import serviceImage04 from "../images/service/service-4.jpg"
import AboutUsImage from "../images/background/about-bg.jpg"
import newsData from "../data/newsData.json"
import homeData from "../data/Home/homeData.json"
import aboutListData from "../data/Home/HomeAboutListData.json"

const sectionStyle = {
    backgroundImage: `url(${AboutUsImage})`,
}

function AboutListRender() {
    const aboutListObj = []
    for (let index = 0; index < aboutListData.length; index++) {
        aboutListObj.push(aboutListData[index])
    }
    return (
        <>
            {aboutListObj.map(aboutListObjItem => (
                <ul className="d-inline-block pl-0" key={aboutListObjItem.p1}>
                    <li className="font-secondary mb-10 text-white float-sm-left mr-sm-5">
                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                        {aboutListObjItem.p1}
                    </li>
                    <li className="font-secondary mb-10 text-white">
                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                        {aboutListObjItem.p2}
                    </li>
                    <li className="font-secondary mb-10 text-white">
                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                        {aboutListObjItem.p3}
                    </li>
                </ul>
            ))}
        </>
    )
}
function Home() {
    const newsObject = []
    for (let index = 0; index <= 2; index++) {
        newsObject.push(newsData[index])
    }

    const newsRender = newsObject.map(newsObjectItem => (
        <li className="d-flex border-bottom" key={newsObjectItem.props}>
            <div className="py-3 px-5 border-right text-center">
                <h3 className="text-primary mb-0" style={{width: 30}}>
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
    const homeObject = []
    for (let index = 0; index <= 2; index++) {
        homeObject.push(homeData[index])
    }

    const HomeRender = homeObject.map(homeObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={homeObjectItem.Dickey}>
            <div className="card text-center mb-4">
                <h4 className="card-title pt-3">{homeObjectItem.title}</h4>
                <div className="card-img-wrapper mb-20">
                    <img
                        className="card-img-top rounded-0"
                        height="200px"
                        src={require(`../images/service/${homeObjectItem.imageUri}.jpg`)}
                        alt="service-image"
                    />
                </div>
                <div className="card-body p-0">
                    <div className="text-left pl-2">
                        <p className="card-text mx-2 mb-0">{homeObjectItem.p1}</p>
                        <p className="card-text mx-2 mb-0">{homeObjectItem.p2}</p>
                        <p className="card-text mx-2 mb-0">{homeObjectItem.p3}</p>
                    </div>
                    <Link to="/about-us/" className="btn btn-secondary translateY-25">
                        更多
                    </Link>
                </div>
            </div>
        </div>
    ))

    const newsExampleObject = []
    for (let index = 0; index < 2; index++) {
        newsExampleObject.push(newsData[index])
    }
    const newsExampleRender = newsExampleObject.map(newsExampleObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={newsExampleObjectItem.props}>
            <Link to={`/news/${newsExampleObjectItem.props}`}>
                <div className="card">
                    <div className="card-img-wrapper overlay-rounded-top">
                        <img
                            className="card-img-top"
                            height="200px"
                            src={require(`../images/news/${newsExampleObjectItem.props}.jpg`)}
                            alt="image of Capital Markets"
                        />
                    </div>
                    <div className="card-body p-0">
                        <div className="d-flex">
                            <div className="py-3 px-4 border-right text-center">
                                <h3 className="text-primary mb-0">{newsExampleObjectItem.date.substr(0, 2).trim()}</h3>
                                <p className="mb-0">{newsExampleObjectItem.date.split(" ").pop()}</p>
                            </div>
                            <div className="p-3">
                                <h4 className="h4 font-primary text-dark">{newsExampleObjectItem.title}</h4>
                                <p>{newsExampleObjectItem.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ))
    return (
        <>
            <Layout>
                <div className="App">
                    <div className="mb-50">
                        <Carousel />
                    </div>
                    <div>
                        <section className="section">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <h5 className="section-title-sm">优质服务</h5>
                                        <h2 className="section-title section-title-border">服务内容</h2>
                                    </div>
                                    {HomeRender}
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
                                            <AboutListRender></AboutListRender>
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
                                    <div className="mb-40">
                                        <p className="text-dark mb-30">对大类资产的配置能力</p>
                                        <p className="text-dark mb-30">对量化投资顾问的筛选及合作能力</p>
                                        <p className="text-dark mb-30">对不同类型量化策略的筛选及配置能力</p>
                                    </div>
                                </div>
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
                                {newsExampleRender}
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
