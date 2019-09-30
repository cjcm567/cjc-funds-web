/** @format */

import React, {useState} from "react"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"
import Image1 from "../images/funds/1.jpg"
import Image2 from "../images/funds/2.jpg"
import Image3 from "../images/funds/3.jpg"

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(null)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
        setDirection(e.direction)
    }

    return (
        <Layout>
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image2} alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image3} alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Layout>
    )
}
