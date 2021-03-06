/** @format */

import React from "react"
import {LazyImage} from "react-lazy-images"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import "../styles/Industry.css"
import pointImage from "../images/industry/point.png"
import laptopImage from "../images/industry/laptop.png"
import communicationImage from "../images/industry/comm.png"
import icon1Image from "../images/industry/ICON1.png"
import icon3Image from "../images/industry/ICON3.png"
import icon5Image from "../images/industry/ICON5.png"

export default function IndustryDevelopment() {
    return (
        <>
            <Helmet>
                <title>行业发展 | Carrick Asset</title>
                <meta name="description" content="Carrick Asset 行业发展" />
            </Helmet>
            <Layout>
                <section className="product section">
                    <div className="container">
                        <div className="row justify-content-center mb-100">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-title section-title-border">行业发展</h2>
                            </div>
                            <div className="col-lg-6 col-md-12 text-left">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={icon1Image} alt="icon1" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h3>行业萌芽</h3>
                                        <p>
                                            FOF起源于20世纪70年代的美国，其最初形式为投资于一系列私募股权基金的基金组合。因为私募股权基金投资门槛较高，大多数投资者无法企及，于是就有机构发行了PE
                                            FOF以降低投资门槛。第一只证券类FOF由先锋基金(Vanguard)于1985年推出，该只共同基金FOF70%的资产投资于股票类基金，30%投资于债权类基金，投资标的均为公司旗下的基金。基金推出后大受欢迎，同时也带动了先锋基金旗下其它基金的销售，1986年末，先锋公司旗下基金规模增长44.23%。
                                        </p>
                                        <p>
                                            1987年，美股经历了2年的疯狂后，遭遇了一次惨重的股灾，这促使投资者开始思考如何根据市场的不同情况配置不同种类的基金。公募基金在股灾中也不断开发新的产品，基金类型在此时期快速增多。市场多变性与基金的多样性促使投资者产生了基金筛选需求，自此FOF的发展有了其客观驱动因素。
                                            同一时期，美国开启了401(K)计划，该计划主要使用雇员与雇主共同缴纳养老金的模式，为之后养老金规模扩大以及入市都打下了基础。养老金资金对风险敏感度极高，FOF分散风险、追求稳健收益的属性与其需求不谋而合。401(K)计划无疑刺激了FOF基金的发展，FOF基金真正开始走上了发展之路。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={pointImage} alt="point" />
                            </div>
                        </div>
                        <div className="row mb-100">
                            <div className="col-lg-6">
                                <img src={laptopImage} alt="point" />
                            </div>
                            <div className="col-lg-6 col-md-12 text-left">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={icon3Image} alt="icon3" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h3>发展成熟阶段</h3>
                                        <p>
                                            20世纪90年代，美国企业养老金计划由固定待遇型计划(DBPlan)逐渐向固定供款型计划(DCPlan)转变，这促使越来越多的养老金计划入市。根据美国投资公司行业协会(ICI)统计，约60%退休投资计划参与者(以退休为目标的定向投资计划)持有目标日期基金(Target
                                            Date
                                            Fund，以固定日期为目标的定向投资计划)，这部分资金以固定的时间点提取，为基金的发展带来了稳定的资金来源。
                                        </p>
                                        <p>
                                            1996年，美国出台的全国证券市场改善法案取消了对公募基金公司发行FOF产品的限制。共同基金FOF数量由1995年的36只激增至1997年的94只，总资产管理规模增长137%至215亿美元。
                                            同时，经过10年的长期牛市，在90年代后期，资本市场的火热达到了巅峰程度，也就是大家熟知的互联网泡沫(Dot-com
                                            Bubble)。资本市场的高收益与基金行业的壮大给FOF基金的发展提供了足够多的底层资产。在此期间，FOF基金的管理规模占共同基金总规模的比重进入1%的数量级。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 text-left">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={icon5Image} alt="icon5" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h3>爆发式增长</h3>
                                        <p>
                                            2000年至今，共同基金FOF进入了一个爆发式增长的阶段。自2000年开始，FOF基金数量增长了627%，管理规模扩大了惊人的3014%。经过了1990年前的萌芽与20世纪90年代一系列的政策支持与市场准备，共同基金FOF的土壤真正成熟了，并迎来了一个爆发式的增长。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={communicationImage} alt="point" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
