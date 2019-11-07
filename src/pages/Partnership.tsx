/** @format */

import React from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import logoAsb from "../images/partnership/asb-logo.png"
import logoMinterEllison from "../images/partnership/minter-ellison-logo.png"
import logoPwc from "../images/partnership/pwc-logo.png"
import logoPublicTrust from "../images/partnership/public-trust-logo.png"

export default function Partnership() {
    return (
        <>
            <Helmet>
                <title>合作机构 | Carrick Asset</title>
                <meta
                    name="description"
                    content="Carrick Just Asset Management Limited（凯利资产管理）在追求投资收益的同时，合规文化一直在公司经营发展过程中被放在首要位置。"
                />
            </Helmet>
            <Layout>
                <section className="section pb-0 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="section-title-sm text-center"></h5>
                                <h2 className="section-title section-title-border text-center">合作机构</h2>
                                <p>
                                    Carrick Just Asset Management
                                    Limited（凯利资产管理）在追求投资收益的同时，合规文化一直在公司经营发展过程中被放在首要位置。
                                </p>
                                <p>
                                    公司符合新西兰政府及金融市场管理部门的相关监管要求，并具备相应的金融牌照资质，可以合法合规的提供旗下基金产品给合格的投资者。
                                </p>
                                <p>与我们合作的外部机构均为新西兰乃至国际一流专业机构，具体合作方如下：</p>
                            </div>
                        </div>
                        <div className="row mb-50 text-center">
                            <div className="col-lg-5 col-md-5 pr-0 align-self-center">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.publictrust.co.nz/">
                                    <img src={logoPublicTrust} className="img-fluid w-75" alt="logo of Public Trust" />
                                </a>
                            </div>
                            <div className="col-lg-7 col-md-7 align-self-center pl-0 text-left">
                                <div className="testimonial-slider p-5">
                                    <div className="outline-0">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.publictrust.co.nz/">
                                            <h4 className="font-weight-normal">Public Trust</h4>
                                        </a>
                                        <h6 className="font-secondary text-color">信托托管机构</h6>
                                        <p className="text-dark">
                                            新西兰政府机构信托，自从 1873 年成立以来，Public Trust
                                            一直秉承着照顾新西兰人利益的悠久传统。
                                        </p>
                                        <p className="text-dark">
                                            作为一家政府机构，Public Trust
                                            用安全说话，确保客户资金安全并不受公司自身经营状况的影响，真正实现客户资金与本公司资金的完全分离。
                                        </p>
                                        <p className="text-dark">Public Trust 同时是新西兰最大的信托管理服务提供商。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50 text-center">
                            <div className="col-lg-5 col-md-5 pr-0 align-self-center">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.pwc.co.nz/">
                                    <img src={logoPwc} alt="logo of PwC" className="img-fluid w-75 text-right" />
                                </a>
                            </div>
                            <div className="col-lg-7 col-md-7 align-self-center pl-0 text-left">
                                <div className="testimonial-slider p-5">
                                    <div className="outline-0">
                                        {/* <i className="testimonial-icon ti-quote-left"></i> */}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.pwc.co.nz/">
                                            <h4 className="font-weight-normal">PwC 普华永道</h4>
                                        </a>
                                        <h6 className="font-secondary text-color">审计合作机构</h6>
                                        <p className="text-dark">
                                            全球顶级会计师事务所，是四大国际会计师事务所之一，行业专业知识的深度是无可置疑。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50 text-center">
                            <div className="col-lg-5 col-md-5 pr-0 align-self-center">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.asb.co.nz">
                                    <img src={logoAsb} alt="logo of ASB" className="img-fluid w-75" />
                                </a>
                            </div>
                            <div className="col-lg-7 col-md-7 align-self-center pl-0 text-left">
                                <div className="testimonial-slider p-5">
                                    <div className="outline-0">
                                        {/* <i className="testimonial-icon ti-quote-left"></i> */}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.asb.co.nz">
                                            <h4 className="font-weight-normal">ASB Bank</h4>
                                        </a>
                                        <h6 className="font-secondary text-color">运营合作银行</h6>
                                        <p className="text-dark">
                                            新西兰当地主流银行，新西兰四大银行之一，全称是 Auckland Saving Bank
                                            即奥克兰储蓄银行。
                                        </p>
                                        <p className="text-dark">
                                            ASB 银行是被澳大利亚联邦银行拥有和控股的在新西兰营业的银行。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50 text-center">
                            <div className="col-lg-5 col-md-5 pr-0 align-self-center">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.minterellison.com/">
                                    <img
                                        src={logoMinterEllison}
                                        alt="logo of Minter Ellison"
                                        className="img-fluid w-75"
                                    />
                                </a>
                            </div>
                            <div className="col-lg-7 col-md-7 align-self-center pl-0 text-left">
                                <div className="testimonial-slider p-5">
                                    <div className="outline-0">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.minterellison.com/">
                                            <h4 className="font-weight-normal">Minter Ellison 铭德律师事务所</h4>
                                        </a>
                                        <h6 className="font-secondary text-color">法务合作机构</h6>
                                        <p className="text-dark">
                                            国际知名律所，2017
                                            年新西兰最佳年度律师事务所，拥有众多的专业持牌律师和丰富的行业经验，尤其擅长提供纽澳金融领域方面的法律服务。
                                        </p>
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
