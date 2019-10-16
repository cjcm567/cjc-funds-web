/** @format */
import React, {useState} from "react"
import Layout from "../components/layout"
import imageCoreCompetence from "../images/investclass/fund01.jpg"
import imageStrategy from "../images/investclass/fund02.jpg"
import imageCalculate from "../images/funds/calculate.jpg"
import imageCrossPlatform from "../images/funds/cross-platform.jpg"
import imageFundOfFunds from "../images/funds/fund-of-funds.jpg"
import Paragraph from "antd/lib/typography/Paragraph"

function InvestClassComponent(isShowId: number) {
    if (isShowId == 0) {
        return (
            <>
                <div>
                    <h4 className="mb-30">
                        <b>什么是基金？</b>
                    </h4>
                    <img className="img-fluid w-100 mb-40" src={imageCoreCompetence} alt="image of Core Competence" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <Paragraph>
                            作为一种投资工具，证券投资基金把众多投资人的资金汇集起来，由基金托管人(例如银行)托管，由专业的基金管理公司管理和运作，通过投资于股票和债券等证券，获取收益。对于个人投资者而言，倘若你有1万元打算用于投资，但其数额不足以买入一系列不同类型的股票和债券，或者你根本没有时间和精力去挑选股票和债券，购买基金是不错的选择。例如申购某只开放式基金，你就成为该基金的持有人，上述1万元扣除申购费后折算成一定份额的基金单位。所有持有人的投资一起构成该基金的资产，基金管理公司的专业团队运用基金资产购买股票和债券，形成基金的投资组合。你所持有的基金份额，就是上述投资组合的缩影。专家理财是基金投资的重要特色。基金管理公司配备的投资专家，一般都具有深厚的投资分析理论功底和丰富的实践经验，以科学的方法研究股票、债券等金融产品，组合投资，规避风险。
                        </Paragraph>
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
                        <b>基金类型介绍</b>
                    </h4>
                    <img className="img-fluid w-100 mb-40" src={imageCrossPlatform} alt="image of Core Competence" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                <b>1. 指数基金：</b>
                                指数基金采用被动式投资，选取某个指数作为模仿对象，按照该指数构成的标准，购买该指数包含的证券市场中全部或部分的证券，目的在于获得与该指数相同的收益水平。
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                <b>2. 交易所交易基金:</b> 交易所交易基金是指可以在交易所上市交易的基金，又称ETFs(Exchang
                                Traded
                                Funds)，其代表的是一揽子股票的投资组合。对于国内投资者而言，这还是陌生的新事物，因此我们仅就其一些基本特点进行介绍。
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                <b>3. 保本基金：</b>
                                保本基金的最大特点是其招募说明书中明确规定相关的担保条款，即在满足一定的持有期限后，为投资人提供本金或收益的保障。
                            </li>
                            <li className="font-secondary mb-10">
                                <i className="text-primary mr-2 ti-arrow-circle-right"></i>
                                <b>4. 基金的基金：</b>
                                基金的基金是以基金为投资对象的基金。一般的基金以股票、债券等投资工具“”为投资对象，而
                                基金的基金
                                投资对象是一般的基金，其适宜那些初涉证券市场、投资经验较少的投资者，或者是工作繁忙而没有时间管理投资组合的投资者
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
                        <b>单位净值是什么？</b>
                    </h4>
                    <img className="img-fluid w-100 mb-40" src={imageStrategy} alt="image of Strategy" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <p className="text-dark mb-30">策略选择原则：</p>
                        <p className="text-dark mb-30">
                            基金的NAV(净值)是基金单位份额的价格。净值的计算方法是，将组合中股票、债券或其他有价证券(包括现金)的价值加总，并扣除相关的费用，将余额除以总份额。例如，500000份额的基金，资产包括九百万的股票和一百万现金，其资产净值应该为20元(不考虑扣除的相关费用)。
                        </p>
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
                        <b>如何计算基金的总回报率</b>
                    </h4>
                    <img className="img-fluid w-100 mb-40" src={imageCalculate} alt="image of Strategy" />
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10 text-dark">
                            <li className="mb-10">
                                <p className="text-dark">
                                    我们把基金在一定时期内的收益定义为总回报，作为衡量基金以往表现的最基本方法。总回报的来源有两部分，一是收入回报，即基金在一定时期内收到的分红和利息收入，例如股息、债券利息和银行存款利息等;二是资本回报，反映基金所持有的股票与债券价格涨跌的幅度
                                </p>
                            </li>
                            <li className="mb-10">
                                <p className="text-dark">
                                    首先要了解基金资产净值，这是计算总回报的基础，总回报表现为该时期单位基金资产净值的增长率。
                                </p>
                            </li>
                            <li className="mb-10">
                                <p className="text-dark">
                                    基金资产净值是在某一时点上，基金资产的总市值扣除负债后的余额，代表了基金持有人的权益。单位基金资产净值，即每一基金单位代表的基金资产的净值
                                </p>
                            </li>
                            <li className="mb-10">
                                <b>单位基金资产净值=(总资产-总负债)/基金单位总数</b>
                            </li>
                            <li className="mb-10">
                                <p className="text-dark">
                                    基金通常会把已经实现的收益向投资人进行分配。分红的基础为「基金净收益」，即基金的收入回报和通过卖出证券实现的资本回报，减去依法可以在基金收益中扣除的费用后的余额。按照目前有关规定，分红有两个约束条件：一是基金投资要有已实现的净收益，二是分红比例在一年中不得低于已实现净收益的90%。
                                </p>
                            </li>
                            <li className="mb-10">
                                <p className="text-dark">
                                    对于分红方式，投资人有两种选择，一是分配现金;二是再投资，即将分得的收益再投资于基金，并折算成相应数量的基金单位
                                </p>
                            </li>
                            <li className="mb-10">
                                <p className="text-dark">
                                    分红后，单位基金资产净值会下降。假设分红前单位净值1.06元，单位分红金额0.05元，则分红后单位净值降至1.01元。考虑了分红因素后，我们再来计算总回报。总回报=(Ne÷Nb)×(1+D1÷N1)×(1+D2÷N2)×......×(1+Dn÷Nn)-1其中：Ne和Nb分别为期末和期初单位资产净值;D1、D2、Dn分别为第1次、第2次、第n次单位分红金额;N1、N2、Nn分别为第1次、第2次、第n次分红再投资日的单位净值。
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
        {id: 0, content: "什么是基金？", style: "active border-bottom"},
        {id: 1, content: "不同的基金类型", style: "border-bottom"},
        {id: 2, content: "基金的单位净值", style: "border-bottom"},
        {id: 3, content: "如何计算基金的总回报率", style: "border-bottom"},
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
                            <h3 className="mb-10">投资课堂</h3>
                            <p className="mb-40"></p>

                            <div className="mb-md-50">
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
                            <div className="col-lg-8 order-lg-2 order-1">{InvestClassComponent(defaultActive)}</div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
