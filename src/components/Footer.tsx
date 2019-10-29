/** @format */

// eslint-disable-next-line no-dupe-keys

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import logoImage from "../images/logo.png"
import logo from "../images/logoicon.png"
import "../fonts/IconFont/iconfont.css"

function Footer() {
    const backToTop = () => {
        window.scrollTo(0, 0)
        return null
    }
    const bannerBgStyle = {
        color: "#ffffff",
        background: "linear-gradient(90deg, rgba(0,98,204,1) 0%, rgba(39,141,202,1) 50%)",
        filter:
            "progid:DXImageTransform.Microsoft.gradient(startColorstr='#0062cc',endColorstr='#278dca',GradientType=1)",
        fontSize: "30px",
    }
    const copyrightYear = new Date().getFullYear()
    return (
        <>
            <div className="py-4" style={bannerBgStyle}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 align-self-center">
                            <h3 className="text-white text-center text-md-left">
                                See how we can help.
                                <br />
                                Contact us today
                            </h3>
                        </div>
                        <div className="col-lg-6 text-lg-center text-center align-self-center">
                            <Link to="/contact-us" className="btn-sm btn-light" style={{textTransform: "uppercase"}}>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="py-50 border-bottom" style={{borderColor: "#454547 !important"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="mb-5 mb-md-0 text-center text-md-left">
                                    <Link to="/">
                                        <img src={logoImage} alt="logo" style={{height: "9vh"}} />
                                    </Link>
                                    <p className="mb-30 text-left">
                                        欢迎来到 Carrick Just Asset Management Limited
                                        （凯利资产管理有限公司），我们旨在帮助您实现您的投资目标与财富梦想。凯利资产管理将为全球资产配置、税务规划、资产增值等一系列与财富管理相关的不同需求提供专业的金融服务。
                                    </p>
                                </div>
                            </div>
                            {/* footer links */}
                            <div className="col-lg-3 col-md-4 col-6 text-md-left">
                                <Link to="/funds">
                                    <h4 className="mb-4">基金产品</h4>
                                </Link>
                                <ul className="footer-links text-left">
                                    <li>
                                        <Link to="/funds/carrick-fund-of-funds">Fund of Funds</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/funds/carrick-dividend-yield-fund">
                                            Carrick NZ&AU Dividend Yield Fund
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to="/funds/carrick-nz-au-property-fund">
                                            Carrick Direct Property Fund
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* footer links */}
                            <div className="col-lg-2 col-md-4 col-6 text-md-left">
                                <h4 className="mb-4">快速连接</h4>
                                <ul className="footer-links text-left">
                                    <li>
                                        <Link to="/about-us">关于我们</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">业内新闻</Link>
                                    </li>
                                    <li>
                                        <Link to="/partnership">合作机构</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">联系我们</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* subscribe form */}
                            <div className="col-lg-3 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <h4 className="mb-4 ">欢迎订阅</h4>
                                    <p className="mb-4">
                                        Carrick Just Asset Management Limited
                                        <br />
                                        您最好的选择
                                    </p>
                                    <form name="newsletter" method="post" className="position-relative">
                                        <input type="hidden" name="form-name" value="newsletter" />
                                        <input
                                            type="text"
                                            className="form-control subscribe"
                                            name="subscribe"
                                            id="Subscribe"
                                            placeholder="请输入您的邮箱"
                                        />
                                        <button className="btn-subscribe" type="submit" value="send">
                                            <span
                                                className="iconfont icon-arrow-right"
                                                style={{color: "#666666", fontWeight: 600}}></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5 mb-md-0 text-center text-md-left">
                                    <p className="mb-10 text-left">
                                        The information and use of this website is governed by our terms and conditions.
                                        Carrick Just Asset Management Ltd may change these terms and conditions at any
                                        time without notification. If you proceed to any other page of this website, you
                                        acknowledge that you have read and accepted the terms and conditions.
                                    </p>
                                    <p className="mb-10 text-left">
                                        Offer restricted to “wholesale investors” under clauses 3(2) and 3(3)(a) of
                                        schedule 1 to the
                                        <a href="http://www.legislation.govt.nz/act/public/2013/0069/latest/whole.html">
                                            {" "}
                                            FINANCIAL MARKETS CONDUCT ACT 2013
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <div className="pt-4 pb-3 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5">
                                <p className="text-center text-md-left">
                                    <code>Carrick Just Asset Management Limited</code>
                                    <br />
                                    All Right &copy; {copyrightYear}
                                    Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* back to top */}
                    <button className="back-to-top" onClick={backToTop}>
                        <span className="iconfont icon-arrow-up" style={{color: "#ffffff", fontWeight: 700}}></span>
                    </button>
                </div>
            </footer>
        </>
    )
}

function FooterComponent() {
    return (
        <Suspense fallback="loading...">
            <Footer />
        </Suspense>
    )
}

export default FooterComponent
