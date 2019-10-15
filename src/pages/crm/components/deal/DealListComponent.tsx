/** @format */

import React, {Suspense} from "react"
import "antd/dist/antd.css"
import {Form, Input, Button, Table, Row, Col} from "antd"
import "../../styles/crm.css"
import {Link} from "react-router-dom"
import LayoutComponent from "../../CRMPage"

function DealListComponent() {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",

            render(text: any) {
                return <Link to="/">{text}</Link>
            },
        },
        {
            title: "TransactionType",
            dataIndex: "TransactionType",
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

    const dataSource = [
        {
            key: "1",
            name: "Mike",
            TransactionType: "withDraw",
            time: "10-09-2019",
            Amount: "1000",
            EntryFees: "2.2%",
        },
    ]

    return (
        <>
            <h3>交易列表</h3>
            <p>
                {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                }).format(Date.now())}
            </p>
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

export default function DealList() {
    return (
        <Suspense fallback="loading...">
            <LayoutComponent>
                <DealListComponent />
            </LayoutComponent>
        </Suspense>
    )
}
