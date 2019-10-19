/** @format */

import React, {useState} from "react"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import logo from "../images/logo.svg"
import imageSignUpBg from "../images/background/signup-bg.jpg"

export default function LoginOrJoin() {
    const [loginOrJoin, setLoginOrJoin] = useState("Login")
    const [joinButton, setJoinButton] = useState("Sign Up")
    const [signUpIntro, setSignUpIntro] = useState("Need An Account?")
    const [loginVisibility, setLoginVisibility] = useState({display: "block"})
    const [signUpVisibility, setSignUpVisibility] = useState({display: "none"})
    const clickOnSignUp = () => {
        if (loginOrJoin === "Login") {
            setLoginOrJoin("Join")
            setSignUpIntro("Already Have Account?")
            setJoinButton("Login")
            setLoginVisibility({display: "none"})
            setSignUpVisibility({display: "block"})
        } else {
            setLoginOrJoin("Login")
            setSignUpIntro("Need An Account?")
            setJoinButton("Sign Up")
            setLoginVisibility({display: "block"})
            setSignUpVisibility({display: "none"})
        }
    }

    const handleSignUpButton = () => {
        setLoginVisibility({display: "none"})
        setSignUpVisibility({display: "none"})
        alert("Congrats!")
    }
    const bgImageStyle = {
        backgroundImage: `url(${imageSignUpBg})`,
    }
    return (
        <>
            <Helmet>
                <title>Login or Join | Carrick Asset</title>
                <meta name="description" content="Login or Signup page of Carrick Asset" />
            </Helmet>
            <Layout>
                <section className="d-flex align-items-center justify-content-center py-5 my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="signup">
                                    <div className="row">
                                        <div className="col-md-6 signup-greeting overlay-dark" style={bgImageStyle}>
                                            <img src={logo} alt="logo" style={{height: "10vh"}} />
                                            <h4 className="text-white">欢迎</h4>
                                            <p>
                                                Carrick Just Asset Management Limited
                                                <br />
                                                凯利资产管理有限公司
                                                <br />
                                                期待与您共同发展
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="signup-form">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h4>{loginOrJoin}</h4>
                                                        <p className="float-sm-right">
                                                            {signUpIntro}{" "}
                                                            <a onClick={clickOnSignUp} style={{color: "red"}}>
                                                                {joinButton}
                                                            </a>
                                                        </p>
                                                        <form id="loginForm" name="loginForm" style={loginVisibility}>
                                                            <div className="col-lg-12">
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="email"
                                                                    name="email"
                                                                    placeholder="Email Address"
                                                                />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="pass"
                                                                    name="pass"
                                                                    placeholder="Password"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <button
                                                                    className="btn btn-primary btn-sm"
                                                                    onClick={handleSignUpButton}>
                                                                    {loginOrJoin}
                                                                </button>
                                                            </div>
                                                        </form>
                                                        <form
                                                            id="signUpForm"
                                                            name="signUpForm"
                                                            style={signUpVisibility}>
                                                            <div className="col-lg-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="name"
                                                                    name="name"
                                                                    placeholder="Name"
                                                                />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="email"
                                                                    name="email"
                                                                    placeholder="Email Address"
                                                                />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="pass"
                                                                    name="pass"
                                                                    placeholder="Password"
                                                                />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="re-pass"
                                                                    name="re-pass"
                                                                    placeholder="Confirm Password"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <button
                                                                    className="btn btn-primary btn-sm"
                                                                    onClick={handleSignUpButton}>
                                                                    {loginOrJoin}
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
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
