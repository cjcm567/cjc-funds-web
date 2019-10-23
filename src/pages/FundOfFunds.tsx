/** @format */

import React, {useState} from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import imageCoreCompetence from "../images/funds/core-competence.png"
import imageStrategy from "../images/funds/strategy.png"
import imageCalculate from "../images/funds/calculate.jpg"
import imageCrossPlatform from "../images/funds/cross-platform.jpg"
import imageFundOfFunds from "../images/funds/fund-of-funds.jpg"
import imageFofStrategy from "../images/funds/fof-flow.png"
import imageFofFlow from "../images/funds/fof-strategy.png"
import imageMobile from "../images/funds/mobile.jpg"
import "../styles/fof.css"

function FundsComponent(isShowId: number) {
    if (isShowId === 0) {
        return (
            <>
                <h4 className="mb-30">产品要素</h4>
                <img src={imageCrossPlatform} alt="image of Core Competence" className="img-fluid w-100 mb-40" />

                <div className="row">
                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <div className="row">
                            <div className="col-lg-9 col-md-7">
                                <h4 className="mb-10">基金名称</h4>
                                <p className="mb-20">凯利量化投资基金</p>
                                <h4 className="mb-10">基金管理人</h4>
                                <p className="mb-20">凯利资产管理有限公司</p>
                                <h4 className="mb-10">基金托管人</h4>
                                <p className="mb-20">Public Trust Ltd</p>
                                <h4 className="mb-10">目标市场</h4>
                                <p className="mb-20">中国 A 股二级市场</p>
                                <h4 className="mb-10">基金类型</h4>
                                <p className="mb-20">开放式</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <h4 className="mb-10">开放期</h4>
                        <p className="mb-20">封闭期满后每个月末</p>
                        <h4 className="mb-10">封闭期</h4>
                        <p className="mb-20">基金成立日（含）起的6个月内</p>
                        <h4 className="mb-10">认购/申购费率</h4>
                        <p className="mb-20">0.5%</p>
                        <h4 className="mb-10">赎回费率</h4>
                        <p className="mb-20">0.5%</p>
                        <h4 className="mb-10">销售服务费</h4>
                        <p className="mb-20">1.0%/年</p>
                        <h4 className="mb-10">托管费</h4>
                        <p className="mb-20">0.05%/年</p>
                        <h4 className="mb-10">行政服务费</h4>
                        <p className="mb-20">0.05%/年</p>
                        <h4 className="mb-10">业绩报酬</h4>
                        <p className="mb-20">高水位法，20%</p>
                        <h4 className="mb-10">投资策略</h4>
                        <p className="mb-20">以成份股对冲，T+0策略为主</p>
                        <h4 className="mb-10">预警/止损</h4>
                        <p className="mb-20">预警线0.95，止损线0.91，最大风险仅为9%</p>
                    </div>
                </div>

                <p className="text-dark font-primary mb-30">风险可控：</p>
                <p className="mb-100">
                    <ul className="d-inline-block pl-0">
                        <li className="font-secondary mb-10">
                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                            1. 通过各投顾过往同类产品的净值表现拟合出 FOF 母基金的净值表现数据，全面了解FOF的可能表现
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
            </>
        )
    }
    if (isShowId === 1) {
        return (
            <>
                <h4 className="mb-30">投资理念</h4>
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <img src={imageFofStrategy} alt="image of cross platform" className="img-fluid w-100 mb-40" />
                    </div>
                    <div className="col-lg-7">
                        <div className="bg-gray p-5 rounded mb-60">
                            <ul className="d-inline-block pl-0 mb-10">
                                <li className="font-secondary mb-50">
                                    我们通过科学投资产生的可持续的超额收益来自于市场的<strong>流动性</strong>和
                                    <strong>波动性</strong>。
                                </li>
                                <li className="font-secondary mb-10">
                                    我们将海量的数据、敏锐的市场判断力和对市场微观结构的深刻理解相结合，研发出复杂的交易模型，并通过搭建最有竞争力的基础设施取得最好的交易执行效果。
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 2) {
        return (
            <>
                <h4 className="mb-30">风险控制</h4>
                <div is="fof">
                    <div className="pricing-box-container">
                        <div className="pricing-box text-center">
                            <h3>Free</h3>
                            <p className="price">
                                <sup>$</sup>0<sub>/mo</sub>
                            </p>
                            <ul className="features-list">
                                <li>
                                    <strong>1</strong> Project
                                </li>
                                <li>
                                    <strong>5</strong> Team Members
                                </li>
                                <li>
                                    <strong>50</strong> Personal Projects
                                </li>
                                <li>
                                    <strong>5,000</strong> Messages
                                </li>
                            </ul>
                        </div>

                        <div className="pricing-box text-center">
                            <h3>Premium</h3>
                            <p className="price">
                                <sup>$</sup>39<sub>/mo</sub>
                            </p>
                            <ul className="features-list">
                                <li>
                                    <strong>5</strong> Project
                                </li>
                                <li>
                                    <strong>20</strong> Team Members
                                </li>
                                <li>
                                    <strong>100</strong> Personal Projects
                                </li>
                                <li>
                                    <strong>15,000</strong> Messages
                                </li>
                            </ul>
                        </div>

                        <div className="pricing-box text-center">
                            <h3>Platinum</h3>
                            <p className="price">
                                <sup>$</sup>89<sub>/mo</sub>
                            </p>
                            <ul className="features-list">
                                <li>
                                    <strong>25</strong> Project
                                </li>
                                <li>
                                    <strong>50</strong> Team Members
                                </li>
                                <li>
                                    <strong>500</strong> Personal Projects
                                </li>
                                <li>
                                    <strong>50,000</strong> Messages
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-box text-center">
                            <h3>Platinum</h3>
                            <p className="price">
                                <sup>$</sup>89<sub>/mo</sub>
                            </p>
                            <ul className="features-list">
                                <li>
                                    <strong>25</strong> Project
                                </li>
                                <li>
                                    <strong>50</strong> Team Members
                                </li>
                                <li>
                                    <strong>500</strong> Personal Projects
                                </li>
                                <li>
                                    <strong>50,000</strong> Messages
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 3) {
        return (
            <>
                <h4 className="mb-30">程序化 T0 策略</h4>
                <div className="row">
                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <div className="row">
                            <div className="col-lg-11 col-md-7">
                                <h4 className="mb-10">流动性高/容量大</h4>
                                <p className="mb-20">单日成交量破亿，个人贡献量占比较大</p>
                                <h4 className="mb-10">需求量大</h4>
                                <p className="mb-20">激活交易量，增强持有业绩</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <h4 className="mb-10">进入壁垒高</h4>
                        <p className="mb-20">技术投入大，周期较长，竞争对手难以复制</p>
                        <h4 className="mb-10">竞争压力小/政策优势大</h4>
                        <p className="mb-20"> 机构不能做，外资不敢做</p>
                    </div>
                </div>
                <h4 className="mb-30">绝对收益 T0 策略</h4>
                <div className="row">
                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <div className="row">
                            <div className="col-lg-11 col-md-7">
                                <h4 className="mb-10">一篮子股票</h4>
                                <p className="mb-20">上证 50，沪深 300，中证 500 指数成分股</p>
                                <h4 className="mb-10">全复制、无选股</h4>
                                <p className="mb-20">一篮子股票持股比例严格对标指数成分比例</p>
                                <h4 className="mb-10">全对冲</h4>
                                <p className="mb-20">每日收盘无风险敞口</p>
                                <h4 className="mb-10">T0 交易实现</h4>
                                <p className="mb-20">昨仓和融券，在波动中获利</p>
                                <h4 className="mb-10">T0 交易分类</h4>
                                <p className="mb-20">趋势类和做市类</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <h4 className="mb-10">最极致的交易执行</h4>
                        <p className="mb-20">零滑点或负滑点</p>
                        <h4 className="mb-10">交易量大</h4>
                        <p className="mb-20">年化 150~300 倍换手率</p>
                        <h4 className="mb-10">预期费后收益</h4>
                        <p className="mb-20">13%~20%</p>
                        <h4 className="mb-10">最大回撤</h4>
                        <p className="mb-20">2%</p>
                        <h4 className="mb-10">可拓展性强</h4>
                        <p className="mb-20">产品业绩一致性强</p>
                        <h4 className="mb-10">市场容量</h4>
                        <p className="mb-20">50 亿人民币</p>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 4) {
        return (
            <>
                <h4 className="mb-30">其他相关信息</h4>
                <p className="font-secondary mb-10">
                    凯利资产管理是 Fund of Funds
                    直接基金的单位发行人。如果您对本基金投资有兴趣，请与我们联系以获取基金产品说明的副本。
                </p>
                <p className="font-secondary mb-10">
                    所有的潜在投资者在投资前请先仔细阅读产品说明，其中应包含财产和投资的详细信息。投资者必须填写并签署申请表，并在付款时提供适用的身份验证（根据反洗钱（AML）法规的要求）。
                </p>
            </>
        )
    }
}
export default function FundOfFunds() {
    const fundsDict = [
        {id: 0, content: "产品要素", style: "active border-bottom"},
        {id: 1, content: "投资理念", style: "border-bottom"},
        {id: 2, content: "风险控制", style: "border-bottom"},
        {id: 3, content: "投资策略: T+0 高频交易", style: "border-bottom"},
        {id: 4, content: "其他相关信息", style: "border-bottom"},
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
                <title>Carrick Fund of Funds | Carrick Asset</title>
                <meta
                    name="description"
                    content="FOF（Fund of Funds，基金中的基金）指投资于基金组合的基金。在欧美市场，FOF 已发展成为数量规模占比均较大的一类成熟的理财产品，相比而言，在我国 FOF 仍具有较大的发展空间（家族理财机构及对冲基金）。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h3 className="mb-10">Carrick Fund of Funds</h3>
                            <p className="mb-40">
                                FOF（Fund of Funds，基金中的基金）指投资于基金组合的基金。在欧美市场，FOF
                                已发展成为数量规模占比均较大的一类成熟的理财产品，相比而言，在我国 FOF
                                仍具有较大的发展空间。
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
                                            src={imageFundOfFunds}
                                            alt="image of benefit"
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
                                    <h3 className="mb-20">Request Consultation</h3>
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
                                            <button className="btn btn-primary-fof" type="submit" value="send">
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
