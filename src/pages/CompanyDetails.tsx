/** @format */

import React, {useState, Suspense, lazy} from "react"
import {LazyImage} from "react-lazy-images"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import imagePreloader from "../images/preloader.gif"
import imageAbout from "../images/aboutus/aboutus.jpg"
import imageFlow from "../images/aboutus/ls.jpg"
const Preloader = () => {
    return <img src={imagePreloader} alt="loading..." />
}
const PartnersComponent = lazy(() => import("../components/Partners"))
const Partners = () => {
    return (
        <Suspense fallback={Preloader}>
            <PartnersComponent />
        </Suspense>
    )
}
export default function CompanyDetails() {

    return (
        <>
            <Helmet>
                <title>公司简介 | Carrick Asset</title>
                <meta
                    name="description"
                    content="欢迎来到 Carrick Just Asset Management Limited（凯利资产管理有限公司），我们旨在帮助您实现投资目标与财富梦想。凯利资产管理将为全球资产配置、资产增值等一系列与财富管理相关的不同需求提供专业的金融服务。我们希望通过高效稳健的投资方案以及优质的金融服务为您创造可观的回报。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <h5 className="section-title-sm">Know About Carrick Just Asset Management Limited</h5>
                                <h2 className="section-title section-title-border-half">公司简介</h2>
                                <p>
                                    欢迎来到 Carrick Just Asset Management
                                    Limited（凯利资产管理有限公司），我们旨在帮助您实现投资目标与财富梦想。凯利资产管理将为全球资产配置、资产增值等一系列与财富管理相关的不同需求提供专业的金融服务。我们希望通过高效稳健的投资方案以及优质的金融服务为您创造可观的回报。
                                </p>
                                <p>
                                    Carrick Just Asset Management Limited
                                    是一家专注于投资证券、地产、权益类资产以及其衍生品市场的基金管理公司，金融服务牌照编号是
                                    690391。公司总部位于新西兰最繁华的商业金融中心奥克兰，凭借着作为南半球经济金融中心的市场地位和地利优势，本公司旗下凝聚了一批高端复合型投资人才，涵盖金融投资、地产投资以及股权投资等方面精英，人才结构充分体现了多元化的特点，团队成员来自世界上不同国家和地区，宽阔的投资视野充分展现了团队国际化的特征。
                                </p>
                                <p>
                                    公司理念和宗旨是在稳健安全的投资前提下，利用信息优势和前沿科技优势，为投资者提供长期稳定且高于行业基准的投资回报。在此目标导向下，公司积极探索创新型投资模式，并在投资实践中充分利用大数据和人工智能等技术手段，一方面不断打磨和完善传统投资模型，另一方面根据当今市场最新发展趋势的动态演化，及时调整投资策略和投资方向，充分挖掘潜在的组合型投资机会。
                                </p>
                                <p>
                                    公司提供的系列基金产品，可满足不同类型的投资者需求，无论您是稳健型，激进型还是混合型的投资风格都会在我们这里找到适合您的投资方案。公司也会根据特定项目和特定需求，不定期地为特定投资者打造个性化的专属投资基金产品。
                                </p>
                            </div>
                            <div className="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50 text-right">
                                <img src={imageAbout} alt="philosophy-image" className="img-fluid w-75 text-right" />
                            </div>
                        </div>
                    </div>
                </section>
                <Partners />
                {/* <section className="section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="section-title-sm">Best Reason</h5>
                                <h2 className="section-title section-title-border-half">选择我们</h2>
                            </div>
                            <div className="col-lg-6">
                                <div id="accordion" className="mb-md-50">
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="0" className="card-header bg-white border p-0">
                                            <p
                                                className="card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                投资思路
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                投资流程的第一阶段涉及投资理念的产生。
                                                我们的投资经理人提出的想法是什么产品在许多可投资的产品中是我们可以投资的，以实现基金的目标之间的产品。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="1" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                研究与分析
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                然后，我们会对要投资的产品进行详细分析。该分析可能包括价格预测，技术分析，定量分析，行业和公司特定的研究与分析。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="2" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                投资组合建设
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                决定要投资的产品后，我们会考虑资产分配和限额要求，将产品添加到投资组合中。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="3" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                投资组合监控
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                持续监控投资组合的绩效，以使我们能够评估其绩效，并确保投资符合 SIPO
                                                的要求。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 mb-4 bg-gray">
                                        <div id="4" className="card-header bg-white border p-0">
                                            <p
                                                className="collapsed card-link h5 d-block tex-dark mb-0 py-10 px-4"
                                                data-toggle="collapse show">
                                                战术分配和平衡
                                            </p>
                                        </div>
                                        <div className={activeState} data-parent="#accordion">
                                            <div className="card-body font-secondary text-color bg-gray pl-0 pb-0">
                                                我们积极管理投资。
                                                我们致力于调整和平衡投资组合中的成分的策略，以为我们的客户实现最佳结果并遵守资产分配限制。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <LazyImage
                                    src={imageFlow}
                                    alt="philosophy-image"
                                    placeholder={({imageProps, ref}) => (
                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                    )}
                                    actual={({imageProps}) => <img className="img-fluid w-100" {...imageProps} />}
                                />
                            </div>
                        </div>
                    </div>
                </section> */}
            </Layout>
        </>
    )
}
