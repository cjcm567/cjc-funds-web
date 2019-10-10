/** @format */
import React from "react"

export default function InvestmentFlow() {
    const cardHeightStyle = {
        minHeight: "40vh",
    }
    return (
        <>
            <section className="bg-gray section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h2 className="section-title">投资流程</h2>
                        </div>
                        {/* team member */}
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="pl-3 pt-3" style={cardHeightStyle}>
                                    <p>高品质的管理</p>
                                    <p>竞争优势</p>
                                    <p>利润和收入增长</p>
                                    <p>行业顺风</p>
                                    <p>低传动比</p>
                                    <p>大量现金转换</p>
                                    <p>大量的再投资机会</p>
                                </div>
                                <div className="card-body card-body-2 pb-0 px-4  text-center border-top">
                                    <h5 className="card-title">寻找符合条件的公司</h5>
                                    <h6 className="text-color mb-30">第一步</h6>
                                </div>
                            </div>
                        </div>
                        {/* team member */}
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="pl-3 pt-3" style={cardHeightStyle}>
                                    <p>进行情景分析</p>
                                    <p>预测财务</p>
                                    <p>评估业务质量，清单得分和流动性</p>
                                    <p>将折价/合理估值与同业和历史进行比较</p>
                                    <p>建立价格目标和排名</p>
                                    <p>与竞争对手、供应商、客户和其他利益相关者进行渠道检查</p>
                                </div>
                                <div className="card-body card-body-2 pb-0 px-4 text-center border-top">
                                    <h5 className="card-title">研究公司具体情况</h5>
                                    <h6 className="text-color mb-30">第二步</h6>
                                </div>
                            </div>
                        </div>
                        {/* team member */}
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="pl-3 pt-3" style={cardHeightStyle}>
                                    <p>通过确定信念水平和预期收益进行加权</p>
                                    <p>无现金头寸限制</p>
                                    <p>包括对冲货币和市场风险</p>
                                </div>
                                <div className="card-body card-body-2 pb-0 px-4 text-center border-top">
                                    <h5 className="card-title">建立投资组合</h5>
                                    <h6 className="text-color mb-30">第三步</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="pl-3 pt-3" style={cardHeightStyle}>
                                    <p>审查业务质量以及最近企业公告的含义</p>
                                    <p>计算收益和投资组合权重</p>
                                    <p>维护全面的投资组合仪表板</p>
                                    <p>每两周一次的投资委员会会议</p>
                                    <p>每周的投资团队会议</p>
                                    <p>积极监测行业发展</p>
                                </div>
                                <div className="card-body card-body-2 pb-0 px-4 text-center border-top">
                                    <h5 className="card-title">评估业务</h5>
                                    <h6 className="text-color mb-30">第四步</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
