/** @format */

import React from "react"
import Layout from "../components/layout"
import imageProfile from "../images/aboutus/profile.jpg"

export default function Manager() {
    const cardHeightStyle = {
        minHeight: "36vh",
    }

    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            {/* sidebar */}
                            <aside className="col-lg-4">
                                {/* team member info */}
                                <div className="bg-gray rounded mb-50">
                                    <img className="img-fluid w-100 rounded-top" src={imageProfile} alt="team member" />
                                    <div className="py-2 px-4 pb-3">
                                        <div className="py-3 border-bottom">
                                            <p className="d-inline-block font-primary m-0 px-1">
                                                新西兰梅西大学金融专业硕士
                                            </p>
                                        </div>
                                        <div className="py-3 border-bottom">
                                            <p className="d-inline-block font-primary m-0 px-1">
                                                澳洲金融协会(AFMA)会员
                                            </p>
                                        </div>
                                        <div className="py-3 border-bottom">
                                            <p className="d-inline-block font-primary m-0 px-1">
                                                新西兰方圆资产基金经理和策略师
                                            </p>
                                        </div>
                                        <div className="py-3 border-bottom">
                                            <p className="d-inline-block font-primary m-0 px-1">
                                                国泰君安(香港)海外发展新西兰特邀投资专家
                                            </p>
                                        </div>
                                        <div className="py-3">
                                            <p className="d-inline-block font-primary m-0 px-1">
                                                新西兰大洋资产管理有限公司基金经理
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Brochure */}
                                <div className="rounded border py-3 px-4 mb-50">
                                    <i
                                        className="d-inline-block mr-1 text-dark ti-files"
                                        style={{fontSize: "20px;"}}></i>
                                    <h4 className="mb-1 d-inline-block">Professional CV</h4>
                                    <a className="font-secondary text-color d-block ml-4" href="#">
                                        Download pdf
                                    </a>
                                </div>
                            </aside>
                            {/* sidebar team member details */}
                            <div className="col-lg-8">
                                <div>
                                    <h2>高飞</h2>
                                    <h3 className="text-primary mb-30">基金经理人</h3>
                                    <p className="h5 mb-40">
                                        高飞作为中国第一代股民，拥有近30年的证券投资交易经验和近 20 年的外汇投资经验。
                                    </p>
                                    <div className="row">
                                        {/* contact info */}
                                        <div className="col-md-6">
                                            <h4>联系方式</h4>
                                            <ul className="pl-0 mb-40">
                                                <li className="font-secondary text-color my-3">
                                                    <i className="mr-3 ti-mobile"></i>+88 525 325 22
                                                </li>
                                                <li className="font-secondary text-color my-3">
                                                    <i className="mr-3 ti-email"></i>philipwilson@biztrox.com
                                                </li>
                                                <li className="font-secondary text-color my-3">
                                                    <i className="mr-3 ti-location-pin"></i>2/A Southampton, Sandiago,
                                                    USA.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4>工作履历</h4>
                                    <p className="h5">曾任</p>
                                    <p>新西兰方圆资产管理有限公司基金经理和策略师</p>
                                    <p>中国国泰君安香港公司海外发展部新西兰特邀投资专家</p>
                                    <p> 新西兰大洋资产管理有限公司基金经理。</p>
                                    <h4>专业分析</h4>
                                    <p>丰富的金融实战经验和扎实的金融理论使高飞对基金管理投资拥有自己独到的见解</p>
                                    <div className="p-3 bg-light">
                                        <h5 className="text-dark font-primary mb-10">人和人性</h5>
                                        <p className="font-secondary mb-10">
                                            市场的构成主体包括生态环境的搭建者比如国家、政府和相应管理机构、各路资本提供者、各路大小不同的投资资本、各路大小不同的上市企业、来自于五湖四海的各路投资人，以及各路大小不同的金融投资信息和服务公司。所有组织、机构、个人都基于自己对于市场的理解做出认为最有利于自己的行为规范和买卖决策，但始终有些组织、机构、个人可以在过程中进化，而有些却成为市场的养料，所谓物竞天择、适者生存，金融市场有其自身的生态环境，大鱼吃小鱼、小鱼吃虾米确实存在，而这是引起市场价格日常波动的重要因素，而在某一个市场涨跌背后隐含的都是人性，人和人性始终是这个市场的最核心所在。
                                        </p>
                                    </div>
                                    <div className="p-3 bg-silver">
                                        <h5 className="text-dark font-primary mb-10">资本周期</h5>
                                        <p className="font-secondary mb-10">
                                            资本存在投资偏好，也就是所谓周期，即便经营状况完全一致的同一家企业在不同时点市场都会给出不同定价。
                                        </p>
                                    </div>
                                    <div className="p-3 bg-light">
                                        <h5 className="text-dark font-primary mb-10">流动性</h5>
                                        <p className="font-secondary mb-10">
                                            如果不能实现对企业的绝对控制，保持适当的市场流动性就至关重要。
                                        </p>
                                    </div>
                                    <div className="p-3 bg-silver">
                                        <h5 className="text-dark font-primary mb-10">分散投资</h5>
                                        <p className="font-secondary mb-10">
                                            适当的分散投资，也就是构筑投资组合是对抗企业超预期风险的良策，但依然很难对抗市场的非系统性风险，基金经理超越平凡的洞察力可以帮助回避一些非系统性风险，但依然无法完全避免。
                                        </p>
                                    </div>
                                    <div className="p-3 bg-light">
                                        <h5 className="text-dark font-primary mb-10">资本市场是有效的</h5>
                                        <p className="font-secondary mb-10">
                                            资本市场是有效的。所以在当时当下市场并不存在所谓的高估和低估，所有的企业定价俱都合理，任何定价都是当时，当下市场全体参与人和参与资本基于过去，现在和未来所有可预期的影响市场定价全部可变因子的综合考量和博弈结果，因此有机会超越市场平均回报的可能途径。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </Layout>
        </>
    )
}
