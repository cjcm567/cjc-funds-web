/** @format */

import React from "react"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import logoAsb from "../images/aboutus/logo-asb.png"
import logoPwc from "../images/aboutus/logo-pwc.png"
import logoPublicTrust from "../images/aboutus/logo-public-trust.png"
import logoMinterEllison from "../images/aboutus/logo-minter-ellison.png"
import imageCeo from "../images/aboutus/ceo.jpg"
import {Link} from "react-router-dom"

export default function Partner() {
    const ceoStyle = {
        backgroundImage: `url(${imageCeo})`,
    }
    return (
        <>
            <section className="clients section bg-secondary overlay-dark" style={ceoStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            {/* <h5 className="section-title-sm text-color">Our Some</h5> */}
                            <h2 className="text-white mb-20 text-center text-md-left">合作机构</h2>
                            <p className="text-white mb-50 text-left ">
                                Carrick Just Asset Management
                                Limited（凯利资产管理）在追求投资收益的同时，合规文化一直在公司经营发展过程中被放在首要位置。公司符合新西兰政府及金融市场管理部门的相关监管要求，并具备相应的金融牌照资质，可以合法合规的提供旗下基金产品给合格的投资者。
                            </p>
                            <div className="text-center text-md-left">
                                <Link to="/partnership" className="btn btn-outline-light text-uppercase text-white">
                                    more details
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 justify-content-center">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-12 mb-50">
                                    <ul style={{padding: "0 2rem 0 2rem"}}>
                                        <li className="text-center mb-50 py-5">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.asb.co.nz">
                                                <LazyImage
                                                    src={logoAsb}
                                                    alt="ASB Bank Logo"
                                                    placeholder={({imageProps, ref}) => (
                                                        <img ref={ref} src={imagePreloader} alt={imageProps.alt} />
                                                    )}
                                                    actual={({imageProps}) => (
                                                        <img className="card-img-top w-75" {...imageProps} />
                                                    )}
                                                />
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.pwc.co.nz/">
                                                <img src={logoPwc} alt="logoPwc" style={{height: "100px"}} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <ul style={{padding: "0 2rem 0 2rem"}}>
                                        <li className="text-center mb-50 py-5">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.publictrust.co.nz/">
                                                <img
                                                    src={logoPublicTrust}
                                                    alt="logoPublicTrust"
                                                    style={{height: "160px"}}
                                                />
                                            </a>
                                        </li>
                                        <li className="text-center mb-3">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.minterellison.com/">
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
