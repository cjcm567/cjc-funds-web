/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import imageNzShares from "../images/news/celebrating-new-zealand-shares.jpg"
import imageBullMarket from "../images/news/end-bull-market-or-opportunity-to-buy.jpg"
import imageMixedOwnership from "../images/news/mixed-ownership-model-has-been-win-win.jpg"
import imageHousing from "../images/news/nz-housing-market-correction-or-crash.jpg"
import imageCapitalMarkets from "../images/news/what-does-future-hold-our-capital-markets.jpg"
import imageInterestRates from "../images/news/will-interest-rates-support-share-markets-again.jpg"
import imageBackground from "../images/news/background.jpg"

export default function News() {
    const sectionStyle = {
        backgroundImage: `url(${imageBackground})`,
    }
    return (
        <>
            <Layout>
                <section className="page-title overlay" style={sectionStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white font-weight-bold">News</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">News Overview</Link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-img-wrapper overlay-rounded-top">
                                        <img
                                            className="card-img-top"
                                            height="200px"
                                            src={imageCapitalMarkets}
                                            alt="image of Capital Markets"
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="d-flex">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">9</h3>
                                                <p className="mb-0">Sep</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/what-does-future-hold-our-capital-markets"
                                                    className="h4 font-primary text-dark">
                                                    资本市场的未来将如何发展？
                                                </Link>
                                                <p>by Carrick Asset Editorial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-img-wrapper overlay-rounded-top">
                                        <img
                                            className="card-img-top"
                                            height="200px"
                                            src={imageNzShares}
                                            alt="image of Nz Shares"
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="d-flex">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">25</h3>
                                                <p className="mb-0">Apr</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/celebrating-new-zealand-shares"
                                                    className="h4 font-primary text-dark">
                                                    恭喜新西兰股票市场新突破！
                                                </Link>
                                                <p>by Carrick Asset Editorial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-img-wrapper overlay-rounded-top">
                                        <img
                                            className="card-img-top"
                                            height="200px"
                                            src={imageInterestRates}
                                            alt="image of Interest Rates"
                                        />
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
                                                <p>by Carrick Asset Editorial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-img-wrapper overlay-rounded-top">
                                        <img
                                            className="card-img-top"
                                            height="200px"
                                            src={imageMixedOwnership}
                                            alt="image of Mixed Ownership"
                                        />
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
                                                <p>by Carrick Asset Editorial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-img-wrapper overlay-rounded-top">
                                        <img
                                            className="card-img-top"
                                            height="200px"
                                            src={imageHousing}
                                            alt="image of Housing"
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="d-flex">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">29</h3>
                                                <p className="mb-0">Oct</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/nz-housing-market-correction-or-crash"
                                                    className="h4 font-primary text-dark">
                                                    新西兰住房市场：回春或崩溃
                                                </Link>
                                                <p>by Carrick Asset Editorial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-img-wrapper overlay-rounded-top">
                                        <img
                                            className="card-img-top"
                                            height="200px"
                                            src={imageBullMarket}
                                            alt="image of Bull Market"
                                        />
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="d-flex">
                                            <div className="py-3 px-4 border-right text-center">
                                                <h3 className="text-primary mb-0">20</h3>
                                                <p className="mb-0">Dec</p>
                                            </div>
                                            <div className="p-3">
                                                <Link
                                                    to="/news/end-bull-market-or-opportunity-to-buy"
                                                    className="h4 font-primary text-dark">
                                                    牛市的终结还是买入的机会？
                                                </Link>
                                                <p>by Carrick Asset Editorial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
