/** @format */

import React, {Suspense, useState} from "react"
import {Link} from "react-router-dom"
import logoImage from "../images/logo.png"

function HeaderComponent() {
    const [collapseStatus, setCollapseStatus] = useState("collapse navbar-collapse")
    const [dropdownMenuStatus, setDropdownMenuStatus] = useState("dropdown-menu")
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

    const handleDropdownCollapse = () => {
        if (dropdownMenuStatus.includes("show")) {
            setDropdownMenuStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownMenuStatus("dropdown-menu show")
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
                            <ul className="list-inline text-lg-right text-center"/>
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="index.html">
                                <Link to="/">
                                    <img className="navbar-brand img" src={logoImage} alt="logo" />
                                </Link>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={ariaExpanded}
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" onClick={handleNavCollapse}/>
                            </button>

                            <div className={collapseStatus} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                            主页
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        {/* URL for content01 */}
                                        <Link to="/about-us" className="nav-link">
                                            关于我们
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="/funds">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                onClick={handleDropdownCollapse}>
                                                基金
                                            </a>
                                        </Link>

                                        {/* <div className={dropdownMenuStatus}>
                                            <Link to="/funds/" className="dropdown-item">
                                                FUNDS_item01
                                            </Link>
                                            <Link to="/products-and-services/hedge" className="dropdown-item">
                                                FUNDS_item02
                                            </Link>
                                            <Link
                                                to="/products-and-services/introducing-brokers"
                                                className="dropdown-item">
                                                FUNDS_item03
                                            </Link>
                                            <Link
                                                to="/products-and-services/multi-account-manager-solution"
                                                className="dropdown-item">
                                                FUNDS_item04
                                            </Link>
                                        </div> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/news" className="nav-link">
                                            新闻
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/industry" className="nav-link">
                                            行业发展
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/login-or-join"
                                            className="nav-link btn btn-primary btn-sm"
                                            style={{color: "white"}}>
                                            Join Us
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
