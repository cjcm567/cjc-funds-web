/** @format */

import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import Home from "./pages/Home"
import LoginOrJoin from "./pages/LoginOrJoin"
import NotFound from "./pages/404"
import ContactUs from "./pages/ContactUs"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/login-or-join" component={LoginOrJoin} />
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
