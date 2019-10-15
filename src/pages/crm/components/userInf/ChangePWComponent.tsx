/** @format */

import React, {Suspense} from "react"

import {Form, Input, Button} from "antd"
import "../../styles/crm.css"
import "antd/dist/antd.css"
import UserImg from "../../images/user.svg"
import LayoutComponent from "../../CRMPage"
function ChangePW() {
    return (
        <>
            <LayoutComponent>
                <h3>修改密码</h3>
                <p>
                    {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                    }).format(Date.now())}
                </p>

                <div style={{textAlign: "center"}}>
                    <h3>请输入您的新密码</h3>
                    <img src={UserImg} />
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <Form
                        className="col-4"
                        style={{marginTop: "1%", textAlign: "center"}}
                        labelCol={{span: 5}}
                        wrapperCol={{span: 15}}>
                        <Form.Item label="您的新密码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="请确认您的新密码">
                            <Input />
                        </Form.Item>
                        <Button className=".col-12 .col-offset-6" htmlType="submit">
                            提交
                        </Button>
                    </Form>
                </div>
            </LayoutComponent>
        </>
    )
}

export default function ChangePWComponent() {
    return (
        <Suspense fallback="loading...">
            <ChangePW />
        </Suspense>
    )
}
