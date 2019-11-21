/** @format */

import React, {useState} from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import RequestForm from "../components/RequestForm"
import imageCoreCompetence from "../images/funds/core-competence.png"
import imageStrategy from "../images/funds/strategy.png"
import imageCalculate from "../images/funds/calculate.jpg"
import imageCrossPlatform from "../images/funds/cross-platform.jpg"
import imageFundOfFunds from "../images/funds/carrick-fund-of-funds.jpg"
import imageFofTo from "../images/funds/fof-to.png"
import imageFofStrategy from "../images/funds/fof-flow.png"
import imageFofInvestment from "../images/funds/fof-investment.png"
import logoHeiyi from "../images/funds/logo/logo-heiyi.jpeg"
import logoHuanfang from "../images/funds/logo/logo-huanfang.png"
import logoPingfanghe from "../images/funds/logo/logo-pingfanghe.png"
import logoQianxiang from "../images/funds/logo/logo-qianxiang.png"
import logoTaoli from "../images/funds/logo/logo-taoli.png"
import logoZhiyuan from "../images/funds/logo/logo-zhiyuan.png"
import imageFofFlow from "../images/funds/fof-strategy.png"
import imageMobile from "../images/funds/mobile.jpg"
import "../styles/fof.css"

function FundsComponent(isShowId: number) {
    const circleStyle = {
        width: "200px",
        height: "200px",
        background: "rgba(0, 87, 184, 0.8)",
        borderRadius: "50%",
    }
    if (isShowId === 0) {
        return (
            <>
                <h4 className="mb-30">产品要素</h4>
                <img src={imageCrossPlatform} alt="image of Core Competence" className="img-fluid w-100 mb-40" />

                <div className="row">
                    <div className="col-lg-6 bg-gray p-5 rounded">
                        <div className="row">
                            <div className="col-lg-10 col-md-7">
                                <h4 className="mb-10">基金名称</h4>
                                <p className="mb-20">凯利安泰量化投资基金</p>
                                <h4 className="mb-10">基金管理人</h4>
                                <p className="mb-20">新西兰凯利资产管理有限公司</p>
                                <h4 className="mb-10">基金托管人</h4>
                                <p className="mb-20">New Zealand Public Trust Limited</p>
                                <h4 className="mb-10">基金类型</h4>
                                <p className="mb-20">开放式</p>
                                <h4 className="mb-10">风险等级</h4>
                                <p className="mb-20">低风险</p>
                                <h4 className="mb-10">投资策略</h4>
                                <p className="mb-20">以成份股对冲，T+0 策略为主</p>
                                <h4 className="mb-10">封闭期</h4>
                                <p className="mb-20">从投资者加入日起，6个月内</p>
                                <h4 className="mb-10">开放期</h4>
                                <p className="mb-20">
                                    产品封闭期为六个月，封闭期结束之后，每个月的 15
                                    号为开放日，接受基金份额的认购和赎回。
                                </p>
                                <h4 className="mb-10">拟合业绩最大回撤</h4>
                                <p className="mb-20">1.37%</p>
                                <h4 className="mb-10">预警/清仓</h4>
                                <p className="mb-20">
                                    预警线为基金净值 0.95
                                    <br />
                                    清仓线为基金净值 0.91
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 bg-gray p-5 rounded">
                        <h4 className="mb-10">预期年化收益率(费后)</h4>
                        <p className="mb-20">20% 以上</p>
                        <h4 className="mb-10">固定管理费</h4>
                        <p className="mb-20">1.99%/年</p>
                        <h4 className="mb-10">行政服务费</h4>
                        <p className="mb-20">0.99%/年</p>
                        <h4 className="mb-10">业绩表现费</h4>
                        <p className="mb-20">
                            年化收益率 5% 及以下不收取任何业绩管理费 年化收益率超过 5% 以上部分收取
                            20%，在分红日、退出日和终止日计提
                        </p>

                        <h4 className="mb-10">认购资格</h4>
                        <p className="mb-20">
                            1.
                            最近两个完整新西兰财政年度，投资人及其控制的实体净资产或总合并营业额超过$500万新西兰元；或
                            <br />
                            2. 提供持牌金融服务顾问、特许会计师或律师签署的书面证明书，以证明投资人为合格投资者；或
                            <br />
                            3. 基金产品要约人的近亲属或商业合作伙伴；或
                            <br />
                            4. 一次性认购基金份额价值达到75万新西兰元
                            <br />
                            <br />
                            （只要满足以上任何一个条件即可，具体详情请咨询销售顾问）
                        </p>
                    </div>
                    <div className="col-lg-12 bg-gray px-5 py-2 rounded mb-60">
                        <p className="mb-20">
                            具体产品细则及费率详情，请参考 Information Memorandum
                            ；或请留下您的联系方式，我们的销售顾问将及时与您联系。
                        </p>
                    </div>
                </div>

                <p className="text-dark font-primary mb-30">风险可控：</p>
                <p className="mb-100">
                    <ul className="d-inline-block pl-0">
                        <li className="font-secondary mb-10">
                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                            1. 通过各投顾过往同类产品的净值表现拟合出 FOF 母基金的净值表现数据，全面了解 FOF 的可能表现
                        </li>
                        <li className="font-secondary mb-10">
                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                            2. 通过风险管理 AI 平台，实时监控各投顾子基金持仓及交易细节，确保投中表现与过往一致
                        </li>
                        <li className="font-secondary mb-10">
                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                            3. 每周计算子基金表现数据，确保多周期多维度跟踪子基金业绩与数据
                        </li>
                        <li className="font-secondary mb-10">
                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                            4.
                            产品要素仅供参考，管理人可能视情况调整部分要素，任何商业条款应以正式签署的资产管理合同为准
                        </li>
                        <li className="font-secondary mb-10">
                            <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                            5. 本产品并不适合所有投资者，只向符合资格的投资者开放
                        </li>
                    </ul>
                </p>
            </>
        )
    }
    if (isShowId === 1) {
        return (
            <>
                <h4 className="mb-30">投研架构</h4>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <img src={imageFofInvestment} alt="image of cross platform" className="img-fluid w-100 mb-40" />
                    </div>
                    <div className="col-lg-12">
                        <div className="bg-gray p-5 rounded mb-60">
                            <ul className="d-inline-block pl-0 mb-10">
                                <li className="font-secondary mb-50">
                                    投资经理跟投机制：确保投资经理与持有人利益<strong>高度一致</strong>。
                                </li>
                                <li className="font-secondary mb-10">投资人才股权激励：以人为本立足企业投研文化。</li>
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
    if (isShowId === 3) {
        return (
            <>
                <h4 className="mb-30 mt-5">风险管理理念</h4>
                <div className="row">
                    <div className="col-lg-6 bg-gray p-4 rounded">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10 pl-2">1. 以保护投资者利益为导向</li>
                            <li className="font-secondary mb-10 pl-2">2. 以资金曲线为总纲</li>
                            <li className="font-secondary mb-10 pl-2">3. 多维度多层级严控风险</li>
                        </ul>
                    </div>
                </div>

                <h4 className="mb-30 mt-5">风险管理的三道防线</h4>
                <div className="row">
                    <div className="col-12">
                        <ul className="list-inline text-lg-center text-center">
                            <li className="list-inline-item">
                                <div id="pointer">
                                    <p className="h3 text-white text-center align-content-center">投研部门</p>
                                </div>
                            </li>
                            <li className="list-inline-item text-uppercase ml-4 mr-4">
                                <div id="pointer-grey">
                                    <p className="h3 text-white text-center align-content-center">运营风控部</p>
                                </div>
                            </li>
                            <li className="list-inline-item text-uppercase">
                                <div id="pointer" style={{width: "260px"}}>
                                    <p className="h3 text-white text-center align-content-center">风险管理委员会</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 className="mb-30 mt-5">投资风险管理</h4>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h5 className="mb-30 mt-1 text-center">投前风控</h5>
                        <div style={circleStyle} className="justify-content-center text-center">
                            <div className="pt-4">
                                <h5 className="text-center text-white">投研策略管理</h5>
                                <h5 className="text-center text-white">投资权限管理</h5>
                                <h5 className="text-center text-white">风险指标管理</h5>
                                <h5 className="text-center text-white">总体风险决策</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="mb-30 mt-1 text-center">投中风控</h5>
                        <div style={circleStyle} className="justify-content-center text-center">
                            <div className="pt-5">
                                <h5 className="text-center text-white">策略/标的投资评级</h5>
                                <h5 className="text-center text-white">交易执行合规</h5>
                                <h5 className="text-center text-white">持续跟踪反馈</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="mb-30 mt-1 text-center">投后风控</h5>
                        <div style={circleStyle} className="justify-content-center text-center">
                            <div className="pt-4">
                                <h5 className="text-center text-white">风险敞口评估</h5>
                                <h5 className="text-center text-white">组合压力测试</h5>
                                <h5 className="text-center text-white">严格的预警止损机制</h5>
                                <h5 className="text-center text-white">业绩归因</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mb-30 mt-5">多维风控</h4>
                <div id="fof">
                    <div className="pricing-box-container">
                        <div className="pricing-box text-center has-same-height">
                            <p className="price">风险管理理念</p>
                            <ul className="features-list">
                                <li>以保护投资者利益为导向，以资金曲线为总纲</li>
                                <li>多维度、多层级严控风险。</li>
                            </ul>
                        </div>

                        <div className="pricing-box text-center has-same-height">
                            <p className="price">产品整体风险管理</p>
                            <ul className="features-list">
                                <li>权益类市值占比、期货轧差及固收杠杆控制管理相结合。</li>
                                <li>股票+期货净市值 ≤150%</li>
                                <li>债券类杠杆率 ≤2</li>
                            </ul>
                        </div>

                        <div className="pricing-box text-center has-same-height">
                            <p className="price">流动性风险管理</p>
                            <ul className="features-list">
                                <li>形成由投资管理委员会和风险管理委员会为主的投资风险管理体系</li>
                                <li>
                                    根据市场情况定期或不定期对各类资产比例做限制及调整，妥善进行现金管理，保证产品流动性
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-box text-center has-same-height">
                            <p className="price">投资经理风险管理</p>
                            <ul className="features-list">
                                <li>根据业绩评价体系对投资经理投资能力进行客观评价</li>
                                <li>实行分级管理，根据级别分配资金及设定对应风控指标，严格控制投资经理资金回撤</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 4) {
        return (
            <>
                <h4 className="mb-10">程序化 T0 策略</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <img src={imageFofTo} alt="image of TO strategy" className="img-fluid w-100 mb-40" />
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
                                <h4 className="mb-10">交易量大</h4>
                                <p className="mb-20">年化 150~300 倍换手率</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                        <h4 className="mb-10">预期年化收益率(费后)</h4>
                        <p className="mb-20">20%以上</p>
                        <h4 className="mb-10">拟合业绩最大回撤</h4>
                        <p className="mb-20">1.37%</p>
                        <h4 className="mb-10">可拓展性强</h4>
                        <p className="mb-20">产品业绩一致性强</p>
                        <h4 className="mb-10">市场容量</h4>
                        <p className="mb-20">50 亿人民币</p>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 5) {
        return (
            <>
                {/* 拟投资情况 
                <h4 className="mb-30">拟投资情况</h4>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 mb-50">
                        <ul style={{padding: "0 2rem 0 2rem"}}>
                            <li className="text-center mb-50">
                                <img src={logoHuanfang} alt="ASB Bank Logo" className="img-fluid w-50" />
                            </li>
                            <li className="text-center mb-50">
                                <img src={logoZhiyuan} alt="logoPwc" className="img-fluid w-50" />
                            </li>
                            <li className="text-center">
                                <img src={logoHeiyi} alt="logoPwc" className="img-fluid w-50" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ul style={{padding: "0 2rem 0 2rem"}}>
                            <li className="text-center mb-50">
                                <img src={logoPingfanghe} alt="logoPublicTrust" className="img-fluid w-50" />
                            </li>
                            <li className="text-center mb-50">
                                <img src={logoQianxiang} alt="logoMinterEllison" className="img-fluid w-50" />
                            </li>
                            <li className="text-center">
                                <img src={logoTaoli} alt="logoPwc" className="img-fluid w-50" />
                            </li>
                        </ul>
                    </div>
                </div>*/}

                <h4 className="mb-30 mt-5">其它相关信息</h4>
                <p className="font-secondary mb-10">
                    如果您对本公司基金产品有投资意向，请与我们联系以获取基金产品信息的详细说明。
                </p>
                <p className="font-secondary mb-10">
                    所有投资者在投资前请先仔细阅读产品说明和认购协议，其中应包含相关投资的详细信息。投资者必须填写并签署认购申请表，并需满足适用的身份验证（根据反洗钱（AML）法规的要求）。
                </p>
            </>
        )
    }
}
export default function AnTai() {
    const fundsDict = [
        {id: 0, content: "产品要素", style: "active border-bottom"},
        {id: 1, content: "投研架构", style: "border-bottom"},
        {id: 2, content: "投资理念", style: "border-bottom"},
        {id: 3, content: "风险控制", style: "border-bottom"},
        {id: 4, content: "投资策略: T+0 高频交易", style: "border-bottom"},
        {id: 5, content: "其它相关信息", style: "border-bottom"},
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
                <title>凯利安泰量化投资基金 | Carrick Asset</title>
                <meta
                    name="description"
                    content="量化投资基金是指通过数量模型的计算寻找投资机会，以此作为最终投资决策进行资产管理。量化投资在欧美国家的发展已有30多年的历史，其投资业绩稳定，市场规模和份额不断扩大，得到了越来越多的投资者认可。"
                />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="section-title section-title-border text-center">凯利安泰量化投资基金</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* sidebar */}
                            <aside className="col-lg-4 order-lg-1 order-2">
                                {/* service menu */}
                                <ul className="service-menu pl-0 border rounded mb-50">{listSidebar}</ul>
                                {/* Consultation */}
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
