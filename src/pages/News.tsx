/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"

export default function News() {
    return (
        <>
            <Layout>
                <section
                    className="page-title overlay"
                    style={{backgroundImage: "url(images/background/page-title.jpg);"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white font-weight-bold">News</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>News Overview</li>
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
                                            src="images/blog/blog-1.jpg"
                                            alt="blog-thumbnail"
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
                                            src="images/blog/blog-2.jpg"
                                            alt="blog-thumbnail"
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
                                            src="images/blog/blog-3.jpg"
                                            alt="blog-thumbnail"
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
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
