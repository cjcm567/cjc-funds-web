/** @format */

import React, {Suspense} from "react"

function Footer() {
    return <>THIS IS FOOTER</>
}

function FooterComponent() {
    return (
        <Suspense fallback="loading...">
            <Footer />
        </Suspense>
    )
}

export default FooterComponent
