/** @format */

import React, {lazy, Suspense} from "react"
import {Link, RouteComponentProps} from "react-router-dom"
import Layout from "../components/layout"
// import Chart from "../components/Chart"
import imageProfile from "../images/aboutus/profile.jpg"
// const InvestmentFlowComponent = lazy(() => import("../components/InvestmentFlow"))
import teamObject from "../data/teamData.json"
type TParams = {props: string}

export default function Manager(props: RouteComponentProps<TParams>) {
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
                                    <a className="font-secondary text-color d-block ml-4">Download pdf</a>
                                </div>
                            </aside>
                            {/* sidebar team member details */}
                            <div className="col-lg-8">
                                <div>
                                    <h2>Eric Zheng</h2>
                                    <h3 className="text-primary mb-30">执行董事</h3>
                                    <p className="h5 mb-40">拥有近20年的海外金融市场工作经验和管理背景</p>
                                    {/* <div className="row"> */}
                                    <h4>简介</h4>
                                    <p>从事过交易、风控、销售、投资者教育等多个领域</p>
                                    <p>曾担任过新西兰知名上市金融公司销售部负责人</p>
                                    <p>对金融行业格局、前瞻战略和行业管理有着独道见解</p>
                                    {/* </div> */}
                                </div>
                                <div>
                                    <h2>Shone Shen</h2>
                                    <h3 className="text-primary mb-30">董事</h3>
                                    <p className="h5 mb-40">拥有近15年的金融行业从业背景</p>
                                    {/* <div className="row"> */}
                                    <h4>简介</h4>
                                    <p>对于销售以及团队建设有着丰富的实战经验</p>
                                    <p>
                                        熟悉上下游渠道关系的搭建和维护，擅于在合作双方实现双赢的前提下，将业务相关成本降到最低
                                    </p>
                                    <p>作为公司董事对公司利润提升有着重要作用</p>
                                    {/* </div> */}
                                </div>
                                <div>
                                    <h2>Jimmy Koh</h2>
                                    <h3 className="text-primary mb-30">风控经理</h3>
                                    <p className="h5 mb-40">
                                        拥有超过30年的新西兰、新加坡等国际一流金融从业经验，国际视野广阔
                                    </p>
                                    {/* <div className="row"> */}
                                    <h4>简介</h4>
                                    <p>曾经获得过CFA国际注册金融分析师专业资质</p>
                                    <p>负责公司外联、国际业务和新项目的引入</p>
                                    {/* </div> */}
                                </div>
                                <div>
                                    <h2>高飞</h2>
                                    <h3 className="text-primary mb-30">基金经理</h3>
                                    <p className="h5 mb-40">
                                        高飞作为中国第一代股民，拥有近 30 年的证券投资交易经验和近 20 年的外汇投资经验。
                                    </p>
                                    {/*<div className="row">
                                        {/* contact info */}
                                    {/*<div className="col-md-6">
                                            <h4>联系方式</h4>
                                            <ul className="pl-0 mb-40">
                                                <li className="font-secondary text-color my-3">
                                                    <i className="mr-3 ti-mobile"></i>+88 525 325 22
                                                </li> 
                                                <li className="font-secondary text-color my-3">
                                                    <i className="mr-3 ti-email"></i>fei.gao@carrick
                                                </li>
                                                 <li className="font-secondary text-color my-3">
                                                    <i className="mr-3 ti-location-pin"></i>2/A Southampton, Sandiago,
                                                    USA.
                                                </li> 
                                            </ul>
                                        </div>
                                    </div>*/}
                                    {/* <Chart options={options} /> */}
                                    <h4>简介</h4>
                                    <p>新西兰方圆资产管理有限公司基金经理和策略师</p>
                                    <p>中国国泰君安香港公司海外发展部新西兰特邀投资专家</p>
                                    <p> 新西兰大洋资产管理有限公司基金经理。</p>
                                    {/* <h4>专业分析</h4>
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
                                        </p> */}
                                </div>
                                <div>
                                    <h2>Mark Fan</h2>
                                    <h3 className="text-primary mb-30">合规经理</h3>
                                    <p className="h5 mb-40">拥有近10年财务金融领域资深专业人士</p>
                                    {/* <div className="row"> */}
                                    <h4>简介</h4>
                                    <p>曾就职于PwC普华永道和九鼎投资等多家知名国际一流金融机构</p>
                                    <p>南开大学研究生毕业，国际注册反洗钱专家，国际认证内部审计师</p>
                                    <p>擅长合规、风控等专业领域，Mark将为凯利资产管理的不断成长保驾护航</p>
                                    {/* </div> */}
                                </div>
                                <div>
                                    <h2>Summer Xia</h2>
                                    <h3 className="text-primary mb-30">客户关系经理</h3>
                                    <p className="h5 mb-40">多年金融行业前端客户管理和后台数据管理等丰富工作经验</p>
                                    {/* <div className="row"> */}
                                    <h4>简介</h4>
                                    <p>
                                        其在客户大数据分析、利用互联网前沿技术为客户提供高附加值服务和精准营销等方面具有领先的市场思维
                                    </p>
                                    <p>与客户沟通顺畅，积极处理客户的紧急需求，与客户保持良好的长期合作关系</p>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <InvestmentFlow /> */}
            </Layout>
        </>
    )
}
