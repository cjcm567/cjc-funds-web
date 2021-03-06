/** @format */

import React from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {LazyImage} from "react-lazy-images"
import Layout from "../components/layout"
import imagePreloader from "../images/preloader.gif"
import teamObject from "../data/teamData.json"

export default function ManagerTeam() {
    const boardObject = []
    const managerObject = []
    for (let index = 0; index <= 1; index++) {
        boardObject.push(teamObject[index])
    }
    for (let index = 2; index < teamObject.length; index++) {
        managerObject.push(teamObject[index])
    }
    const managerCard = boardObject.map(teamObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={teamObjectItem.props}>
            <Link to={`/about-us/team/${teamObjectItem.props}`}>
                <div className="card text-center">
                    <img
                        src={require(`../images/team/${teamObjectItem.props}.jpg`)}
                        alt={teamObjectItem.name}
                        className="card-img-top"
                    />

                    <div className="card-body card-body-2 pb-0 px-4">
                        <h5 className="card-title">{teamObjectItem.name}</h5>
                        <h6 className="text-color mb-30">{teamObjectItem.title}</h6>
                    </div>
                </div>
            </Link>
        </div>
    ))
    const teamCard = managerObject.map(teamObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={teamObjectItem.props}>
            <Link to={`/about-us/team/${teamObjectItem.props}`}>
                <div className="card text-center">
                    <img
                        src={require(`../images/team/${teamObjectItem.props}.jpg`)}
                        alt={teamObjectItem.name}
                        className="card-img-top"
                    />

                    <div className="card-body card-body-2 pb-0 px-4">
                        <h5 className="card-title">{teamObjectItem.name}</h5>
                        <h6 className="text-color mb-30">{teamObjectItem.title}</h6>
                    </div>
                </div>
            </Link>
        </div>
    ))
    return (
        <>
            <Helmet>
                <title>精英团队 | Carrick Asset</title>
                <meta
                    name="description"
                    content="凯利资本投资研究团队长期并肩从事投资工作，具有丰富的投资经验。团队及个人潜力均得到了的充分发挥。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 mb-50">
                                <h2 className="mb-2">精英团队</h2>
                                <p className="mb-30">
                                    新西兰凯利资产管理的团队成员拥有一流的教育背景及金融领域的从业经验。每一位成员为自己所做的任何工作都设置最高的标准和要求，我们坚信行胜于言，积极并始终如一地为客户提供服务是我们团队的宗旨。
                                </p>
                                <h4 className="mb-2">经验丰富 理性投资</h4>
                                <p className="mb-3">
                                    新西兰凯利资产管理团队长期并肩从事投资工作，具有丰富的投资经验。团队及个人潜力均得到了的充分发挥。
                                </p>
                                <h4 className="mb-2">稳健投资 严控风控</h4>
                                <p className="mb-3">
                                    我们的团队坚信，研究创造价值，对基本面的把握是投资风险控制的基础。在长期投资实践的过程中，凯利资产管理团队形成了一套独具特色、严谨的投研体系，研究面覆盖宏观经济、行业经济及量化投资领域。任何投资决策均是基于深入研究的基础上作出。
                                </p>
                                <h4 className="mb-2">动态追踪 把握先机</h4>
                                <p className="mb-3">
                                    在对宏观、行业及量化投资原理进行深入研究的基础上，凯利资产管理还建立了动态跟踪指标体系，通过把握各种指标的细微变化来发掘投资先机。
                                </p>
                            </div>
                            {managerCard}
                        </div>
                        <div className="row justify-content-center">{teamCard}</div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
