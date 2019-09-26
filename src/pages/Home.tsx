/** @format */

import React, {Suspense} from "react"
import Layout from "../components/layout"
import logo from "../images/logo.svg"
import "../styles/Home.css"

function Home() {
    return (
        <>
            <Layout>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            Learn React
                        </a>
                    </header>
                </div>
            </Layout>
        </>
    )
}

export default function HomeComponent() {
    return (
        <Suspense fallback="loading...">
            <Home />
        </Suspense>
    )
}
