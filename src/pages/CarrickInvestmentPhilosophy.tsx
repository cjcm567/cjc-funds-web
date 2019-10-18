/** @format */

import React from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageph1 from "../images/aboutus/ph1.jpg"
import imageph2 from "../images/aboutus/ph2.jpg"

export default function CarrickInvestmentPhilosophy() {
    return (
        <>
            <Helmet>
                <title>投资理念 | Carrick Asset</title>
                <meta
                    name="description"
                    content="Carrick Just Asset Management Limited 依赖于我们自己的价值评估，而不是市场评估。"
                />
            </Helmet>
            <Layout>
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
                                </p>
                                <p>
                                    Carrick Just Asset Management
                                    Limited是投资者而不是投机者。如果我们不能对投资的价值做出明智的判断，我们将等到可以判断投资价值之后再进行投资。我们了解价格与价值之间的差异，并且我们知道市场有时会出现估计错误。
                                </p>
                                <p>Carrick Just Asset Management Limited 依赖于我们自己的价值评估，而不是市场评估。</p>
                            </div>
                            <div className="col-lg-5">
                                <LazyImage
                                    src={imageph1}
                                    alt="image of risk figure"
                                    placeholder={({imageProps, ref}) => (
                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                    )}
                                    actual={({imageProps}) => <img className="img-fluid w-100 mb-40" {...imageProps} />}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* philosophy */}

                <section className=" section-sm bg-gray">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6">
                                <LazyImage
                                    src={imageph2}
                                    alt="image of risk figure"
                                    placeholder={({imageProps, ref}) => (
                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                    )}
                                    actual={({imageProps}) => <img className="img-fluid w-100 mb-40" {...imageProps} />}
                                />
                            </div>
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
            </Layout>
        </>
    )
}
