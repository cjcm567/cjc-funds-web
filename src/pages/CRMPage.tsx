/** @format */

import React, {useState} from "react"
import "antd/dist/antd.css"
import {Layout, Menu, Breadcrumb, Icon, Form, Input, Button, Avatar} from "antd"
import Logo from "../images/logo1.png"
import "../styles/crm.css"
import UserImg from "../images/user.svg"
import MenuData from "../data/crm.json"
const {SubMenu} = Menu
const {Header, Content, Sider} = Layout

function CRMComponent() {
    const [contentState, setContentComponent] = useState(0)

    function HandleComponent(_Key: string) {
        switch (_Key) {
            case "信息更新":
                {
                    setContentComponent(1)
                    console.log(" setContentComponent(0)")
                }
                break
            case "修改密码":
                {
                    setContentComponent(2)
                    console.log(" setContentComponent(2)")
                }
                break
            case "交易详情":
                {
                    setContentComponent(3)
                    console.log(" setContentComponent(3)")
                }
                break
            case "交易列表":
                {
                    setContentComponent(4)
                    console.log(" setContentComponent(4)")
                }
                break
        }
    }

    function ContentComponent(isShowId: number) {
        if (isShowId == 1) {
            return (
                <>
                    <h3>Welcome</h3>
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

                    <Form style={{textAlign: "center"}}>
                        <Form.Item label="姓名"></Form.Item>
                        <Form.Item label="性别">
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail">
                            <Input />
                        </Form.Item>
                    </Form>
                </>
            )
        }
        if (isShowId == 2) {
            console.log("修改密码")
            return (
                <>
                    <h3>修改密码</h3>
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

                    <Form style={{textAlign: "center"}}>
                        <Form.Item label="姓名"></Form.Item>
                        <Form.Item label="性别">
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail">
                            <Input />
                        </Form.Item>
                    </Form>
                </>
            )
        }
    }
    const SliderMenuRender = MenuData.map(MenuDateItem => (
        <SubMenu
            key={MenuDateItem.key}
            title={
                <span>
                    <Icon type={MenuDateItem.type} />
                    {MenuDateItem.title}
                </span>
            }>
            <Menu.Item>
                <Button onClick={() => HandleComponent(MenuDateItem.first)} type="primary" ghost>
                    {MenuDateItem.first}
                </Button>
            </Menu.Item>
            <Menu.Item>                
                <Button onClick={()=> HandleComponent(MenuDateItem.second)} type="primary" ghost>
                    {MenuDateItem.second}
                </Button>
            </Menu.Item>
        </SubMenu>
    ))

    return (
        <Layout className="Layout">
            <Header className="header">
                <img
                    className="logo"
                    src={Logo}
                    style={{
                        height: 45,
                        width: 45,
                    }}
                />
            </Header>
            <Layout className="Layout-children">
                <Sider width={200} style={{background: "#fff"}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        style={{height: "100%", borderRight: 0}}>
                        {SliderMenuRender}
                    </Menu>
                </Sider>

                <Layout style={{padding: "0 24px 24px"}}>
                    <Breadcrumb style={{margin: "16px 0"}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: "#fff",
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}>
                        {ContentComponent(contentState)}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default CRMComponent
