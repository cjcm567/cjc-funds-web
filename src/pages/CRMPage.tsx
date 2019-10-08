/** @format */

import React, {useState} from "react"
import "antd/dist/antd.css"
import {Layout, Menu, Breadcrumb, Icon, Form, Input, Button, Table, Row, Col} from "antd"
import Logo from "../images/logo1.png"
import "../styles/crm.css"
import UserImg from "../images/user.svg"
import MenuData from "../data/crm.json"
import { Link } from "react-router-dom"
const {SubMenu} = Menu
const {Header, Content, Sider} = Layout
const dataSource = [
    {
        key: "1",
        name: "Mike",
        TransactionType:"withDraw",
        time:"10-09-2019",
        Amount: "1000",
        EntryFees:"2.2%",

    },
    
]

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",

       render(text: any) {
           return (
                <Link to="/">{text}</Link>
           );
       }
       
    },
    {
        title:"TransactionType",
        dataIndex:"TransactionType",
        key: "TransactionType",
    },
    {
        title: "Time",
        dataIndex: "time",
        key: "time",
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        key: "Amount",
    },
    {
        title: "EntryFees",
        dataIndex: "EntryFees",
        key: "EntryFees",
    },
    {
        title: "OtherExpenses",
        dataIndex: "OtherExpenses",
        key: "OtherExpenses",
    },
    
]

function CRMComponent() {
    const [contentState, setContentComponent] = useState(0)

    function HandleComponent(_Key: string) {
        switch (_Key) {
            case "0":
                {
                    setContentComponent(0)
                }
                break
            case "信息更新":
                {
                    setContentComponent(1)
                }
                break
            case "修改密码":
                {
                    setContentComponent(2)
                }
                break
            case "交易列表":
                {
                    setContentComponent(3)
                }
                break
            case "交易详情":
                {
                    setContentComponent(4)
                }
                break
        }
    }

    function ContentComponent(isShowId: number) {
        //Client Information
        if (isShowId == 0) {
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
                    </div>
                </>
            )
        }
        if (isShowId == 1) {
            return (
                <>
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
                    </div>
                </>
            )
        }
        //change password
        if (isShowId == 2) {
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
                </>
            )
        }

        if (isShowId == 3) {
            return (
                <>
                    <Row>
                        <Col span={4} offset={18}>
                            <Input></Input>
                        </Col>
                        <Col span={2}>
                            <Button type="primary">Search</Button>
                        </Col>
                    </Row>
                    <Table columns={columns} dataSource={dataSource} />
                </>
            )
        }
        if (isShowId == 4) {
        }
    }
    const SliderMenuRender = MenuData.map(MenuDateItem => (
        <SubMenu
            onTitleClick={() => HandleComponent(MenuDateItem.key)}
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
                <Button onClick={() => HandleComponent(MenuDateItem.second)} type="primary" ghost>
                    {MenuDateItem.second}
                </Button>
            </Menu.Item>
        </SubMenu>
    ))

    return (
        <Layout className="Layout">
            <Header className="header row">
                <div className="col-3">
                    <img
                        className="logo "
                        src={Logo}
                        style={{
                            height: 55,
                            width: 55,
                        }}
                    />
                </div>
                <div className="col-6"></div>
                <div className="col-3">
                    <p style={{color: "white"}}>登录状态预留11111111111111111</p>
                </div>
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
                    <Breadcrumb style={{margin: "16px 0"}}></Breadcrumb>
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
