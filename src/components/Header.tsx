/** @format */

import React, {Suspense, useState} from "react"
import {Link} from "react-router-dom"
import logoBlackText from "../images/logo-black-text.svg"
import logo from "../images/logo.png"
import imagePhoneWhite from "../images/aboutus/phone-white.svg"

function HeaderComponent() {
    const [collapseStatus, setCollapseStatus] = useState("collapse navbar-collapse")
    const [dropdownMenuStatus, setDropdownMenuStatus] = useState("dropdown-menu")
    const [aboutUsDropdownMenuStatus, setAboutUsDropdownMenuStatus] = useState("dropdown-menu")
    const [ariaExpanded, setAriaExpanded] = useState(false)

    const handleNavCollapse = () => {
        if (collapseStatus.includes("show")) {
            setCollapseStatus("collapse navbar-collapse")
            setAriaExpanded(false)
        } else {
            setCollapseStatus("collapse navbar-collapse show")
            setAriaExpanded(true)
        }
    }

    const handleAboutUsDropdownCollapse = () => {
        if (aboutUsDropdownMenuStatus.includes("show")) {
            setAboutUsDropdownMenuStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setAboutUsDropdownMenuStatus("dropdown-menu show")
            setAriaExpanded(true)
        }
    }

    const handleDropdownCollapse = () => {
        if (dropdownMenuStatus.includes("show")) {
            setDropdownMenuStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownMenuStatus("dropdown-menu show")
            setAriaExpanded(true)
        }
    }
    const bannerBgStyle = {
        color: "#ffffff",
        background: "linear-gradient(90deg, rgba(16,31,40,1) 0%, rgba(0,66,136,1) 40%);",
        filter:
            "progid:DXImageTransform.Microsoft.gradient(startColorstr='#101f28',endColorstr='#004288',GradientType=1);",
    }

    return (
        <>
            <header className="box-shadow">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-inline text-lg-right text-center" />
                        </div>
                    </div>
                </div> */}
                <div className="top-header" style={bannerBgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-inline text-lg-right text-center">
                                    <li className="list-inline-item">
                                        <a href="mailto:info@carrickasset.com">info@carrickasset.com</a>
                                    </li>
                                    <li className="list-inline-item text-uppercase">
                                        <a href="callto:0064092803716">
                                            {/* Call Us today: */}
                                            <img src={imagePhoneWhite} alt="image of a phone" />
                                            NZ
                                            <span className="ml-2 text-white bold">+64 9 2803716</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand" to="/">
                                <img className="navbar-brand img" src={logo} alt="logo" />
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={ariaExpanded}
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" onClick={handleNavCollapse} />
                            </button>
                            <div className={collapseStatus} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                            主页
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            to="/about-us"
                                            className="nav-link dropdown-toggle"
                                            onClick={handleAboutUsDropdownCollapse}>
                                            关于我们
                                        </Link>
                                        <div className={aboutUsDropdownMenuStatus}>
                                            <Link to="/about-us/company-details" className="dropdown-item">
                                                公司简介
                                            </Link>
                                            <Link to="/about-us/team" className="dropdown-item">
                                                精英团队
                                            </Link>
                                            <Link
                                                to="/about-us/carrick-Investment-philosophy"
                                                className="dropdown-item">
                                                投资理念
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/partnership" className="nav-link">
                                            合作机构
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            to="/funds"
                                            className="nav-link dropdown-toggle"
                                            onClick={handleDropdownCollapse}>
                                            旗下产品
                                        </Link>
                                        <div className={dropdownMenuStatus}>
                                            <Link to="/funds/carrick-fund-of-funds" className="dropdown-item">
                                                量化投资基金
                                            </Link>
                                            {/* <Link to="/funds/carrick-dividend-yield-fund" className="dropdown-item">
                                                Carrick NZ&AU Dividend Yield Fund
                                            </Link> */}
                                            <Link to="/funds/carrick-nz-au-property-fund" className="dropdown-item">
                                                Carrick Direct Property Fund
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/news" className="nav-link">
                                            业内新闻
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/invest-class" className="nav-link">
                                            帮助中心
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact-us" className="nav-link">
                                            联系我们
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link
                                            to="/login-or-join"
                                            className="btn btn-primary text-uppercase btn-sm text-white">
                                            加入我们
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

function Header() {
    return (
        <Suspense fallback="loading">
            <HeaderComponent />
        </Suspense>
    )
}

export default Header
