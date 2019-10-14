/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageBackground from "../images/news/background.jpg"
import teamObject from "../data/teamData.json"

export default function ManagerTeam() {
    const teamCard = teamObject.map(teamObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={teamObjectItem.props}>
            <div className="card text-center">
                <LazyImage
                    src={require(`../images/team/${teamObjectItem.props}.jpg`)}
                    alt={teamObjectItem.name}
                    placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                    actual={({imageProps}) => <img className="card-img-top" {...imageProps} />}
                />
                <div className="card-body card-body-2 pb-0 px-4">
                    <h5 className="card-title">{teamObjectItem.name}</h5>
                    <h6 className="text-color mb-30">{teamObjectItem.title}</h6>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <h2 className="mb-2">精英团队</h2>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                </p>
                            </div>
                            {teamCard}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
