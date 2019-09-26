/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <>
            {/* navigation  */}
            <header>
                {/* top header  */}
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-inline text-lg-right text-center">
                                    <li className="list-inline-item">
                                        <a href="mailto:info@companyname.com">info@companyname.com</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="callto:1234565523">
                                            Call Us Now:
                                            <span className="ml-2"> 123 456 5523</span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" id="searchOpen">
                                            <i className="ti-search"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* nav bar  */}
                <div className="navigation">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to="/" className="navbar-brand">
                                <img src="images/logo.png" alt="logo"></img>
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown active">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            Home
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="index.html">
                                                Home Page 1
                                            </a>
                                            <a className="dropdown-item" href="homepage-2.html">
                                                Home Page 2
                                            </a>
                                            <a className="dropdown-item" href="homepage-3.html">
                                                Home Page 3
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            About Us
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="about.html">
                                                About page
                                            </a>
                                            <a className="dropdown-item" href="about-2.html">
                                                About page-2
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            Service
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="service.html">
                                                Service page
                                            </a>
                                            <a className="dropdown-item" href="service-2.html">
                                                Service page-2
                                            </a>
                                            <a className="dropdown-item" href="service-single.html">
                                                Service Single
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            Pages
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="team.html">
                                                Team Page
                                            </a>
                                            <a className="dropdown-item" href="pricing.html">
                                                Pricing Page
                                            </a>
                                            <a className="dropdown-item" href="project.html">
                                                project Page
                                            </a>
                                            <a className="dropdown-item" href="faqs.html">
                                                FAQs Page
                                            </a>
                                            <a className="dropdown-item" href="project-single.html">
                                                Project Single
                                            </a>
                                            <a className="dropdown-item" href="team-single.html">
                                                Team Single
                                            </a>
                                            <a className="dropdown-item" href="404.html">
                                                404 Page
                                            </a>
                                            <a className="dropdown-item" href="signup.html">
                                                Sign Up Page
                                            </a>
                                            <a className="dropdown-item" href="login.html">
                                                Login Page
                                            </a>
                                            <a className="dropdown-item" href="comming-soon.html">
                                                Comming Soon Page
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            Blog
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="blog.html">
                                                Blog Page
                                            </a>
                                            <a className="dropdown-item" href="blog-sidebar.html">
                                                Blog with Sidebar
                                            </a>
                                            <a className="dropdown-item" href="blog-single.html">
                                                Blog Single
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            Elements
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="components/buttons.html">
                                                Buttons
                                            </a>
                                            <a className="dropdown-item" href="components/icons.html">
                                                Icons
                                            </a>
                                            <a className="dropdown-item" href="components/headings.html">
                                                Headings
                                            </a>
                                            <a className="dropdown-item" href="components/accordions.html">
                                                Accordions
                                            </a>
                                            <a className="dropdown-item" href="components/blog-contents.html">
                                                Blog Contents
                                            </a>
                                            <a className="dropdown-item" href="components/service-contents.html">
                                                Service Contents
                                            </a>
                                            <a className="dropdown-item" href="components/team-contents.html">
                                                Team Contents
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact-us" className="nav-link">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn btn-primary btn-sm" href="#">
                                            get a quote
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Search Form  */}
            <div className="search-form">
                <a href="#" className="close" id="searchClose">
                    <i className="ti-close"></i>
                </a>
                <div className="container">
                    <form action="#" className="row">
                        <div className="col-lg-10 mx-auto">
                            <h3>Search Here</h3>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="search"
                                    id="search"
                                    placeholder="Enter Keywords..."
                                    required
                                />
                                <button>
                                    <i className="ti-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* /navigation  */}
        </>
    )
}

function HeaderComponent() {
    return (
        <Suspense fallback="loading...">
            <Header />
        </Suspense>
    )
}

export default HeaderComponent
