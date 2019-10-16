/** @format */

import React from "react"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import logoAsb from "../images/aboutus/logo-asb.svg"
import logoPwc from "../images/aboutus/logo-pwc.png"
import logoPublicTrust from "../images/aboutus/logo-public-trust.png"
import logoMinterEllison from "../images/aboutus/logo-minter-ellison.png"
import imageCeo from "../images/aboutus/ceo.jpg"

export default function Partner() {
    const ceoStyle = {
        backgroundImage: `url(${imageCeo})`,
    }
    return (
        <>
            <section className="clients section bg-secondary overlay-dark" style={ceoStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-left">
                            {/* <h5 className="section-title-sm text-color">Our Some</h5> */}
                            <h2 className="text-white mb-20">合作机构</h2>
                            <p className="text-white">
                                Carrick Just Asset Management
                                Limited（凯利资产管理）在追求投资收益的同时，合规文化一直在公司经营发展过程中被放在首要位置。公司符合新西兰政府及金融市场管理部门的相关监管要求，并具备相应的金融牌照资质，可以合法合规的提供旗下基金产品给合格的投资者。
                            </p>
                            <p className="text-white">与我们合作的外部机构均为新西兰乃至国际一流专业机构：</p>
                            <p className="text-white">
                                <strong>运营合作银行</strong>：ASB Bank---新西兰当地主流银行
                            </p>
                            <p className="text-white">
                                <strong>信托托管机构</strong>：Public
                                Trust---新西兰政府机构信托，确保客户资金安全并不受公司自身经营状况的影响，真正实现客户资金与本公司资金的完全分离。
                            </p>
                            <p className="text-white">
                                <strong>审计合作机构</strong>：PwC（普华永道）---全球顶级会计师事务所
                            </p>
                            <p className="text-white">
                                <strong>法务合作机构</strong>：Minter Ellison（铭德律师事务所）---国际知名律所，2017
                                新西兰年度律师事务所
                            </p>
                        </div>
                        <div className="col-lg-6 justify-content-center">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-12 mb-50">
                                    <ul>
                                        <li className="text-center mb-50 py-5">
                                            <a href="https://www.asb.co.nz">
                                                <LazyImage
                                                    src={logoAsb}
                                                    alt="ASB Bank Logo"
                                                    placeholder={({imageProps, ref}) => (
                                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                                    )}
                                                    actual={({imageProps}) => (
                                                        <img className="card-img-top" height="100px" {...imageProps} />
                                                    )}
                                                />
                                            </a>
                                        </li>
                                        <li className="text-center mb-3">
                                            <a href="https://www.pwc.co.nz/">
                                                <img src={logoPwc} alt="logoPwc" style={{height: "100px"}} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <ul>
                                        <li className="text-center mb-100 py-5">
                                            <a href="https://www.publictrust.co.nz/">
                                                <img
                                                    src={logoPublicTrust}
                                                    alt="logoPublicTrust"
                                                    style={{height: "160px"}}
                                                />
                                            </a>
                                        </li>
                                        <li className="text-center mb-3">
                                            <a href="https://www.minterellison.com/">
                                                <img
                                                    src={logoMinterEllison}
                                                    alt="logoMinterEllison"
                                                    style={{height: "100px"}}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
