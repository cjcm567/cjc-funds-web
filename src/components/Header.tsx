/** @format */

import React, {Suspense} from "react"

function Header() {
    return <>THIS IS HEADER</>
}

function HeaderComponent() {
    return (
        <Suspense fallback="loading...">
            <Header />
        </Suspense>
    )
}

export default HeaderComponent
