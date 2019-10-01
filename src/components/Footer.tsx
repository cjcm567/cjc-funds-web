/** @format */

import React, {Suspense} from "react"

function Footer() {
    return <></>
}

function FooterComponent() {
    return (
        <Suspense fallback="loading...">
            <Footer />
        </Suspense>
    )
}

export default FooterComponent
