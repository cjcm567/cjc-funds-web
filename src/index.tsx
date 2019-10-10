/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch, RouteComponentProps} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import gifPreloader from "./images/preloader.gif"
import ScrollToTop from "./components/ScrollToTop"
import * as serviceWorker from "./serviceWorker"
const Preloader = () => {
    return <img src={gifPreloader} alt="loading..." />
}
const HomeComponent = lazy(() => import("./pages/Home"))
const Home = () => {
    return (
        <Suspense fallback={Preloader}>
            <HomeComponent />
        </Suspense>
    )
}
const IndustryComponent = lazy(() => import("./pages/IndustryDevelopment"))
const Industry = () => {
    return (
        <Suspense fallback={Preloader}>
            <IndustryComponent />
        </Suspense>
    )
}
const ContactUsComponent = lazy(() => import("./pages/ContactUs"))
const ContactUs = () => {
    return (
        <Suspense fallback={Preloader}>
            <ContactUsComponent />
        </Suspense>
    )
}
const NotFoundComponent = lazy(() => import("./pages/404"))
const NotFound = () => {
    return (
        <Suspense fallback={Preloader}>
            <NotFoundComponent />
        </Suspense>
    )
}
const LoginOrJoinComponent = lazy(() => import("./pages/LoginOrJoin"))
const LoginOrJoin = () => {
    return (
        <Suspense fallback={Preloader}>
            <LoginOrJoinComponent />
        </Suspense>
    )
}
const AboutUsComponent = lazy(() => import("./pages/AboutUs"))
const AboutUs = () => {
    return (
        <Suspense fallback={Preloader}>
            <AboutUsComponent />
        </Suspense>
    )
}

const CarrickResponsibilityComponent = lazy(() => import("./pages/CarrickResponsibility"))
const CarrickResponsibility = () => {
    return (
        <Suspense fallback={null}>
            <CarrickResponsibilityComponent />
        </Suspense>
    )
}

const CarrickInvestmentPhilosophyComponent = lazy(() => import("./pages/CarrickInvestmentPhilosophy"))
const CarrickInvestmentPhilosophy = () => {
    return (
        <Suspense fallback={null}>
            <CarrickInvestmentPhilosophyComponent />
        </Suspense>
    )
}

const NewsComponent = lazy(() => import("./pages/News"))
const News = () => {
    return (
        <Suspense fallback={Preloader}>
            <NewsComponent />
        </Suspense>
    )
}
const NewsSingleComponent = lazy(() => import("./pages/NewsSingle"))
type TParams = {props: string}
const NewsSingle = (props: RouteComponentProps<TParams>) => {
    return (
        <Suspense fallback={Preloader}>
            <NewsSingleComponent {...props} />
        </Suspense>
    )
}
const FundsComponent = lazy(() => import("./pages/Funds"))
const Funds = () => {
    return (
        <Suspense fallback={Preloader}>
            <FundsComponent />
        </Suspense>
    )
}
const FundOfFundsComponent = lazy(() => import("./pages/FundOfFunds"))
const FundOfFunds = () => {
    return (
        <Suspense fallback={Preloader}>
            <FundOfFundsComponent />
        </Suspense>
    )
}
const FundDividedYieldComponent = lazy(() => import("./pages/FundDividendYield"))
const FundDividedYield = () => {
    return (
        <Suspense fallback={Preloader}>
            <FundDividedYieldComponent />
        </Suspense>
    )
}

const ManagerComponent = lazy(() => import("./pages/Manager"))
const Manager = () => {
    return (
        <Suspense fallback={Preloader}>
            <ManagerComponent />
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
                <Route path="/funds" exact component={Funds} />
                <Route path="/funds/fund-of-funds" exact component={FundOfFunds} />
                <Route path="/funds/carrick-dividend-yield-fund" exact component={FundDividedYield} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/about-us/manager" exact component={Manager} />
                <Route path="/about-us/carrick-responsibility" exact component={CarrickResponsibility} />
                <Route path="/about-us/carrick-Investment-philosophy" exact component={CarrickInvestmentPhilosophy} />
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
