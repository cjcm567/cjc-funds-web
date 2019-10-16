/** @format */

import React, {useState, Suspense, lazy} from "react"
import {Link} from "react-router-dom"
import {LazyImage} from "react-lazy-images"
import Layout from "../components/layout"
import Flow from "../components/Flow"
import imagePreloader from "../images/preloader.gif"
import imageCompanyDetails from "../images/aboutus/company-details.jpg"
import imageCompanyTeam from "../images/aboutus/company-team.jpg"
import imagePhilosophy from "../images/aboutus/company-philosophy.jpg"

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
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-5">
                                <div className="card text-center">
                                    <h4 className="card-title pt-3">公司简介</h4>
                                    <div className="card-img-wrapper">
                                        <LazyImage
                                            src={imageCompanyDetails}
                                            alt="image of Company Details"
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
                                        <p className="card-text mx-2 mb-0 pt-5">
                                            我们旨在帮助您实现您的投资目标与财富梦想
                                        </p>
                                        <Link
                                            to="/about-us/company-details"
                                            className="btn btn-secondary translateY-25">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mb-5">
                                <div className="card text-center">
                                    <h4 className="card-title pt-3">精英团队</h4>
                                    <div className="card-img-wrapper">
                                        <LazyImage
                                            src={imageCompanyTeam}
                                            alt="image of company team"
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
                                        <p className="card-text mx-2 mb-0 pt-5">经验丰富 理性投资</p>
                                        <Link to="/about-us/team" className="btn btn-secondary translateY-25">
                                            Read More
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
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <Flow />
                <Partners />
            </Layout>
        </>
    )
}
