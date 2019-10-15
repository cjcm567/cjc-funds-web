/** @format */

import React, {lazy, Suspense, useState} from "react"
import {Link, RouteComponentProps, Redirect} from "react-router-dom"
import {LazyImage} from "react-lazy-images"
import Layout from "../components/layout"
import imageProfile from "../images/aboutus/profile.jpg"
import imagePreloader from "../images/preloader.gif"
import teamObject from "../data/teamData.json"

type TParams = {props: string}

export default function Manager(props: RouteComponentProps<TParams>) {
    const [nonValidProps, setNonValidProps] = useState(true)
    const managerProfile = {props: "", name: "", title: "", desc: "", content: ""}
    for (let index = 0; index < teamObject.length; index++) {
        if (props.match.params.props === teamObject[index]["props"]) {
            managerProfile["props"] = teamObject[index]["props"]
            managerProfile["name"] = teamObject[index]["name"]
            managerProfile["title"] = teamObject[index]["title"]
            managerProfile["desc"] = teamObject[index]["desc"]
            managerProfile["content"] = teamObject[index]["content"]
        }
    }
    // if (managerProfile.props.length !== 0) {
    //     setNonValidProps(false)
    // }
    // setNonValidProps(false)
    const managerTitles = managerProfile.content.split("\n").map((i, key) => {
        return (
            <div className="py-3 border-bottom" key={key}>
                <p className="d-inline-block font-primary m-0 px-1">{i}</p>
            </div>
        )
    })
    const managerExperience = managerProfile.content.split("\n").map((i, key) => {
        return (
            <p className="mb-30" key={key}>
                {i}
                <br />
            </p>
        )
    })

    return (
        <>
            {/* {nonValidProps ? <Redirect to="/404" /> : null} */}
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            {/* sidebar */}
                            <aside className="col-lg-4">
                                {/* team member info */}
                                <div className="bg-gray rounded mb-50">
                                    <LazyImage
                                        src={require(`../images/team/${managerProfile.props}.jpg`)}
                                        alt={managerProfile.name}
                                        placeholder={({imageProps, ref}) => (
                                            <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                        )}
                                        actual={({imageProps}) => (
                                            <img className="img-fluid w-100 rounded-top" {...imageProps} />
                                        )}
                                    />
                                    Property FundProperty Fund
                                    <div className="py-2 px-4 pb-3">{managerTitles}</div>
                                </div>
                                {/* Brochure */}
                                <div className="rounded border py-3 px-4 mb-50">
                                    <i
                                        className="d-inline-block mr-1 text-dark ti-files"
                                        style={{fontSize: "20px;"}}></i>
                                    <h4 className="mb-1 d-inline-block">Professional CV</h4>
                                    <a className="font-secondary text-color d-block ml-4">Download pdf</a>
                                </div>
                            </aside>
                            {/* sidebar team member details */}
                            <div className="col-lg-8">
                                <div>
                                    <h2>{managerProfile.name}</h2>
                                    <h3 className="text-primary mb-30">{managerProfile.title}</h3>
                                    <p className="h5 mb-40">{managerProfile.desc}</p>
                                    <h4>简介</h4>
                                    {managerExperience}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
