/** @format */

import React from "react"
import {Link} from "react-router-dom"
export default function FooterBanner() {
    const bannerBgStyle = {
        color: "#ffffff",
        background: "linear-gradient(90deg, rgba(0,98,204,1) 0%, rgba(39,141,202,1) 50%)",
        filter:
            "progid:DXImageTransform.Microsoft.gradient(startColorstr='#0062cc',endColorstr='#278dca',GradientType=1)",
        fontSize: "30px",
    }
    return (
        <>
            <div className="py-4" style={bannerBgStyle}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 align-self-center">
                            <h3 className="text-white text-center text-md-left">
                                敬请留下您的联系方式，
                                <br />
                                我们会尽快与您取得联系。
                            </h3>
                        </div>
                        <div className="col-lg-6 text-lg-center text-center align-self-center">
                            <Link to="/contact-us" className="btn-sm btn-light" style={{textTransform: "uppercase"}}>
                                联系我们
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
