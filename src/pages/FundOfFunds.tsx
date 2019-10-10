/** @format */

import React, {useState} from "react"
import Layout from "../components/layout"
import imageCoreCompetence from "../images/funds/core-competence.png"
import imageStrategy from "../images/funds/strategy.png"
import imageCalculate from "../images/funds/calculate.jpg"
import imageCrossPlatform from "../images/funds/cross-platform.jpg"
import imageFundOfFunds from "../images/funds/fund-of-funds.jpg"
import imageMobile from "../images/funds/mobile.jpg"

function FundsComponent(isShowId: number) {
    if (isShowId == 0) {
        return (
            <>
                <div>
                    <h4 className="mb-30">量化 FOF 基金经营</h4>
                    <img className="img-fluid w-100 mb-40" src={imageCoreCompetence} alt="image of Core Competence" />
                    <div className="row">
                        <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <h4 className="mb-10">预期回报</h4>
                                    <p className="mb-20">年化 15% 以上</p>
                                    <h4 className="mb-10">预期最大回撤</h4>
                                    <p className="mb-20">3% 以内</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                            <h4 className="mb-20">核心竞争力</h4>
                            <div>
                                <ul className="d-inline-block pl-0">
                                    <li className="font-secondary mb-10">
                                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                        1. 对大类资产的配置能力
                                    </li>
                                    <li className="font-secondary mb-10">
                                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                        2. 对量化投资顾问的筛选及合作能力
                                    </li>
                                    <li className="font-secondary mb-10">
                                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                        3. 对不同类型量化策略的筛选及配置能力
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="text-dark font-primary mb-30">风险可控：</p>
                    <p className="mb-100">
                        <ul className="d-inline-block pl-0">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                1. 通过各投顾过往同类产品的净值表现拟合出 FOF
                                母基金的净值表现数据，全面了解FOF的可能表现
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                2. 通过风险管理 AI 平台，实时监控各投顾子基金持仓及交易细节，确保投中表现与过往一致
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                3. 每日、每周计算子基金表现数据，确保多周期多维度跟踪子基金业绩与数据
                            </li>
                        </ul>
                    </p>
                </div>
            </>
        )
    }
    if (isShowId == 1) {
        return (
            <>
                <div>
                    <h4 className="mb-30">量化投顾的遴选流程</h4>
                    <img className="img-fluid w-100 mb-40" src={imageCrossPlatform} alt="image of Core Competence" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                1. 信息收集：多渠道，多途径采集潜在优质投顾信息，与投顾建立联系
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                2. 初步筛选：业绩测评 + 电话尽调，了解公司投资策略，产品信息，合作意向，进行初步筛选
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                3. 实地调研：通过与投顾面对面访谈，全方面深入了解投顾
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                4. 业绩评价：结合市场表现，与投顾产品进行定性分析与定量业绩评价
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                5.
                                投顾池管理：根据评价体系，将投顾分为核心投顾、精选投顾、备选投顾、并纳入相关投顾池进行跟踪与管理
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                6. 建立投资组合：选取细分策略优质子基金，建立多周期多市场多策略的组合基金
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 2) {
        return (
            <>
                <div>
                    <h4 className="mb-30">量化策略的特点及策略类型</h4>
                    <img className="img-fluid w-100 mb-40" src={imageStrategy} alt="image of Strategy" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                1. AI 技术，数据挖掘发现机会
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                2. 计算机 7 天 24 小时监控市场
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                3. 全自动化高效稳定的执行
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                4. 全智能化的严格风控
                            </li>
                        </ul>
                    </div>
                    <p className="text-dark font-primary mb-30">策略选择原则：</p>
                    <p className="mb-100">
                        <ul className="d-inline-block pl-0">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                1. 根据大类资产轮动规律配置策略及资产
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                2. 量化中性策略为主，量化趋势策略和量化指数增强策略为辅
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                3. 多品种、多策略、多周期的量化策略投资配置思路
                            </li>
                        </ul>
                    </p>
                </div>
            </>
        )
    }
    if (isShowId === 3) {
        return (
            <>
                <div>
                    <h4 className="mb-30">量化机构风控体系</h4>
                    <img className="img-fluid w-100 mb-40" src={imageCalculate} alt="image of Strategy" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                1. 机器结合人工监控：自主开发独立风控系统，对风控方案 细则进行严格监控和报警，同时配备风
                                控员进行监督及作出紧急应对
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                2. 逐级细化实施：各部门与风控部门协作细化风控实施方
                                案，不放过任何风险点，不断反馈补充，确保风控方案的可操作性
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                3. 自上而下设计：由投委会根据策略特点和产品要求， 设置风控目标参数，由风控部门负责
                                实施执行
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 4) {
        return (
            <>
                <div>
                    <h4 className="mb-30">量化机构 IT 体系</h4>
                    <img className="img-fluid w-100 mb-40" src={imageMobile} alt="image of Strategy" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                1. 全频段交易：国内2家证券、四家期货交易所的服务器托管
                                和关联，实现高中低频下任意交易策略的极速 运算和低延迟下单
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                2. 全天候风控：实现所有系统的全天候自动值守运行， 通过短信、微信、网页等平台实时监控交易
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                3.
                                全自主开发：拥有强大的系统开发能力。量身打造自己的软、硬件平台，满足各种策略的高性能运算、
                                低延迟通讯要求，系统可达到微妙级别的处理能力
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default function FundOfFunds() {
    const fundsDict = [
        {id: 0, content: "量化 FOF 基金经营", style: "active border-bottom"},
        {id: 1, content: "遴选流程", style: "border-bottom"},
        {id: 2, content: "量化策略的特点及策略类型", style: "border-bottom"},
        {id: 3, content: "风控体系", style: "border-bottom"},
        {id: 4, content: "IT 体系", style: "border-bottom"},
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
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h3 className="mb-10">FOF（Fund of Funds，基金中的基金）</h3>
                            <p className="mb-40">
                                FOF（Fund of Funds，基金中的基金）指投资于基金组合的基金。在欧美市场，FOF
                                已发展成为数量规模占比均较大的一类成熟的理财产品，相比而言，在我国 FOF
                                仍具有较大的发展空间（家族理财机构及对冲基金）。
                            </p>

                            <div className="mb-md-50">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="bg-gray p-5 rounded mb-60">
                                            <h4 className="text-dark font-primary mb-30">量化 FOF 基金的原理：</h4>
                                            <div>
                                                <ul className="d-inline-block pl-0">
                                                    <li className="font-secondary mb-10">
                                                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                                        1. FOF 基金是一种专门投资于其他投资基金的基金
                                                    </li>
                                                    <li className="font-secondary mb-10">
                                                        <i className="text-primary mr-2 ti-arrow-circle-right"></i>2.
                                                        不直接以债券，股票等有价证券为投资标，通过投资其它基金间接持有资产。
                                                    </li>
                                                    <li className="font-secondary mb-10"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <img
                                            className="img-fluid rounded"
                                            src={imageFundOfFunds}
                                            alt="image of benefit"
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
                                <div className="rounded border py-3 px-4 mb-50">
                                    <i
                                        className="d-inline-block mr-1 text-dark ti-files"
                                        style={{fontSize: "20px"}}></i>
                                    <h4 className="mb-1 d-inline-block">Service Brochure</h4>
                                    <a className="font-secondary text-color d-block ml-4" href="#">
                                        Download pdf
                                    </a>
                                </div>
                                {/* Consultation */}
                                <div className="mb-50">
                                    <h5 className="mb-20">Request Consultation</h5>
                                    <form action="#" className="row">
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea
                                                name="question"
                                                id="question"
                                                className="form-control p-2"
                                                placeholder="Your Question Here..."
                                                style={{height: "150px"}}></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn btn-primary" type="submit" value="send">
                                                Submit Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </aside>
                            {/* service single content */}
                            <div className="col-lg-8 order-lg-2 order-1">{FundsComponent(defaultActive)}</div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
