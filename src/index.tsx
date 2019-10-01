/** @format */

import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import Home from "./pages/Home"
import NotFound from "./pages/404"
import ContactUs from "./pages/ContactUs"
import * as serviceWorker from "./serviceWorker"
import Industry from "./pages/Industrydevelopment"

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/Industry" component={Industry} />
            <Route path="/404" component={NotFound} />
            <Route path="*" component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
