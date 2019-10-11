/** @format */
import React, {useState} from "react"
import Carousel from "react-bootstrap/Carousel"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
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
                    <LazyImage
                        src={imageBanner1}
                        alt="First slide"
                        style={carouselImgStyle}
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img {...imageProps} />}
                    />
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle}>
                    <LazyImage
                        src={imageBanner2}
                        alt="Second slide"
                        style={carouselImgStyle}
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img {...imageProps} />}
                    />
                </Carousel.Item>
                <Carousel.Item style={carouselItemStyle}>
                    <LazyImage
                        src={imageBanner3}
                        alt="Third slide"
                        style={carouselImgStyle}
                        placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                        actual={({imageProps}) => <img {...imageProps} />}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
