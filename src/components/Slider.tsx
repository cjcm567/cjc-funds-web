/** @format */

import React, {CSSProperties} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import imageBanner1 from "../images/banner/banner-1.jpg"
import imageBanner2 from "../images/banner/banner-2.jpg"
import imageBanner3 from "../images/banner/banner-3.jpg"
import imageBanner5 from "../images/banner/banner-5.jpg"
import imageBanner6 from "../images/banner/banner-6.jpg"
import imageBanner7 from "../images/banner/banner-7.jpg"

export default function Slider() {
    const legendLeftStyle: CSSProperties = {
        transition: "all .5s ease-in-out",
        position: "absolute",
        bottom: "40%",
        left: "50%",
        marginLeft: "-35%",
        borderRadius: "10px",
        color: "#fff",
        padding: "10px",
        textAlign: "left",
    }
    const legendRightStyle: CSSProperties = {
        transition: "all .5s ease-in-out",
        position: "absolute",
        bottom: "40%",
        left: "50%",
        marginLeft: "5%",
        borderRadius: "10px",
        color: "#fff",
        padding: "10px",
        textAlign: "left",
        fontWeight: "bold",
    }

    return (
        <>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false}>
                <div className="overlay">
                    <img src={imageBanner2} height="600px" width="100%" style={{objectFit: "cover"}} />
                    <div style={legendRightStyle}>
                        <h1 className="text-white">着眼未来</h1>
                        <h1 className="text-white">凯利让您看得更远</h1>
                    </div>
                </div>
                <div className="overlay">
                    <img src={imageBanner1} height="600px" width="100%" style={{objectFit: "cover"}} />
                    <div style={legendLeftStyle}>
                        <h1 className="text-white">用时间证明价值</h1>
                        <h1 className="text-white">用收益回报信任</h1>
                    </div>
                </div>
                <div className="overlay">
                    <img src={imageBanner3} height="600px" width="100%" style={{objectFit: "cover"}} />
                    <div style={legendLeftStyle}>
                        <h1 className="text-white">因专注</h1>
                        <h1 className="text-white">而卓越</h1>
                    </div>
                </div>
                <div className="overlay">
                    <img src={imageBanner5} height="600px" width="100%" style={{objectFit: "cover"}} />
                    <div style={legendRightStyle}>
                        <h1 className="text-white">智信相伴</h1>
                        <h1 className="text-white">共赢未来</h1>
                    </div>
                </div>
                <div className="overlay">
                    <img src={imageBanner6} height="600px" width="100%" style={{objectFit: "cover"}} />
                    <div style={legendLeftStyle}>
                        <h1 className="text-white">专业创造财富</h1>
                        <h1 className="text-white">诚信开启未来</h1>
                    </div>
                </div>
                {/* <div className="overlay">
                    <img src={imageBanner7} height="600px" width="100%" style={{objectFit: "cover"}} />
                    <div style={legendRightStyle}>
                        <h1 className="text-white">专业创造财富</h1>
                        <h1 className="text-white">诚信开启未来</h1>
                    </div>
                </div> */}
            </Carousel>
        </>
    )
}
