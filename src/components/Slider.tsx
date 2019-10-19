/** @format */

import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import imageBanner1 from "../images/banner/banner-1.jpg"
import imageBanner2 from "../images/banner/banner-2.jpg"
import imageBanner3 from "../images/banner/banner-3.jpg"
import imageBanner5 from "../images/banner/banner-5.jpg"
import imageBanner6 from "../images/banner/banner-6.jpg"

export default function Slider() {
    return (
        <>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false}>
                <div>
                    <img src={imageBanner2} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imageBanner1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imageBanner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={imageBanner5} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={imageBanner6} />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        </>
    )
}
