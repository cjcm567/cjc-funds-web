/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import imageBackground from "../images/news/background.jpg"

export default function NewsSingle(props: any) {
    const newsTitle = props.match.params.props
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const newsObject = require("../data/newsData.json")
    const newsRender = {title: "", content: "", author: "", date: "", imageUri: ""}
    for (let index = 0; index < newsObject.length; index++) {
        if (newsTitle === newsObject[index]["props"]) {
            newsRender["title"] = newsObject[index]["title"]
            newsRender["content"] = newsObject[index]["content"]
            newsRender["date"] = newsObject[index]["date"]
            newsRender["author"] = newsObject[index]["author"]
            newsRender["imageUri"] = "../images/news/" + newsObject[index]["props"].toString() + ".jpg"
        }
    }
    const sectionStyle = {
        backgroundImage: `url(${imageBackground})`,
    }
    return (
        <>
            <Layout>
                <section className="page-title overlay" style={sectionStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white font-weight-bold">{newsRender.title}</h2>
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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 py-100">
                                <div className="border rounded bg-white">
                                    {/* TODO: img */}
                                    {/* <img className="img-fluid w-100 rounded-top" src={users} alt="news image" /> */}
                                    <div className="p-4">
                                        <h3>{newsRender.title}</h3>
                                        <ul className="list-inline d-block pb-4 border-bottom mb-3">
                                            <li className="list-inline-item text-color">
                                                Posted By {newsRender.author}
                                            </li>
                                            <li className="list-inline-item text-color">On {newsRender.date}</li>
                                        </ul>
                                        <div>
                                            {newsRender.content.split("\n").map((i, key) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* Sidebar */}
                                <div className="bg-white px-4 py-100 sidebar-box-shadow">
                                    {/* Widget Newsletter */}
                                    <div className="newsletter">
                                        <h4 className="mb-3">Stay Updated</h4>
                                        <form action="#">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                            <button type="submit" className="btn btn-primary btn-sm">
                                                Subscribe
                                            </button>
                                        </form>
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
