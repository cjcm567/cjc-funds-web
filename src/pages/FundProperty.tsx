/** @format */

import React, {useState} from "react"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import {Helmet} from "react-helmet"
import RequestForm from "../components/RequestForm"
import imagePreloader from "../images/preloader.gif"
import imageProperty from "../images/funds/carrick-nz-au-property-fund.jpg"
import imageRiskFigure from "../images/funds/risk-figure-dividend.jpg"
import imageIncrease from "../images/funds/carrick-increase.jpg"
import imageWallet from "../images/funds/carrick-building.jpg"
import imageMall from "../images/funds/carrick-mall.jpg"

function FundsComponent(isShowId: number) {
    if (isShowId == 0) {
        return (
            <>
                <div>
                    <h4 className="mb-30">概述</h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <img src={imageWallet} alt="image of risk figure" className="img-fluid w-100 mb-20" />
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                随着新西兰央行利率的进一步下调，纽澳一线城市的商业地产迎来了价格和租金的上升周期，并尤其受到投资者的青睐。截至今年，纽澳的商业地产投资基金的资产回报率已经达到了金融资产回报率的最高水平。
                            </li>
                            <li className="font-secondary mb-30">
                                凯利纽澳地产基金为投资者提供全方位地产投资服务，包括向合格投资者提供优质的商业地产投资标的、寻求服务周到尽职尽责的物业管理公司、定期发送投资者利益报告和资产转售增值服务等。
                            </li>
                            <li className="font-secondary  font-weight-bolder">
                                如果你想要投资纽澳商业房产但预算受限；
                                <br />
                                <br /> 如果你对海外买家限购有顾虑；
                                <br />
                                <br />
                                凯利纽澳地产基金将会是一个绝佳的选择!
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId == 1) {
        return (
            <>
                <div>
                    <h4 className="mb-30">产品战略</h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <img src={imageMall} alt="image of risk figure" className="img-fluid w-100 mb-20" />
                            <li className="font-secondary mb-10">
                                凯利纽澳地产基金旨在通过整合纽澳商业房地产资源，选择优质的纽澳商业地产产业，最大程度地提高客户资产的价值和回报。
                            </li>
                            <li className="font-secondary mb-10">
                                通过基金组合投资的方式，大大降低了投资门槛，让中小投资人也可以成为优质商业地产的所有者,
                                凯利地产基金投资标的将主要集中于中心地段的商业综合体，还可能是酒店、办公楼、购物中心、仓储地产、养老地产等稳定、优质的多元化商业地产。
                            </li>
                            <li className="font-secondary mb-10">
                                这种投资方式使得普通投资者通过专业化的运作方式可以安全稳健地取得纽澳地产在长期上升周期中所带来的投资红利。
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    // if (isShowId === 2) {
    //     return (
    //         <>
    //             <div>
    //                 <h4 className="mb-30">目标投资组合</h4>
    //                 <div className="row">
    //                     <div className="col-lg-6 bg-gray p-5 rounded mb-60">
    //                         <h4 className="mb-10">投资组合</h4>
    //                         <p className="mb-20">高租金回报率的商业地产(不受海外买家的竞价限制约束)</p>
    //                         <p className="mb-20">优质租户和长期稳定的租约</p>
    //                         <p className="mb-20">是一款收益稳中有升的优质基金产品</p>
    //                         <h4 className="mb-10">投资范围</h4>
    //                         <p className="mb-10">
    //                             在物业管理领域，凯利资产将自身经验、个性化服务和创新发展理念完美结合，旨在最大程度地提高客户资产的价值和回报。我们的物业管理服务包括：
    //                         </p>
    //                         <p className="mb-20">1. 全面的资产、财务、设施和项目管理</p>
    //                         <p className="mb-20">2. 专业的零售物业咨询和租赁</p>
    //                         <p className="mb-20">3. 分红收益结算和转售标的资产</p>
    //                         <p className="mb-20">4. 零售管理和开发服务</p>
    //                     </div>
    //                     <div className="col-lg-6 bg-gray p-5 rounded mb-60">
    //                         <h4 className="mb-10">最低建议投资期限</h4>
    //                         <p className="mb-20">5 年或由于标的资产变卖而少于 5 年从而获得更高年化收益率</p>
    //                         <h4 className="mb-10">最低投资额</h4>
    //                         <p className="mb-20">75 万纽币</p>
    //                         <h4 className="mb-10">预期收益</h4>
    //                         <p className="mb-20">预期固定租金年化收益为 6%</p>
    //                         <p className="mb-20">考虑到未来租金增长和出售该地产所获额外增值收益</p>
    //                         <p className="mb-20">预期年化总收益将高达 15% 以上</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }
    if (isShowId === 2) {
        return (
            <>
                <div>
                    <h4 className="mb-30">预期投资回报</h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <img src={imageIncrease} alt="image of bonus" className="img-fluid w-100 mb-20" />
                            <li className="font-secondary mb-10">
                                Carrick Direct Property Fund 每年支付红利，在投资期最初 5
                                年内，每年最低保底分红高达6%，再结合所持投资标的资本增值所带来的收益，预期年化收益率将达
                                16% 以上。
                            </li>
                            <li className="font-secondary mb-10">
                                新西兰凯利资产管理有限公司是 Carrick Direct Property Fund
                                发行人，如果您对本基金投资有兴趣，请与我们销售经理联系以获取基金产品投资的详细信息。
                            </li>
                            <li className="font-secondary mb-10">
                                新西兰凯利资产管理有限公司自创建以来，其遵从的核心原则一直是保持高度透明、合规稳健、极其关注投资回报率。正因于此，越来越多的投资者已与我们建立了长期的合作关系。
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    // if (isShowId === 4) {
    //     return (
    //         <>
    //             <div>
    //                 <h4 className="mb-30">投资影响因素</h4>
    //                 <div className="row">
    //                     <div className="col-lg-6 col-md-12 bg-gray p-5 rounded mb-60">
    //                         <h4 className="mb-20">环境因素</h4>
    //                         <p className="font-secondary mb-10">
    //                             凯利资产管理将环境因素纳入我们的决策中，以便了解我们投资标的的所有相关长期风险。以下环境因素大致代表了所需要考虑的内容：
    //                         </p>
    //                         <h5 className="mb-10 text-">地理环境</h5>
    //                         <p className="font-secondary mb-10">周围商业评估，地理位置以及交通的便利性排名</p>
    //                         <h5 className="mb-10">气候变化</h5>
    //                         <p className="font-secondary mb-10">例如气候变化给建筑带来的不利因素分析</p>
    //                         <h5 className="mb-10">自然资本</h5>
    //                         <p className="font-secondary mb-10">土地的多样性以及土地利用率，使用权，开发权等</p>
    //                         <h5 className="mb-10">建筑材料</h5>
    //                         <p className="font-secondary mb-10">例如建筑材料的质量及年限，维护成本，以及是否环保等</p>
    //                         <h5 className="mb-10">环境机会</h5>
    //                         <p className="font-secondary mb-10">例如建筑周边商业开发潜力等</p>
    //                     </div>
    //                     <div className="col-lg-6 col-md-12 bg-gray p-5 rounded mb-60">
    //                         <h4 className="mb-20">社会因素</h4>
    //                         <h5 className="mb-10">人力资源</h5>
    //                         <p className="font-secondary mb-10">
    //                             例如商业地产周围的人口统计，包括：收入能力，职业，种族比例等
    //                         </p>
    //                         <h5 className="mb-10">社区关系</h5>
    //                         <p className="font-secondary mb-10">例如周围社区的商业环境以及地标性建筑等</p>
    //                         <h5 className="mb-10">产品责任</h5>
    //                         <p className="font-secondary mb-10">例如该建筑的防火安全，通风标准，抗地震级别等</p>
    //                         <h4 className="mb-20">政府因素</h4>
    //                         <h5 className="mb-10">政策走向</h5>
    //                         <p className="font-secondary mb-10">例如最新地产政策风向，政府土地规划，批款政策等</p>
    //                         <h5 className="mb-10">公司治理</h5>
    //                         <p className="font-secondary mb-10">例如董事会，薪酬，所有权，会计</p>
    //                         <h5 className="mb-10">企业行为</h5>
    //                         <p className="font-secondary mb-10">例如商业道德，反竞争做法，腐败和不稳定，税收透明</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }
    if (isShowId === 3) {
        return (
            <>
                <div>
                    <h4 className="mb-30">其他相关信息</h4>
                    <p className="font-secondary mb-10">
                        新西兰凯利资产管理有限公司是 Carrick Direct Property
                        Fund发行人，如果您对本基金投资有兴趣，请与我们销售经理联系以获取基金产品投资的详细信息。
                    </p>
                    <p className="font-secondary mb-10">
                        所有投资者在投资前请先仔细阅读产品说明，并请填写签署基金认购申请表，同时需满足新西兰反洗钱（AML）合规要求。
                    </p>
                </div>
            </>
        )
    }
}

export default function FundProperty() {
    const fundsDict = [
        {id: 0, content: "凯利纽澳地产基金简介", style: "active border-bottom"},
        {id: 1, content: "产品战略", style: "border-bottom"},
        // {id: 2, content: "目标投资组合", style: "border-bottom"},
        {id: 2, content: "预期投资回报", style: "border-bottom"},
        // {id: 4, content: "投资影响因素", style: "border-bottom"},
        {id: 3, content: "其他相关信息", style: "border-bottom"},
    ]
    const [defaultActive, setDefaultActive] = useState(0)
    const [activePart, setActivePart] = useState(fundsDict)
    const handleClickOnSidebar = (id: number) => {
        if (id !== 0) {
            fundsDict[id].style = "active border-bottom"
            fundsDict[0].style = "border-bottom"
        } else {
            fundsDict[0].style = "active border-bottom"
        }
        setDefaultActive(id)
        setActivePart(fundsDict)
    }
    const listSidebar = fundsDict.map(fundsDictItem => (
        <li key={fundsDictItem.id} className={activePart[fundsDictItem.id].style}>
            <a className="d-block font-primary text-dark p-4" onClick={() => handleClickOnSidebar(fundsDictItem.id)}>
                {fundsDictItem.content}
            </a>
        </li>
    ))
    return (
        <>
            <Helmet>
                <title>Carrick Direct Property Fund | Carrick Asset</title>
                <meta
                    name="description"
                    content="凯利纽澳地产基金提供全方位投资服务，包括向合格投资者集资，选择黄金地段商业地产作为投资标的，寻求服务周到尽责的物业管理公司和长期稳定的租赁客源，以及及时发送给投资者利益报告和未来资产转售服务。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h3 className="mb-10 px-3">Carrick Direct Property Fund</h3>
                            <div className="mb-md-50 px-3">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="bg-gray p-5 rounded mb-60">
                                            {/* <h4 className="text-dark font-primary mb-30">产品描述</h4> */}
                                            <div>
                                                <ul className="d-inline-block pl-0">
                                                    <li className="font-secondary mb-10">
                                                        Carrick Just Asset Management
                                                        Limited（凯利资产管理有限公司）致力于通过其自身专业投资人员多年的新西兰和澳大利亚房地产投资经验，利用敏锐的洞察力精心挑选商业地产优质投资标的并构建房地产多元化组合投资方式，为投资者提供最佳收益回报，力求使投资者财富在安全稳健的前提下持续保值增值。
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <img
                                            src={imageProperty}
                                            alt="image of Core Competence"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* sidebar */}
                            <aside className="col-lg-4 order-lg-1 order-2">
                                {/* service menu */}
                                <ul className="service-menu pl-0 border rounded mb-50">{listSidebar}</ul>
                                {/* Brochure */}
                                {/* <div className="rounded border py-3 px-4 mb-50">
                                    <i
                                        className="d-inline-block mr-1 text-dark ti-files"
                                        style={{fontSize: "20px"}}></i>
                                    <h4 className="mb-1 d-inline-block">Service Brochure</h4>
                                    <a className="font-secondary text-color d-block ml-4" href="#">
                                        Download pdf
                                    </a>
                                </div> */}
                                {/* Consultation */}
                                <RequestForm />
                            </aside>
                            <div className="col-lg-8 order-lg-2 order-1">{FundsComponent(defaultActive)}</div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
