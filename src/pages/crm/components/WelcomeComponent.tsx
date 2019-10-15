/** @format */

import React, {Suspense} from "react"
import "antd/dist/antd.css"
import "../styles/crm.css"
import {Form, Input, Row, Col, Progress} from "antd"
import UserImg from "../images/user.svg"
import LayoutComponent from "../CRMPage"
function WelcomeComponent() {
    return (
        <>
            <LayoutComponent>
                <Row>
                    <Col span={4}>
                        <h3>
                            <b>Welcome</b>
                        </h3>
                        <h4>欢迎回来XXXX</h4>
                        <p>
                            {new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                            }).format(Date.now())}
                        </p>
                        <img src={UserImg} />
                    </Col>
                </Row>
            </LayoutComponent>
        </>
    )
}

export default function Welcome() {
    return (
        <Suspense fallback="loading...">
            <WelcomeComponent />
        </Suspense>
    )
}
