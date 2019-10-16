/** @format */

import React, {useState} from "react"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageCoreCompetence from "../images/funds/core-competence.png"
import imageCalculate from "../images/funds/calculate.jpg"
import imageCrossPlatform from "../images/funds/cross-platform.jpg"
import imageDividendYield from "../images/funds/carrick-dividend-yield-fund.jpg"
import imageRiskFigure from "../images/funds/risk-figure-dividend.jpg"

function FundsComponent(isShowId: number) {
    if (isShowId == 0) {
        return (
            <>
                <div>
                    <h4 className="mb-30">战略</h4>
                    <div className="bg-gray p-5 rounded mb-60">
                        <ul className="d-inline-block pl-0 mb-10">
                            <li className="font-secondary mb-10">
                                1.
                                基金投资经过精心研究NZX和ASX的股票投资组合，该投资组合与长期投资者的投资的目标一致：高股息收益率以及保持稳定的高股息收益率和自身资本价值。
                            </li>
                            <li className="font-secondary mb-10">
                                2. 该绝对回报基金通过产生股息形式的回报以及保持每年的基金资本价值来实现这一目标。
                                策略是投资于股息收益率高且有增长机会维持价值的NZX和ASX上市证券。
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
                    <h4 className="mb-30">风险指标</h4>
                    <LazyImage
                        src={imageRiskFigure}
                        alt="image of risk figure"
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img className="img-fluid w-100 mb-40" {...imageProps} />}
                    />
                    <h4 className="mb-30">费用</h4>
                    <p className="font-secondary mb-10">
                        2％ （估计的年度费用。 该费用是根据基金资产净值（NAV）的百分比估算得出）
                    </p>
                </div>
            </>
        )
    }
    if (isShowId === 2) {
        return (
            <>
                <div>
                    <h4 className="mb-30">目标投资组合</h4>
                    {/* <LazyImage
                        src={imageCoreCompetence}
                        alt="image of combo"
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img className="img-fluid w-100 mb-40" {...imageProps} />}
                    /> */}
                    <div className="row">
                        <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                            <h4 className="mb-10">投资组合</h4>
                            <p className="mb-20">90％的新西兰、澳洲证券</p>
                            <p className="mb-20">10％现金或现金等价物</p>
                            <h4 className="mb-10">投资范围</h4>
                            <p className="mb-20">0 – 100％新西兰和澳洲股票</p>
                            <p className="mb-20">0-25％现金或现金等价物</p>
                            <p className="mb-20">每个证券不超过20％</p>
                        </div>
                        <div className="col-lg-6 bg-gray p-5 rounded mb-60">
                            <h4 className="mb-10">最低建议投资期限</h4>
                            <p className="mb-20">
                                由于该基金适合希望对新西兰和澳大利亚股票市场进行积极管理，集中投资的合格投资者。
                                鉴于这项投资的性质，我们建议最短投资期限至少为三年。
                            </p>
                            <h4 className="mb-10">最低投资额</h4>
                            <p className="mb-20">75万纽币</p>
                            <h4 className="mb-10">货币对冲</h4>
                            <p className="mb-20">0%</p>
                            <h4 className="mb-10">授权投资</h4>
                            <p className="mb-20">在NZX和ASX上市的证券和衍生品</p>
                            <p className="mb-20">现金存款和短期债券</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (isShowId === 3) {
        return (
            <>
                <div>
                    <h4 className="mb-30">分红</h4>
                    {/* <LazyImage
                        src={imageCoreCompetence}
                        alt="image of combo"
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img className="img-fluid w-100 mb-40" {...imageProps} />}
                    /> */}
                    <LazyImage
                        src={imageCalculate}
                        alt="image of Strategy"
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img className="img-fluid w-100 mb-40" {...imageProps} />}
                    />
                    <p className="font-secondary mb-10">
                        Carrick Dividend Yield Fund每半年支付一次分红。
                        您可以选择将分红重新投资到基金中或记入您的银行帐户。
                        分红是从基金的净收入中得出的，可能会有所波动。 支付给您的分红金额将取决于您持有的单位数量。
                        所有分红均由我们自行决定。
                    </p>
                </div>
            </>
        )
    }
    if (isShowId === 4) {
        return (
            <>
                <div>
                    <h4 className="mb-30">其他相关信息</h4>
                    <p className="font-secondary mb-10">
                        凯利资产管理是 Carrick Direct Property Fund
                        直接基金的单位发行人。如果您对本基金投资有兴趣，请与我们联系以获取基金产品说明的副本。
                    </p>
                    <p className="font-secondary mb-10">
                        所有的潜在投资者在投资前请先仔细阅读产品说明，其中应包含财产和投资的详细信息。投资者必须填写并签署申请表，并在付款时提供适用的身份验证（根据反洗钱（AML）法规的要求）。
                    </p>
                </div>
            </>
        )
    }
    // if (isShowId === 4) {
    //     return (
    //         <>
    //             <div>
    //                 <h4 className="mb-30">投资优势</h4>

    //                 <div className="bg-gray p-5 rounded mb-60">
    //                     <ul className="d-inline-block pl-0 mb-10">
    //                         <li className="font-secondary mb-10">
    //                             <i className="text-primary mr-2 ti-arrow-circle-right"></i>
    //                             <p className="h5">专业管理</p>
    //                             我们为投资者提供专业经理人的专业知识和资源。个人可能没有时间，技能或资源来管理他或她的投资。通过为您执行投资流程，我们可以节省您的时间和资源。
    //                         </li>
    //                         <li className="font-secondary mb-10">
    //                             <i className="text-primary mr-2 ti-arrow-circle-right"></i>
    //                             <p className="h5">多样化</p>
    //                             资金是集合投资。这使投资者可以投资更广泛的资产，而他或她个人可能无法投资。投资于各种资产的能力对于任何多元化战略都很重要。
    //                         </li>
    //                         <li className="font-secondary mb-10">
    //                             <i className="text-primary mr-2 ti-arrow-circle-right"></i>
    //                             <p className="h5">即时更新</p>
    //                             基金的业绩会在我们的网站上定期更新。我们还为您提供季度更新，年度报告和年度税收证明。这些将使您与投资保持最新，并提供有关投资的相关税收信息。
    //                         </li>
    //                         <li className="font-secondary mb-10">
    //                             <i className="text-primary mr-2 ti-arrow-circle-right"></i>
    //                             <p className="h5">获得投资</p>
    //                             我们的资金可让您投资可能无法自给自足的资产。我们能够进入一个市场，在这个市场中个人可能很难进行投资。
    //                         </li>
    //                         <li className="font-secondary mb-10">
    //                             <i className="text-primary mr-2 ti-arrow-circle-right"></i>
    //                             <p className="h5">管理优势</p>
    //                             基金的优势之一是我们代表您进行投资管理。我们提供的服务包括有关买卖，付款给您，利息，簿记和其他报告的文档。
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }
}

