/** @format */

import React, {useState} from "react"
import Carousel from "react-bootstrap/Carousel"
import imageBanner1 from "../images/banner/banner-1.jpg"
import imageBanner2 from "../images/banner/banner-2.jpg"
import imageBanner3 from "../images/banner/banner-3.jpg"

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(null)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
        setDirection(e.direction)
    }

    const carouselItemStyle = {
        width: "100vw",
        height: "80vh",
    }

    const carouselImgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }

    return (
        <>
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item style={carouselItemStyle}>
                    <img className="d-block w-100" style={carouselImgStyle} src={imageBanner1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle}>
                    <img className="d-block w-100" style={carouselImgStyle} src={imageBanner2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle}>
                    <img className="d-block w-100" style={carouselImgStyle} src={imageBanner3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
