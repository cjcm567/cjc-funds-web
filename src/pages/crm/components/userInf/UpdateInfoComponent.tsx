/** @format */

import React, {Suspense} from "react"
import {Form, Input} from "antd"
import UserImg from "../../images/user.svg"
import "antd/dist/antd.css"
import "../../styles/crm.css"
import LayoutComponent from "../../CRMPage"
function UpdateInforComponent() {
    return (
        <>
            <LayoutComponent>
                <h3>更新个人信息</h3>
                <p>
                    {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                    }).format(Date.now())}
                </p>
                <div style={{textAlign: "center"}}>
                    <h3>个人信息</h3>
                    <img src={UserImg} />
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <Form
                        className="col-4"
                        style={{marginTop: "1%", textAlign: "center"}}
                        labelCol={{span: 5}}
                        wrapperCol={{span: 15}}>
                        <Form.Item label="姓名">
                            <Input type="text"></Input>
                        </Form.Item>
                        <Form.Item label="性别">
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail">
                            <Input />
                        </Form.Item>
                    </Form>
                    <div className="button ant-btn-primary"
                </div>
            </LayoutComponent>
        </>
    )
}

export default function UpdateInfor() {
    return (
        <Suspense fallback="loading...">
            <UpdateInforComponent />
        </Suspense>
    )
}
