/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageArrowTop from "../images/funds/arrow-top.png"
import imageArrowBottom from "../images/funds/arrow-bottom.png"
import imageProcess from "../images/funds/process.png"
import fundsOverview from "../data/fundsData.json"

const fundsCard = fundsOverview.map(fundsItem => (
    <div className="col-lg-4 col-sm-6 mb-5" key={fundsItem.props}>
        <div className="card text-center">
            <h4 className="card-title pt-3">{fundsItem.title}</h4>
            <div className="card-img-wrapper">
                <LazyImage
                    src={require(`../images/funds/${fundsItem.props}.jpg`)}
                    alt={fundsItem.props}
                    placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                    actual={({imageProps}) => <img className="card-img-top rounded-0" height="200px" {...imageProps} />}
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
function FundsProssComponent(isShowId: number) {}
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
                                {/* <h5 className="section-title-sm">我们倾向于投资易于理解和管理的证券</h5> */}
                                <h2 className="section-title section-title-border mb-xl-150-lg-100">投资过程</h2>
                            </div>
                            <div>
                                <LazyImage
                                    src={imageProcess}
                                    alt="image of Arrow Top"
                                    placeholder={({imageProps, ref}) => (
                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                    )}
                                    actual={({imageProps}) => <img height="300px" {...imageProps} />}
                                />
                            </div>
                            {/* process step1 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">1</div>
                                    <h5 className="text-primary">项目策划，寻找符合以下条件的公司</h5>
                                    <p>高品质的管理</p>
                                    <p>竞争优势</p>
                                    <p>利润和收入增长</p>
                                    <p>行业顺风</p>
                                    <p>低传动比</p>
                                    <p>大量现金转换</p>
                                    <p>大量的再投资机会</p>
                                </div>
                            </div>
                            {/* process step2 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">2</div>
                                    <h5 className="text-primary">研究公司具体情况</h5>
                                    <p>进行情景分析,现场调研</p>
                                    <p>预测财务</p>
                                    <p>评估业务质量，清单得分和流动性</p>
                                    <p>将折价/合理估值与同业和历史进行比较</p>
                                    <p>建立价格目标和排名</p>
                                    <p>与竞争对手，供应商，客户和其他利益相关者进行渠道检查</p>
                                </div>
                            </div>
                            {/* process step3 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">3</div>
                                    <h5 className="text-primary">建立投资组合</h5>
                                    <p>通过确定信念水平和预期收益进行加权</p>
                                    <p>无现金头寸限制</p>
                                    <p>包括对冲货币和市场风险</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">4</div>
                                    <h5 className="text-primary">项目可能性分析与评估</h5>
                                    <p>审查业务质量以及最近企业公告的含义</p>
                                    <p>计算收益和投资组合权重</p>
                                    <p>维护全面的投资组合仪表板</p>
                                    <p>每两周一次的投资委员会会议和每周的投资团队会议</p>
                                    <p>积极监测行业发展</p>
                                </div>
                            </div>
                            {/* process step2 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">5</div>
                                    <h5 className="text-primary">投资决策</h5>
                                    <p>通过凯利资本管理的资深投资团队，对投资标的进行最终整合与配置</p>
                                    <p>根据宏观经济形势及市场状况，决定配置方向</p>
                                    <p>结合资料研究及实地调研考察等，对待研究标的进行进一步的筛选</p>
                                    <p>选择合适的时机买入</p>
                                </div>
                            </div>
                            {/* process step3 */}
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">6</div>
                                    <h5 className="text-primary">签署投资合同与拨付资金</h5>
                                    <p>与投资人签署合同并根据合同内的规定，在相应的时间内进行转款</p>
                                    <p>严格按照合同中的协议条款，在规定的时间内进行资产建立</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-md-50">
                                <LazyImage
                                    src={imageArrowBottom}
                                    alt="image of Arrow Bottom"
                                    placeholder={({imageProps, ref}) => (
                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                    )}
                                    actual={({imageProps}) => <img className="arrow-bottom" {...imageProps} />}
                                />{" "}
                                <div className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative">
                                    <div className="process-item-number">7</div>
                                    <h5 className="text-primary">投后管理</h5>
                                    <p>投资经理每周对所管理的投资组合进行评估，以决定是否调整以及如何调整</p>
                                    <p>投资决策委员会定期讨论公司所有的投资组合，并提出调整意见</p>
                                    <p>风险控制委员会定期对公司内部合规及投资组合风险进行评估，并提出调整意见</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
