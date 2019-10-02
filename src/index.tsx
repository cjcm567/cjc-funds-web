/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch, RouteComponentProps} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import Home from "./pages/Home"
import LoginOrJoin from "./pages/LoginOrJoin"
import NotFound from "./pages/404"
import ContactUs from "./pages/ContactUs"
import ScrollToTop from "./components/ScrollToTop"
import * as serviceWorker from "./serviceWorker"
import Industry from "./pages/IndustryDevelopment"
type TParams = {props: string}
const FundsComponent = lazy(() => import("./pages/Funds"))
const Funds = () => {
    return (
        <Suspense fallback={null}>
            <FundsComponent />
        </Suspense>
    )
}

const AboutUsComponent = lazy(() => import("./pages/AboutUs"))
const AboutUs = () => {
    return (
        <Suspense fallback={null}>
            <AboutUsComponent />
        </Suspense>
    )
}

const NewsComponent = lazy(() => import("./pages/News"))
const News = () => {
    return (
        <Suspense fallback={null}>
            <NewsComponent />
        </Suspense>
    )
}

const NewsSingleComponent = lazy(() => import("./pages/NewsSingle"))
const NewsSingle = (props: RouteComponentProps<TParams>) => {
    return (
        <Suspense fallback={null}>
            <NewsSingleComponent {...props} />
        </Suspense>
    )
}

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/industry" component={Industry} />
                <Route path="/funds" component={Funds} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/news" exact component={News} />
                <Route path="/news/:props" exact component={NewsSingle} />
                <Route path="/login-or-join" component={LoginOrJoin} />
                <Route path="/404" component={NotFound} />
                <Route path="*" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
