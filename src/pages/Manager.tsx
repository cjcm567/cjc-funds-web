/** @format */

import React from "react"
import {Helmet} from "react-helmet"
import teamObject from "../data/teamData.json"
import {RouteComponentProps, Redirect} from "react-router-dom"
import Layout from "../components/layout"

type TParams = {props: string}

function Page(props: string) {
    let validProps = true
    const managerProfile = {props: "", name: "", title: "", desc: "", content: ""}
    teamObject.forEach(teamObjectItem => {
        if (props === teamObjectItem["props"]) {
            validProps = false
            console.log(validProps)
            managerProfile["props"] = teamObjectItem["props"]
            managerProfile["name"] = teamObjectItem["name"]
            managerProfile["title"] = teamObjectItem["title"]
            managerProfile["desc"] = teamObjectItem["desc"]
            managerProfile["content"] = teamObjectItem["content"]
        }
    })
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

    if (!validProps) {
        return (
            <>
                <Helmet>
                    <title>{managerProfile.name} | 精英团队 | Carrick Asset</title>
                    <meta name="description" content="Carrick Asset 精英团队的个人档案" />
                </Helmet>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <aside className="col-lg-4">
                                <div className="bg-gray rounded mb-50">
                                    <img
                                        className="img-fluid w-100 rounded-top"
                                        src={require(`../images/team/${managerProfile.props}.jpg`)}
                                        alt={managerProfile.name}
                                    />
                                    <div className="py-2 px-4 pb-3">{managerTitles}</div>
                                </div>

                                <div className="rounded border py-3 px-4 mb-50">
                                    <i
                                        className="d-inline-block mr-1 text-dark ti-files"
                                        style={{fontSize: "20px;"}}></i>
                                    <h4 className="mb-1 d-inline-block">Professional CV</h4>
                                    <a className="font-secondary text-color d-block ml-4">Download pdf</a>
                                </div>
                            </aside>

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
            </>
        )
    } else {
        return <Redirect to="/404" />
    }
}

export default function Manager(props: RouteComponentProps<TParams>) {
    const pathProps = props.match.params.props
    return (
        <>
            <Layout>{Page(pathProps)}</Layout>
        </>
    )
}
