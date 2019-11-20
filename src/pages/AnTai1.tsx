/** @format */

import React, {useState} from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import RequestForm from "../components/RequestForm"
import imageCrossPlatformTop from "../images/funds/cross-platform-top.jpg"
import imageCrossPlatformBtm from "../images/funds/cross-platform-btm.jpg"
import imageFofStrategy from "../images/funds/fof-flow.png"
import imageAnTai1Target from "../images/funds/an-tai-1-target.jpg"
import imageAnTai1Reward from "../images/funds/an-tai-1-rewards.jpg"
import "../styles/fof.css"

function FundsComponent(isShowId: number) {
    if (isShowId === 0) {
        return (
            <>
                <h4 className="mb-30">产品要素</h4>
                <div className="row">
                    <img
                        src={imageCrossPlatformTop}
                        alt="image of Core Competence top"
                        className="img-fluid w-100 mb-40"
                    />
                    <div className="col-lg-6 bg-gray p-5 rounded">
                        <div className="row">
                            <div className="col-lg-10 col-md-7">
                                <h4 className="mb-10">基金名称</h4>
                                <p className="mb-20">首创凯利安泰 1 号集合资产管理基金</p>
                                <h4 className="mb-10">基金管理人</h4>
                                <p className="mb-20">首创期货</p>
                                <h4 className="mb-10">基金托管人</h4>
                                <p className="mb-20">招商证券</p>
                                <h4 className="mb-10">基金类型</h4>
                                <p className="mb-20">管理型产品 </p>
                                <h4 className="mb-10">经纪商选择</h4>
                                <p className="mb-20">证券经纪商：国融证券</p>
                                <h4 className="mb-10">拟募资规模</h4>
                                <p className="mb-20">1000 万元</p>
                                <h4 className="mb-10">赎回费用</h4>
                                <p className="mb-20">2% （持有 6 个月后免收赎回费，违约退出费5%）</p>
                                <h4 className="mb-10">开放日</h4>
                                <p className="mb-20">成立之日起，每个月 15 日为开放日，遇节假日顺延。</p>
                                <h4 className="mb-10">最大回撤</h4>
                                <p className="mb-20">1.37%</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 bg-gray p-5 rounded">
                        <h4 className="mb-10">预计收益率</h4>
                        <p className="mb-20">预计年化收益率20%或以上（费后）</p>
                        <h4 className="mb-10">外包服务费</h4>
                        <p className="mb-20">0.05%</p>
                        <h4 className="mb-10">管理费</h4>
                        <p className="mb-20">0.5%</p>
                        <h4 className="mb-10">托管费率</h4>
                        <p className="mb-20">0.05%/年</p>
                        {/* <h4 className="mb-10">业绩表现费</h4>
                        <p className="mb-20">
                            年化收益率 5% 及以下不收取任何业绩管理费 年化收益率超过 5% 以上部分收取
                            20%，在分红日、退出日和终止日计提
                        </p> */}
                        <h4 className="mb-10">预警/清仓</h4>
                        <p className="mb-20">
                            预警线为基金净值 0.95
                            <br />
                            清仓线为基金净值 0.91
                        </p>
                        <h4 className="mb-10">投资限制</h4>
                        <p className="mb-20">
                            权益类资产：占资产净值的0—80%（不含80%）；
                            <br />
                            货币市场工具类资产：占资产净值的0—80%（不含80%）；
                            <br />
                            固定收益类资产：占资产净值的0—80%（不含80%）；
                            <br />
                            金融衍生工具类资产：占资产净值的0—20%；
                            <br />
                            产品总资产不得超过净资产的200%；
                            <br />
                            本基金投资组合在各类资产上的配置比例，将严格遵守相关法律法规的规定
                            <br />
                            <br />
                            如法律法规或监管部门修改或取消上述限制，履行适当程序后，本基金可相应调整投资组合限制的规定，则本基金不受上述限制。
                        </p>
                    </div>
                    <div className="col-lg-12 bg-gray px-5 py-2 rounded mb-30">
                        <p className="mb-20">
                            具体产品细则及费率详情，请参考 Information Memorandum
                            ；或请留下您的联系方式，我们的销售顾问将及时与您联系。
                        </p>
                    </div>
                    <img
                        src={imageCrossPlatformBtm}
                        alt="image of Core Competence bottom"
                        className="img-fluid w-100 mb-40"
                    />
                </div>
            </>
        )
    }
    if (isShowId === 1) {
        return (
            <>
                <h4 className="mb-30">投资标的</h4>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="bg-gray p-5 rounded mb-60">
                            <img
                                src={imageAnTai1Target}
                                alt="image of cross platform"
                                className="img-fluid w-100 mb-40"
                            />
                            <ul className="d-inline-block pl-0 mb-10 ">
                                <li className="font-secondary mb-50">
                                    本基金将主要投资于股票，债券、货币市场基金、债券逆回购、证券公司资产管理计划、基金公司（含基金子公司）特定客户资产管理计划、期货公司资产管理计划、保险公司资产管理计划、在基金业协会登记的私募基金管理人发行并由具有相关资质机构托管的契约式私募投资基金、银行理财产品以及中国证监会认可的其他投资品种。
                                </li>
                                <li className="font-secondary mb-10">
                                    其中，投资于固定收益类资产、权益类资产、商品及金融衍生品类资产中任一资产的投资比例均小于80%。
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
                <div className="row">
                    <div className="col-lg-4 bg-gray">
                        <div className="row">
                            <div className="col-lg-12 p-4 rounded">
                                <h4 className="mb-30 mt-1">业绩报酬</h4>
                                <ul className="d-inline-block pl-0 mb-10">
                                    <li className="font-secondary mb-10 pl-2">
                                        单位净值年化收益率 R 小于或等于 5% 部分，管理人不提取业绩报酬。
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white">
                        <div className="row">
                            <div className="col-lg-12 p-4 rounded">
                                <h4 className="mb-30 mt-1">计提方式</h4>
                                <ul className="d-inline-block pl-0 mb-10">
                                    <li className="font-secondary mb-10 pl-2">
                                        单位净值年化收益率 R&gt;5% 部分，管理人按单人单笔高水位法提取 20% 业绩报酬。
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-gray">
                        <div className="row">
                            <div className="col-lg-12 p-4 rounded">
                                <h4 className="mb-30 mt-1">收益分配</h4>
                                <ul className="d-inline-block pl-0 mb-10">
                                    <li className="font-secondary mb-10 pl-2">
                                        每年收益分配 2 次<br />
                                        现金分红
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <img
                        src={imageAnTai1Reward}
                        alt="image of an tai fund 1 reward"
                        className="img-fluid w-100 mb-40"
                    />
                </div>
            </>
        )
    }
    if (isShowId === 3) {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12 bg-gray p-5 rounded mb-60">
                        <h5 className="mb-30">资产配置策略</h5>
                        <ul className="d-inline-block pl-0">
                            <li className="font-secondary mb-10">
                                通过构建宏观经济形势、财政政策、货币政策以及大类资产轮动的多维分析框架，对宏观经济运行状况和金融市场运行趋势进行科学、严谨的大势研判，根据整体资产配置策略动态调整大类金融资产的比例。
                            </li>
                            <li className="font-secondary">
                                此外管理人根据产品资金规模的不同进行差异化投资策略匹配，包括但不限于投资混合基金策略、股票中性策略、新股申购策略、固定收益类资产策略等。
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 bg-white px-5 rounded mb-60">
                        <h5 className="mb-30">子基金投资策略</h5>
                        <ul className="d-inline-block pl-0">
                            <li className="font-secondary">
                                依据量化基金投资选择方法对基金公司及其管理基金进行量化评估，坚持从基金价值出发，精选业绩优良、过往风格稳健的基金。在开放式基金的选择上，本基金筛选出部分业绩优良的基金构建基金基础池，该系统从基金管理公司综合评估、基金经理评价、基金收益分析、投资组合风格分析、择时选股能力、风险分散能力等多方面建立定量评价指标体系，并将上述指标归一化综合评估，构建基金核心池。
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 bg-gray p-5 rounded mb-60">
                        <h5 className="mb-30">现金类管理工具投资策略</h5>
                        <ul className="d-inline-block pl-0">
                            <li className="font-secondary">
                                本基金将投资于现金、各类银行存款（包括但不限于同业存款、协议存款、通知存款、活期存款、一年以内（含一年）定期存款和大额存单等）、开放式货币市场基金等高流动性短期金融产品来保障资产的安全性和流动性。
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
        {id: 1, content: "投资标的", style: "border-bottom"},
        {id: 2, content: "分红收益", style: "border-bottom"},
        {id: 3, content: "投资策略", style: "border-bottom"},
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
                <title>首创凯利安泰 1 号集合资产管理基金 | Carrick Asset</title>
                <meta
                    name="description"
                    content="FOF（Fund of Funds，基金中的基金）指投资于基金组合的基金。在欧美市场，FOF类基金因其安全可靠、收益稳定，已发展成为数量规模占比均较大的一类成熟的理财产品。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="section-title section-title-border text-center">
                                    首创凯利安泰 1 号集合资产管理基金
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* sidebar */}
                            <aside className="col-lg-4 order-lg-1 order-2">
                                {/* service menu */}
                                <ul className="service-menu pl-0 border rounded mb-50">{listSidebar}</ul>
                                <RequestForm />
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
