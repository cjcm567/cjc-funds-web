/** @format */

import React from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import RequestForm from "../components/RequestForm"
import imageAnTai from "../images/funds/carrick-funds-an-tai.jpg"
import imageAnTai1 from "../images/funds/carrick-funds-an-tai-1.jpg"
import imagePhone from "../images/aboutus/phone.svg"
import imageAddress from "../images/aboutus/address.svg"
import imageEmail from "../images/aboutus/email.svg"

import "../styles/fof.css"

export default function FundOfFundsSeries() {
    return (
        <>
            <Helmet>
                <title>Carrick Fund of Funds | Carrick Asset</title>
                <meta
                    name="description"
                    content="FOF（Fund of Funds，基金中的基金）指投资于基金组合的基金。在欧美市场，FOF类基金因其安全可靠、收益稳定，已发展成为数量规模占比均较大的一类成熟的理财产品。"
                />
            </Helmet>
            <Layout>
                <section className="bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bg-white px-4 py-100 sidebar-box-shadow">
                                    <div className="mb-50">
                                        <div className="d-flex py-3 border-bottom">
                                            <ul className="pl-0">
                                                <li className="d-flex mb-10">
                                                    <div className="round-icon-trans mr-3">
                                                        <img src={imagePhone} alt="imagePhone" />
                                                    </div>
                                                    <div className="align-self-center font-primary">
                                                        <a href="tel:+64 9 2803716" className="text-dark">
                                                            NZ +64 9 2803716
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-10">
                                                    <div className="round-icon-trans mr-3">
                                                        <img src={imageEmail} alt="imagePhone" />
                                                    </div>
                                                    <div className="align-self-center font-primary">
                                                        <a href="mailto:info@carrickasset.com" className="text-dark">
                                                            info@carrickasset.com
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-10">
                                                    <div className="round-icon-trans mr-3">
                                                        <img src={imageAddress} alt="imagePhone" />
                                                    </div>
                                                    <div className="align-self-center font-primary">
                                                        <address className="text-dark">
                                                            Level 2, 3 Margot Street,
                                                            <br />
                                                            Epsom, Auckland 1051,
                                                            <br />
                                                            New Zealand
                                                        </address>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <RequestForm />
                                </div>
                            </div>
                            <div className="col-lg-8 py-100">
                                <h3 className="section-title section-title-border-half mb-30">量化投资基金</h3>
                                {/* <h3 className="mb-10"></h3> */}
                                <p className="mb-40">
                                    量化投资基金是指通过数量模型的计算寻找投资机会，以此作为最终投资决策进行资产管理。量化投资在欧美国家的发展已有
                                    30 多年的历史，其投资业绩稳定，市场规模和份额不断扩大，得到了越来越多的投资者认可。
                                </p>
                                <article className="bg-white rounded mb-40 shadow-sm">
                                    <Link to="/funds/carrick-fund-of-funds/an-tai-1" className="card">
                                        <div className="card-img-wrapper">
                                            <img
                                                className="card-img-top rounded-top"
                                                src={imageAnTai1}
                                                alt="image of an tai fund 1"
                                            />
                                        </div>
                                    </Link>
                                    <div>
                                        <div className="d-flex align-items-center border-bottom">
                                            <div className="px-4">
                                                <Link
                                                    to="/funds/carrick-fund-of-funds/an-tai-1"
                                                    className="h4 d-block mb-10 py-4 text-dark">
                                                    海通期货-凯利安泰FOF1号集合资产管理基金（中国）
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <div className="row" style={{fontSize: "0.85rem"}}>
                                                <div className="col-6">
                                                    <ul className="d-inline-block pl-0 text-color">
                                                        <li className="font-secondary mb-10">
                                                            基金管理人: 海通期货股份有限公司（中国）
                                                        </li>
                                                        <li className="font-secondary mb-10">
                                                            基金托管人: 华泰证券股份有限公司（中国）
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-6">
                                                    <ul className="d-inline-block pl-0 text-color">
                                                        <li className="font-secondary mb-10">
                                                            拟募资规模: 1000 万人民币
                                                        </li>
                                                        <li className="font-secondary mb-10">基金类型: 管理型产品</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                to="/funds/carrick-fund-of-funds/an-tai-1"
                                                className="btn btn-xsm btn-primary mt-3">
                                                点击了解详情
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="bg-white rounded mb-40 shadow-sm">
                                    <Link to="/funds/carrick-fund-of-funds/an-tai" className="card">
                                        <div className="card-img-wrapper">
                                            <img
                                                className="card-img-top rounded-top"
                                                src={imageAnTai}
                                                alt="image of an tai fund"
                                            />
                                        </div>
                                    </Link>
                                    <div>
                                        <div className="d-flex align-items-center border-bottom">
                                            <div className="px-4">
                                                <Link
                                                    to="/funds/carrick-fund-of-funds/an-tai"
                                                    className="h4 d-block mb-10 py-4 text-dark">
                                                    凯利安泰量化投资基金（新西兰）
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <div className="row" style={{fontSize: "0.85rem"}}>
                                                <div className="col-6">
                                                    <ul className="d-inline-block pl-0 text-color">
                                                        <li className="font-secondary mb-10">
                                                            基金管理人: 凯利资产管理有限公司（新西兰）
                                                        </li>
                                                        <li className="font-secondary mb-10">
                                                            基金托管人: New Zealand Public Trust Limited
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-6">
                                                    <ul className="d-inline-block pl-0 text-color">
                                                        <li className="font-secondary mb-10">
                                                            投资策略: 以成份股对冲，T+0 策略为主
                                                        </li>
                                                        <li className="font-secondary mb-10">基金类型: 开放式</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                to="/funds/carrick-fund-of-funds/an-tai"
                                                className="btn btn-xsm btn-primary mt-3">
                                                点击了解详情
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
