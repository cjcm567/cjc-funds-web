/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import imageArrowTop from "../images/funds/arrow-top.png"
import imageArrowBottom from "../images/funds/arrow-bottom.png"

const fundsOverview = [
    {
        props: "fund-of-funds",
        title: "Fund of Funds",
        desc:
            "FOF（Fund of Funds，基金中的基金）指投资于基金组合的基金。在欧美市场，FOF 已发展成为数量规模占比均较大的一类成熟的理财产品，相比而言，在我国 FOF 仍具有较大的发展空间（家族理财机构及对冲基金）。",
    },
    {
        props: "carrick-dividend-yield-fund",
        title: "Dividend Yield Fund",
        desc:
            "该基金的目标是取得长期平均每年3％的正绝对收益。 这是绝对回报基金。 它打算通过产生股息形式的回报以及保持每年的基金资本价值来实现这一目标。 策略是投资于股息收益率高且有增长机会维持价值的NZX上市证券。",
    },
]

const fundsCard = fundsOverview.map(fundsItem => (
    <div className="col-lg-4 col-sm-6 mb-5" key={fundsItem.props}>
        <div className="card text-center">
            <h4 className="card-title pt-3">{fundsItem.title}</h4>
            <div className="card-img-wrapper">
                <img
                    className="card-img-top rounded-0"
                    height="200px"
                    src={require(`../images/funds/${fundsItem.props}.jpg`)}
                    alt={fundsItem.props}
                />
            </div>
            <div className="card-body p-0">
                <img
                    className="square-icon translateY-33 rounded rounded"
                    height="12px"
                    src={require(`../images/funds/${fundsItem.props}.svg`)}
                    alt={fundsItem.props}
                />
                {/* <i className="square-icon translateY-33 rounded rounded ti-bar-chart"></i> */}
                <p className="card-text mx-2 mb-0">{fundsItem.desc}</p>
                <Link to={`/funds/${fundsItem.props}`} className="btn btn-secondary translateY-25">
                    Read More
                </Link>
            </div>
        </div>
    </div>
))
export default function Funds() {
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">{fundsCard}</div>
                    </div>
                </section>
                <section className="section position-relative pb-xl-200-lg-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <h5 className="section-title-sm">我们倾向于投资易于理解和管理的证券</h5>
                                <h2 className="section-title section-title-border mb-xl-150-lg-100">投资过程</h2>
                            </div>
                            {/* process step1 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">1</div>
                                    <h5 className="text-primary">研究与分析</h5>
                                    <p>
                                        我们的投资经理人提出的想法是什么产品在许多可投资的产品中是我们可以投资的，以实现基金的目标之间的产品。
                                    </p>
                                    <p>
                                        然后，我们会对要投资的证券进行详细分析。该分析可能包括价格预测、技术分析、定量分析、行业和公司特定的研究与分析。
                                    </p>
                                </div>
                            </div>
                            {/* process step2 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">2</div>
                                    <h5 className="text-primary">建设与监控</h5>
                                    <p>决定要投资的证券后，我们会考虑资产分配和限额要求，将证券添加到投资组合中。</p>
                                    <p>持续监控建筑组合的绩效，以使我们能够评估其绩效，并确保投资符合 SIPO 的要求。</p>
                                </div>
                            </div>
                            {/* process step3 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">3</div>
                                    <h5 className="text-primary">分配和平衡</h5>
                                    <p>我们积极管理投资。</p>
                                    <p>
                                        我们致力于调整和平衡投资组合中的成分的策略，以为我们的客户实现最佳结果并遵守资产分配限制。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="arrow-top" src={imageArrowTop} alt="image of Arrow Top" />
                    <img className="arrow-bottom" src={imageArrowBottom} alt="image of Arrow Bottom" />
                </section>
            </Layout>
        </>
    )
}
