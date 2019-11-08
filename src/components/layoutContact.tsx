/** @format */

import React, {ReactNode} from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
    children: ReactNode
}

const LayoutContact = ({children}: Props) => {
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

export default LayoutContact
