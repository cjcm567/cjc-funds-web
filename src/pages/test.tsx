/** @format */

import React from "react"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import newsObject from "../data/newsData.json"

export default function Test() {
    console.log(newsObject.length)
    const newsCard = newsObject.map(newsObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={newsObjectItem.props}>
            <div className="card">
                <div className="card-img-wrapper overlay-rounded-top"></div>
                <div className="card-body p-0">
                    <div className="d-flex">
                        <div className="py-3 px-4 border-right text-center">
                            <h3 className="text-primary mb-0" style={{width: 40}}>
                                {newsObjectItem.date.substr(0, 2).trim()}
                            </h3>
                            <p className="mb-0">{newsObjectItem.date.split(" ").pop()}</p>
                        </div>
                        <div className="p-3" style={{minHeight: "14vh"}}>
                            <p>by {newsObjectItem.author}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">{newsCard}</div>
                    </div>
                </section>
                <Slider />
            </Layout>
        </>
    )
}
