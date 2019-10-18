/** @format */
import React, {useState} from "react"
import Carousel from "react-bootstrap/Carousel"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageBanner1 from "../images/banner/banner-1.jpg"
import imageBanner2 from "../images/banner/banner-2.jpg"
import imageBanner3 from "../images/banner/banner-3.jpg"
import imageBanner5 from "../images/banner/banner-5.jpg"
import imageBanner6 from "../images/banner/banner-6.jpg"

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(null)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
        setDirection(e.direction)
    }

    const carouselItemStyle = {
        width: "100vw",
        height: "60vh",
    }

    const carouselImgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }

    return (
        <>
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item style={carouselItemStyle} className="overlay">
                    <img src={imageBanner2} alt="banner image 1" style={carouselImgStyle} />
                    <Carousel.Caption className="text-right" style={{paddingBottom: "8rem"}}>
                        <h1 className="text-white">着眼未来</h1>
                        <h1 className="text-white">凯利让您看得更远</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle} className="overlay">
                    <img src={imageBanner1} alt="banner image 2" style={carouselImgStyle} />
                    <Carousel.Caption className="text-left" style={{paddingBottom: "8rem"}}>
                        <h1 style={{color: "#FFFFFF"}}>用时间证明价值</h1>
                        <h1 style={{color: "#FFFFFF"}}>用收益回报信任</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle} className="overlay">
                    <img src={imageBanner3} alt="banner image 3" style={carouselImgStyle} />
                    <Carousel.Caption className="text-left" style={{paddingBottom: "8rem"}}>
                        <h1 className="text-white">因专注</h1>
                        <h1 className="text-white">而卓越</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle} className="overlay">
                    <img src={imageBanner5} alt="banner image 4" style={carouselImgStyle} />
                    <Carousel.Caption className="text-right" style={{paddingBottom: "8rem"}}>
                        <h1 className="text-white">智信相伴</h1>
                        <h1 className="text-white">共赢未来</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle} className="overlay">
                    <img src={imageBanner6} alt="banner image 5" style={carouselImgStyle} />
                    <Carousel.Caption className="text-left" style={{paddingBottom: "8rem"}}>
                        <h1 className="text-white">专业创造财富</h1>
                        <h1 className="text-white">诚信开启未来</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
