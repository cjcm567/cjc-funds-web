/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageBackground from "../images/news/background.jpg"
import newsObject from "../data/newsData.json"

export default function News() {
    const sectionStyle = {
        backgroundImage: `url(${imageBackground})`,
    }
    const newsCard = newsObject.map(newsObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={newsObjectItem.props}>
            <div className="card">
                <div className="card-img-wrapper overlay-rounded-top">
                    <LazyImage
                        src={require(`../images/news/${newsObjectItem.props}.jpg`)}
                        alt={newsObjectItem.title}
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img className="card-img-top" height="200px" {...imageProps} />}
                    />
                </div>
                <div className="card-body p-0">
                    <div className="d-flex">
                        <div className="py-3 px-4 border-right text-center">
                            <h3 className="text-primary mb-0">{newsObjectItem.date.substr(0, 2).trim()}</h3>
                            <p className="mb-0">{newsObjectItem.date.split(" ").pop()}</p>
                        </div>
                        <div className="p-3">
                            <Link to={`/news/${newsObjectItem.props}`} className="h4 font-primary text-dark">
                                {newsObjectItem.title}
                            </Link>
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
                <section className="page-title overlay" style={sectionStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white font-weight-bold">News</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">News Overview</Link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="row">{newsCard}</div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
