/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import logo from "../images/logo.svg"

function Footer() {
    const backToTop = () => {
        window.scrollTo(0, 0)
        return null
    }
    const copyrightYear = new Date().getFullYear()
    return (
        <>
            <footer className="bg-gray">
                <div className="py-100 border-bottom" style={{borderColor: "#454547 !important"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="mb-5 mb-md-0 text-center text-md-left">
                                    <Link to="/" className="mb-30">
                                        <img src={logo} alt="logo" style={{height: "10vh"}} />
                                    </Link>
                                    <p className="mb-30">
                                        Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt
                                        labore dolore magna aliqua enim.
                                    </p>
                                    {/* social icon */}
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon-outline" href="#">
                                                <i className="ti-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon-outline" href="#">
                                                <i className="ti-twitter-alt"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon-outline" href="#">
                                                <i className="ti-vimeo-alt"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon-outline" href="#">
                                                <i className="ti-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* footer links */}
                            <div className="col-lg-2 col-md-4 col-6">
                                <h4 className="mb-4">Services</h4>
                                <ul className="footer-links">
                                    <li>
                                        <a href="#">Company History</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Service</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* footer links */}
                            <div className="col-lg-2 col-md-4 col-6">
                                <h4 className="mb-4">Quick Link</h4>
                                <ul className="footer-links">
                                    <li>
                                        <a href="#">Company History</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Service</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* subscribe form */}
                            <div className="col-lg-3 col-md-12 offset-lg-1">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <h4 className="mb-4 ">Subscribe Us</h4>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consect etur adipisicing. elit sed do eiusmod.
                                    </p>
                                    <form action="#" className="position-relative">
                                        <input
                                            type="text"
                                            className="form-control subscribe"
                                            name="subscribe"
                                            id="Subscribe"
                                            placeholder="Enter Your Email"
                                        />
                                        <button className="btn-subscribe" type="submit" value="send">
                                            <span>&#8594;</span>
                                        </button>
                                    </form>
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
                                    <code>Carrick Funds</code> &copy; {copyrightYear} All Right Reserved
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-7">
                                <ul className="list-inline text-center text-md-right">
                                    <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                        <a className="font-secondary " href="#">
                                            Legal
                                        </a>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                        <a className="font-secondary " href="#">
                                            Sitemap
                                        </a>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                        <a className="font-secondary " href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="list-inline-item ml-lg-3 my-lg-0 ml-2 my-2 ml-0">
                                        <a className="font-secondary " href="#">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* back to top */}
                    <button className="back-to-top" onClick={backToTop}>
                        {/* <i className="ti-angle-up"></i> */}
                        <span>&#8963;</span>
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
