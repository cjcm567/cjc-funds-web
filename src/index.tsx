/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch, RouteComponentProps} from "react-router-dom"
import Home from "./pages/Home"
import Test from "./pages/test"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import "babel-polyfill"
import gifPreloader from "./images/preloader.gif"
import ScrollToTop from "./components/ScrollToTop"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import * as serviceWorker from "./serviceWorker"

const Preloader = () => {
    return <img src={gifPreloader} alt="loading..." />
}

const InvestClassComponent = lazy(() => import("./pages/InvestClass"))
const InvestClass = () => {
    return (
        <Suspense fallback={Preloader}>
            <InvestClassComponent />
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
const CompanyDetailsComponent = lazy(() => import("./pages/CompanyDetails"))
const CompanyDetails = () => {
    return (
        <Suspense fallback={Preloader}>
            <CompanyDetailsComponent />
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
const FundOfFundsSeriesComponent = lazy(() => import("./pages/FundOfFundsSeries"))
const FundOfFundsSeries = () => {
    return (
        <Suspense fallback={Preloader}>
            <FundOfFundsSeriesComponent />
        </Suspense>
    )
}
const AnTaiComponent = lazy(() => import("./pages/AnTai"))
const AnTai = () => {
    return (
        <Suspense fallback={Preloader}>
            <AnTaiComponent />
        </Suspense>
    )
}
const AnTai1Component = lazy(() => import("./pages/AnTai1"))
const AnTai1 = () => {
    return (
        <Suspense fallback={Preloader}>
            <AnTai1Component />
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
const FundPropertyComponent = lazy(() => import("./pages/FundProperty"))
const FundProperty = () => {
    return (
        <Suspense fallback={Preloader}>
            <FundPropertyComponent />
        </Suspense>
    )
}

const ManagerComponent = lazy(() => import("./pages/Manager"))
const Manager = (props: RouteComponentProps<TParams>) => {
    return (
        <Suspense fallback={Preloader}>
            <ManagerComponent {...props} />
        </Suspense>
    )
}
const ManagerTeamComponent = lazy(() => import("./pages/ManagerTeam"))
const ManagerTeam = () => {
    return (
        <Suspense fallback={Preloader}>
            <ManagerTeamComponent />
        </Suspense>
    )
}

const PartnershipComponent = lazy(() => import("./pages/Partnership"))
const Partnership = () => {
    return (
        <Suspense fallback={Preloader}>
            <PartnershipComponent />
        </Suspense>
    )
}
ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/industry" exact component={Industry} />
                <Route path="/partnership" exact component={Partnership} />
                <Route path="/funds" exact component={Funds} />
                <Route path="/funds/carrick-fund-of-funds/an-tai" exact component={AnTai} />
                <Route path="/funds/carrick-fund-of-funds/an-tai-1" exact component={AnTai1} />
                <Route path="/funds/carrick-fund-of-funds" exact component={FundOfFundsSeries} />
                <Route path="/funds/carrick-dividend-yield-fund" exact component={FundDividedYield} />
                <Route path="/funds/carrick-nz-au-property-fund" exact component={FundProperty} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/about-us/company-details" exact component={CompanyDetails} />
                <Route path="/about-us/team" exact component={ManagerTeam} />
                <Route path="/about-us/team/:props" exact component={Manager} />
                <Route path="/about-us/carrick-responsibility" exact component={CarrickResponsibility} />
                <Route path="/about-us/carrick-Investment-philosophy" exact component={CarrickInvestmentPhilosophy} />
                <Route path="/news" exact component={News} />
                <Route path="/test" exact component={Test} />
                <Route path="/invest-class" exact component={InvestClass} />
                <Route path="/news/:props" exact component={NewsSingle} />
                <Route path="/login-or-join" exact component={LoginOrJoin} />
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