export default function FundDividedYield() {
    const fundsDict = [
        {id: 0, content: "产品战略", style: "active border-bottom"},
        {id: 1, content: "风险指标与费用", style: "border-bottom"},
        {id: 2, content: "目标投资组合", style: "border-bottom"},
        {id: 3, content: "分红", style: "border-bottom"},
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
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h3 className="mb-10">Carrick NZ&AU Dividend Yield Fund</h3>

                            <div className="mb-md-50">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="bg-gray p-5 rounded mb-60">
                                            <h4 className="text-dark font-primary mb-30">产品描述</h4>
                                            <div>
                                                <ul className="d-inline-block pl-0">
                                                    <li className="font-secondary mb-10">
                                                        1.
                                                        凯利纽澳股息收益基金是由大约25-35只新西兰和澳大利亚上市公司高分红股票组成的精选组合。
                                                    </li>
                                                    <li className="font-secondary mb-10">
                                                        2.
                                                        选择这些股票是因为它们具有诱人的高股息收益率和未来增长前景。该基金选择保持高水准股息收益率和股票自身的资本价值的优质纽澳上市股票。该基金的目标是取得长期平均年化大于3％的绝对收益。
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <LazyImage
                                            src={imageDividendYield}
                                            alt="image of benefit"
                                            placeholder={({imageProps, ref}) => (
                                                <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                            )}
                                            actual={({imageProps}) => (
                                                <img className="img-fluid rounded" {...imageProps} />
                                            )}
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
