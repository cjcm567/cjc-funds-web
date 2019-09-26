/** @format */

import React, {ReactNode} from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
