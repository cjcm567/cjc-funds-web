/** @format */

import React, {Suspense, useState} from "react"
import {Link} from "react-router-dom"
import logoImage from "../images/logo.png"

function HeaderComponent() {
    const [collapseStatus, setCollapseStatus] = useState("collapse navbar-collapse")
    const [aboutUSCollapseStatus, setAboutUsCollapseStatus] = useState("collapse asnavbar-collapse")
    const [dropdownMenuStatus, setDropdownMenuStatus] = useState("dropdown-menu")
    const [aboutUsDropdownMenuStatus, setAboutUsDropdownMenuStatus] = useState("dropdown-menu")
    const [loginChooserStatus, setLoginChooserStatus] = useState("login-chooser")
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

    const asHandleNavCollapse = () => {
        if (aboutUSCollapseStatus.includes("show")) {
            setAboutUsCollapseStatus("collapse asnavbar-collapse")
            setAriaExpanded(false)
        } else {
            setAboutUsCollapseStatus("collapse asnavbar-collapse show")
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

    const asHandleDropdownCollapse = () => {
        if (dropdownMenuStatus.includes("show")) {
            setAboutUsDropdownMenuStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setAboutUsDropdownMenuStatus("dropdown-menu show")
            setAriaExpanded(true)
        }
    }

    const handleLoginChooser = () => {
        if (loginChooserStatus.includes("open")) {
            setLoginChooserStatus("login-chooser")
        } else {
            setLoginChooserStatus("login-chooser open")
        }
    }

    return (
        <>
            <header className="box-shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-inline text-lg-right text-center" />
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand" to="/">
                                <img className="navbar-brand img" src={logoImage} alt="logo" />
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
                                            onClick={asHandleDropdownCollapse}>
                                            关于我们
                                        </Link>
                                        <div className={aboutUsDropdownMenuStatus}>
                                            <Link to="/about-us/carrick-responsibility" className="dropdown-item">
                                                我们的责任
                                            </Link>
                                            <Link
                                                to="/about-us/carrick-Investment-philosophy"
                                                className="dropdown-item">
                                                我们的投资理念
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            to="/funds"
                                            className="nav-link dropdown-toggle"
                                            onClick={handleDropdownCollapse}>
                                            基金产品
                                        </Link>
                                        <div className={dropdownMenuStatus}>
                                            <Link to="/funds/fund-of-funds" className="dropdown-item">
                                                Fund of Funds
                                            </Link>
                                            <Link to="/funds/carrick-dividend-yield-fund" className="dropdown-item">
                                                Carrick Dividend Yield Fund
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/news" className="nav-link">
                                            业内新闻
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/industry" className="nav-link">
                                            行业发展
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login-or-join" className="btn btn-primary btn-sm text-white">
                                            Invest now
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
