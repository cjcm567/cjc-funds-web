/** @format */

import React, {lazy, Suspense} from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import Partners from "../components/Partners"
import ContactUs from "../components/ContactUs"
import newsData from "../data/newsData.json"
import homeData from "../data/fundsData.json"
import "../fonts/IconFont/iconfont.css"

export default function Home() {
    const newsObject = []
    for (let index = 0; index <= 2; index++) {
        newsObject.push(newsData[index])
    }

    const newsRender = newsObject.map(newsObjectItem => (
        <li className="d-flex border-bottom" key={newsObjectItem.props}>
            <div className="py-3 px-4 border-right text-center">
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
    const HomeRender = homeData.map(homeObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={homeObjectItem.props}>
            <div className="card text-center mb-4">
                <h4 className="card-title pt-3">{homeObjectItem.title}</h4>
                <div className="card-img-wrapper mb-20">
                    <img
                        className="card-img-top rounded-0"
                        height="200px"
                        src={require(`../images/funds/${homeObjectItem.props}.jpg`)}
                        alt="service-image"
                    />
                </div>
                <div className="card-body p-0">
                    <div className="text-left pl-2" style={{minHeight: "20vh"}}>
                        <p className="card-text mx-2 mb-0">{homeObjectItem.desc}</p>
                    </div>
                    <Link to={`/funds/${homeObjectItem.props}`} className="btn btn-secondary translateY-25">
                        Read More
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
                                        <h2 className="section-title section-title-border">基金产品</h2>
                                    </div>
                                    {HomeRender}
                                </div>
                            </div>
                        </section>
                    </div>
                    <Partners />
                    <section className="section bg-gray border-bottom">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <h5 className="section-title-sm">最新新闻</h5>
                                    <Link to="/news">
                                        <h2 className="section-title section-title-border-gray">行业时讯</h2>
                                    </Link>
                                </div>
                                {newsExampleRender}
                                <div className="col-lg-4 col-12">
                                    <ul className="bg-white border rounded pl-0">{newsRender}</ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ContactUs />
                </div>
            </Layout>
        </>
    )
}
