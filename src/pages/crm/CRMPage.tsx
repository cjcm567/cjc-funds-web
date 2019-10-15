/** @format */

import React, {ReactNode} from "react"
import "antd/dist/antd.css"
import {Layout, Menu, Breadcrumb, Icon, Form, Input, Button, Table, Row, Col} from "antd"
import Logo from "../../images/logo1.png"
import MenuList from "./menuItem"
import {Link} from "react-router-dom"

const {SubMenu} = Menu
const {Header, Content, Sider} = Layout
const SliderMenuRender = MenuList.map(MenuListItem => (
    <SubMenu
        key={MenuListItem.key}
        title={
            <span>
                <Icon type={MenuListItem.type} />
                {MenuListItem.title}
            </span>
        }>
        {MenuListItem.children.map(ChildrenItem => (
            <Menu.Item title={ChildrenItem.title} key={ChildrenItem.key}>
                <Link to={ChildrenItem.key}>{ChildrenItem.title}</Link>
            </Menu.Item>
        ))}
    </SubMenu>
))
interface Props {
    children: ReactNode
}
function LayoutComponent({children}: Props) {
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
                            borderBlock: 1,
                        }}>
                        <main>{children}</main>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent
