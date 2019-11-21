/** @format */
import React, {useState} from "react"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import RequestForm from "../components/RequestForm"
import imageStrategy from "../images/investclass/fund02.jpg"
import imageCalculate from "../images/funds/calculate.jpg"
import imageCrossPlatform from "../images/funds/cross-platform.jpg"
import imageSign from "../images/funds/carrick-sign.jpg"
import imageSecurity from "../images/funds/carrick-security.jpg"
import imageCode from "../images/funds/carrick-code.jpg"

function InvestClassComponent(isShowId: number) {
    if (isShowId == 0) {
        return (
            <>
                <div>
                    <h4 className="mb-30">
                        <b>什么是量化投资？</b>
                    </h4>

                    <div className="bg-gray p-5 rounded mb-60">
                        <img className="img-fluid w-100 mb-40" src={imageCode} alt="image of Core Competence" />
                        <p>
                            量化投资是一种数据化、系统化的投资方法，该方法源自成熟的金融理论。量化投资借助现代数学、统计等基础学科的科学研究方法，运用电脑强大的数据计算能力，以策略模型为核心，以程序化交易为手段，以追求超额收益为目标的投资方法。它作为一种投资工具，能够从大数据中寻找能够带来超额收益的策略，并严格按照这些策略所建的量化模型指导投资，力求获得持续稳定的超额回报。
                        </p>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId == 1) {
        return (
            <>
                <div>
                    <h4 className="mb-30 ">
                        <b>量化投资与传统的定性投资有什么区别？</b>
                    </h4>

                    <div className="bg-gray p-5 rounded mb-60">
                        <img
                            className="img-fluid w-100 mb-40"
                            src={imageCrossPlatform}
                            alt="image of Core Competence"
                        />
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                传统定性投资较依赖对上市公司的调研，并加以基金经理的个人经验及主观判断，而量化投资则是将定性思想与定量规律进行量化应用的过程。通过借助统计方法、数学模型来指导投资，将风险降到最低，可实现在不同市场周期，各种宏观环境下都能为投资者带来长期稳定的投资收益。相对于传统的主动投资，量化投资的核心优势在于风险管理更精准，获取超额收益的概率更大。
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
                    <h4 className="mb-30">
                        <b>Carrick Asset 的 FOF 类基金产品有哪些优势？</b>
                    </h4>

                    <div className="bg-gray p-5 rounded mb-60">
                        <img className="img-fluid w-100 mb-40" src={imageStrategy} alt="image of Strategy" />
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <strong>纪律性</strong>
                                <br />
                                量化产品的投资决策过程会严格执行量化投资模型所给出的投资建议。传统的主动投资大多数情况下由人为判断完成，而人性存在贪婪、恐惧、侥幸的弱点，难以做到完全理性。纪律化能够使得投资决策客观理性，克服人的情绪波动对基金业绩带来的负面影响。
                            </li>
                            <li className="font-secondary mb-10">
                                <strong>系统性</strong>
                                <br />
                                量化投资可通过多层次的量化模型，多角度的观察和海量数据的处理等捕捉更多的投资机会。多层次的量化模型包括大类资产配置模型、行业选择模型、精选个股模型等；多角度的观察，包括宏观周期、市场结构、估值、成长、盈利质量、分析师预测、市场情绪等；目前A股市场
                                3000
                                多只股票，市场信息量复杂庞大，单靠人力主动研究的覆盖面和迅速消化是有限的，而量化投资可通过计算机技术快速处理大量数据，便于分析总结规律，提高投资决策的效率。
                            </li>
                            <li className="font-secondary mb-10">
                                <strong>及时性</strong>
                                <br />
                                及时快速地跟踪市场变化，不断发现能够提供超额收益的统计模型，寻找新的交易机会。由于量化投资往往利用计算机进行程序化交易，它能快速搜集市场信息进行处理，相对于人脑，它反映快速更能把握投资机会。最突出的例子是高频交易，与低频交易相比，高频交易通过高速计算机，在极短时间内对市场做出迅速反应并完成交易。
                            </li>
                            <li className="font-secondary mb-10">
                                <strong>准确性</strong>
                                <br />
                                传统投资方法，投资决策依靠投资者的经验和技术。而量化投资可准确客观评价交易机会，克服主观情绪偏差，通过全面、系统性的扫描捕捉错误定价、错误估值带来的机会。
                            </li>
                            <li className="font-secondary mb-10">
                                <strong>分散性</strong>
                                <br />
                                与传统的投资方式不同，量化投资靠筛选出标的组合来取胜，而不是一个或几个标的取胜。实际上，量化产品在个股集中度、行业集中度上要远远低于同类其它产品，在个股、行业出现「黑天鹅」事件时，能相对较好地规避风险。从投资组合理念来看，量化投资能够有效的控制风险以获取超额收益。
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 3) {
        return (
            <>
                <div>
                    <h4 className="mb-30">
                        <b>FOF 类基金的投资范围是？</b>
                    </h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <img className="img-fluid w-100 mb-40" src={imageCalculate} alt="image of Strategy" />
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <p className="text-dark">
                                    将主要投资于股票，债券、货币市场基金、债券逆回购、证券公司资产管理计划、基金公司（含基金子公司）特定客户资产管理计划、期货公司资产管理计划、保险公司资产管理计划、在基金业协会登记的私募基金管理人发行并由具有相关资质机构托管的契约式私募投资基金、银行理财产品以及中国证监会认可的其它投资品种。
                                </p>
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
                    <h4 className="mb-30">
                        <b>基金封闭期是什么？</b>
                    </h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <img className="img-fluid w-100 mb-40" src={imageSign} alt="image of Strategy" />
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <p className="text-dark">
                                    是指基金成功募集足够资金宣告基金合同生效后，会有一段不接受投资人赎回基金份额申请的时间段。
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 5) {
        return (
            <>
                <div>
                    <h4 className="mb-30">
                        <b>如何确保我的资金安全？</b>
                    </h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <img className="img-fluid w-100 mb-40" src={imageSecurity} alt="image of Strategy" />
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <p className="text-dark">
                                    保障客户资金安全是 Carrick Asset
                                    视为跟生命同等重要的事情，并会严格依照国家法律法规来妥善保管客户资金。在此类法规要求下，所有客户资金都存放于独立的政府信托机构内并定期接受相关部门的严格审计，存放于信托账户内的客户资金将会与公司自有营运资金完全隔离，不会受到
                                    Carrick Asset 自身营运情况的任何影响。
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default function InvestClass() {
    const fundsDict = [
        {id: 0, content: "什么是量化投资？", style: "active border-bottom"},
        {id: 1, content: "量化投资与传统的定性投资有什么区别？", style: "border-bottom"},
        {id: 2, content: "Carrick Asset 的 FOF 类基金产品有哪些优势？", style: "border-bottom"},
        {id: 3, content: "FOF 类基金的投资范围是？", style: "border-bottom"},
        {id: 4, content: "基金封闭期是什么？", style: "border-bottom"},
        {id: 5, content: "如何确保我的资金安全？", style: "border-bottom"},
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
                <title>投资课堂 | Carrick Asset</title>
                <meta name="description" content="Carrick Asset 投资课堂" />
            </Helmet>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h3 className="mb-10 px-3">常见问题</h3>
                            {/* <div className="mb-md-50 px-3">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="bg-gray p-5 rounded mb-60">
                                            <h4 className="text-dark font-primary mb-30">投资课堂介绍</h4>
                                            <div>
                                                <ul className="d-inline-block pl-0">
                                                    <li className="font-secondary mb-10">
                                                        <p>在这里我们尽可能的给您提供有关基金相关知识</p>
                                                        <br></br>
                                                    </li>
                                                    <li className="font-secondary mb-10"></li>
                                                    <li className="font-secondary mb-10"></li>
                                                    <li className="font-secondary mb-10"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <img
                                            className="img-fluid rounded"
                                            src={imageInvestClass}
                                            alt="image of benefit"
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            {/* sidebar */}
                            <aside className="col-lg-4 order-lg-1 order-2">
                                {/* service menu */}
                                <ul className="service-menu pl-0 border rounded mb-50">{listSidebar}</ul>
                                <RequestForm />
                            </aside>
                            {/* service single content */}
                            <div className="col-lg-8 order-lg-2 order-1">{InvestClassComponent(defaultActive)}</div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
