/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import {Helmet} from "react-helmet"
import imagePreloader from "../images/preloader.gif"
import fundsOverview from "../data/fundsData.json"

const fundsCard = fundsOverview.map(fundsItem => (
    <div className="col-lg-4 col-sm-6 mb-5" key={fundsItem.props}>
        <div className="card text-center">
            <h4 className="card-title pt-3">{fundsItem.title}</h4>
            <div className="card-img-wrapper">
                <img
                    src={require(`../images/funds/${fundsItem.props}.jpg`)}
                    alt={fundsItem.props}
                    className="card-img-top rounded-0"
                    height="200px"
                />
            </div>
            <div className="card-body p-0">
                <img
                    className="square-icon translateY-33 rounded rounded"
                    height="12px"
                    src={require(`../images/funds/${fundsItem.props}.svg`)}
                    alt={fundsItem.props}
                />
                {/* <i className="square-icon translateY-33 rounded rounded ti-bar-chart"></i> */}
                <p className="card-text mx-2 mb-0" style={{minHeight: "20vh"}}>
                    {fundsItem.desc}
                </p>
                <Link to={`/funds/${fundsItem.props}`} className="btn btn-secondary translateY-25">
                    点击了解更多
                </Link>
            </div>
        </div>
    </div>
))

export default function Funds() {
    return (
        <>
            <Helmet>
                <title>Funds | Carrick Asset</title>
                <meta name="description" content="Carrick Asset 旗下产品" />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">{fundsCard}</div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
