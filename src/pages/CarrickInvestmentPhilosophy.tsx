/** @format */

import React, {useState} from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import imageAbout from "../images/aboutus/aboutus.jpg"
import imageCeo from "../images/aboutus/ceo.jpg"
import imagels from "../images/aboutus/ls.jpg"
const ceoStyle = {
    backgroundImage: `url(${imageCeo})`,
}
export default function CarrickInvestmentPhilosophy() {
    return (
        <>
            <Layout>
                <section className="page-title overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white font-weight-bold">投资理念</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/about-us">关于我们</Link>
                                    </li>
                                    <li>投资理念</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Social Responsibility  */}
                            <div className="col-lg-7">
                                <h5 className="section-title-sm">Philosophy</h5>
                                <h2 className="section-title section-title-border-half">投资理念</h2>
                                <p>
                                    通常来说市场和价格会受许多因素影响。Carrick Just Asset Management
                                    Limited专注于可以预测和理解的因素，例如特定公司的质量和竞争优势，而不是诸如汇率和中央银行政策之类的不可预测的因素。
                                    Just Asset Management Limited是投
                                </p>
                                <p>
                                    Carrick Just Asset Management
                                    Limited是投资者而不是投机者。如果我们不能对投资的价值做出明智的判断，我们将等到可以判断投资价值之后再进行投资。我们了解价格与价值之间的差异，并且我们知道市场有时会出现估计错误。
                                </p>
                                <p>Carrick Just Asset Management Limited依赖于我们自己的价值评估，而不是市场评估。</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* philosophy */}

                <section className=" section-sm bg-gray">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 ml-auto">
                                <h4 className="section-title section-title-border-half text-dark">
                                    Carrick Just Asset Management Limited
                                </h4>
                                <p className="text-dark mb-40">
                                    相信尝试我们评估过的赌注，而不是冒险尝试一些可能失败的“确定赌注”
                                    来危害客户的资金利益。在我们的每个投资组合中，我们在业务，部门和地区之间进行多元化投资，因此，没有一项单独投资会对我们的整体回报产生不当影响。
                                </p>
                                <p className="text-dark mb-40">
                                    Carrick Just Asset Management
                                    Limited是长期投资者，因此当我们做出我们的投资决定，我们希望可以保持长期的投资年限。我们希望我们的客户知道可以在期望Carrick
                                    Just Asset Management
                                    Limited什么。我们在网站上总结了广泛的投资方法，并鼓励您访问。我们还会在相关资讯中为您提供最新信息，方便您做出投资选择
                                </p>
                                <Link className="btn btn-primary mt-4" to="/about-us">
                                    更多
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ceo section  */}
                <section className="section">
                    <h3 className="section-title section-title-border-half">我们的优势</h3>
                    <div className="container bg-gray">
                        <div className="row rounded ">
                            <div className="col-lg-6">
                                <h5>基本理念</h5>
                                <p>
                                    Carrick Just Asset Management
                                    Limited都是依靠自己的第一手研究，相信自己的直觉，并从多年的经验中汲取教训，以便为您创建最佳的投资组合。
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <h5>透明度</h5>
                                <p>
                                    Carrick Just Asset Management Limited做的每一笔投资都秉持着负责，透明和坦率的原则。
                                    您将 永远知道您的资金投资于何处以及其表现如何。
                                    我们相信交流与投资同等重要。我们为我们所做的事感到自豪，并希望与您分享。丰富经验
                                </p>
                            </div>
                            <div className="row rounded">
                                <div className="col-lg-6">
                                    <h5>丰富经验</h5>
                                    <p>
                                        Carrick Just Asset Management
                                        Limited拥有新西兰最有经验的投资团队之一来管理您的资金。
                                        他们从各种投资条件中汲取了丰富的经验教训。
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <h5>服务准则</h5>
                                    <p>
                                        Carrick Just Asset Management
                                        Limited能够为我们的每一位客户提供体贴入微的投资咨询服务，
                                        无论您是第一次投资还是经验丰富的投资者，我们都可以为您提供帮助。我们拥有深厚的服务文化和以客户为中心的企业文化。
                                        我们的团队致力于增加客户的财富，使他们过上更好的生活。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /ceo section  */}

                <section className="cta overlay-primary py-50 text-center text-lg-left">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <h3 className="text-white">Biztrox give the smart solution for your business</h3>
                            </div>
                            <div className="col-lg-6 text-lg-right align-self-center"></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
