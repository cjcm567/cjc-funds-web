/** @format */

import React, {useState, Suspense} from "react"
import "antd/dist/antd.css"
import {Form} from "antd"
import "../styles/crm.css"
import LayoutComponent from "../CRMPage"

function FormComponent() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <LayoutComponent>
                <Form>
                    <input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        required
                    />
                    <input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        required
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email address"
                        type="email"
                        name="email"
                        required
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                    />
                    <button type="submit">Submit</button>
                </Form>
            </LayoutComponent>
        </>
    )
}
export default function FormFun() {
    return (
        <Suspense fallback="loading...">
            <FormComponent />
        </Suspense>
    )
}
