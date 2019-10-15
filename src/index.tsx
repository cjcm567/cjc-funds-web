/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch, RouteComponentProps, HashRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop"
import * as serviceWorker from "./serviceWorker"
import Industry from "./pages/IndustryDevelopment"
import CRM from "./pages/crm/CRMPage"

const ContactUsComponent = lazy(() => import("./pages/ContactUs"))
const ContactUs = () => {
    return (
        <Suspense fallback={null}>
            <ContactUsComponent />
        </Suspense>
    )
}
const NotFoundComponent = lazy(() => import("./pages/404"))
const NotFound = () => {
    return (
        <Suspense fallback={null}>
            <NotFoundComponent />
        </Suspense>
    )
}
const LoginOrJoinComponent = lazy(() => import("./pages/LoginOrJoin"))
const LoginOrJoin = () => {
    return (
        <Suspense fallback={null}>
            <LoginOrJoinComponent />
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
type TParams = {props: string}
const NewsSingle = (props: RouteComponentProps<TParams>) => {
    return (
        <Suspense fallback={null}>
            <NewsSingleComponent {...props} />
        </Suspense>
    )
}
const FundsComponent = lazy(() => import("./pages/Funds"))
const Funds = () => {
    return (
        <Suspense fallback={null}>
            <FundsComponent />
        </Suspense>
    )
}
const FundOfFundsComponent = lazy(() => import("./pages/FundOfFunds"))
const FundOfFunds = () => {
    return (
        <Suspense fallback={null}>
            <FundOfFundsComponent />
        </Suspense>
    )
}
const FundDividedYieldComponent = lazy(() => import("./pages/FundDividendYield"))
const FundDividedYield = () => {
    return (
        <Suspense fallback={null}>
            <FundDividedYieldComponent />
        </Suspense>
    )
}
const WelcomeComponent = lazy(() => import("./pages/crm/components/WelcomeComponent"))
const Welcome = () => {
    return (
        <Suspense fallback={null}>
            <WelcomeComponent />
        </Suspense>
    )
}
const UpdateInfoComponent = lazy(() => import("./pages/crm/components/userInf/UpdateInfoComponent"))
const UpdateInfo = () => {
    return (
        <Suspense fallback={null}>
            <UpdateInfoComponent />
        </Suspense>
    )
}
const ChangePWComponent = lazy(() => import("./pages/crm/components/userInf/ChangePWComponent"))
const ChangPW = () => {
    return (
        <Suspense fallback={null}>
            <ChangePWComponent />
        </Suspense>
    )
}
const DealInforComponent = lazy(() => import("./pages/crm/components/deal/DealInforComponent"))
const DealInfor = () => {
    return (
        <Suspense fallback={null}>
            <DealInforComponent />
        </Suspense>
    )
}
const DealListComponent = lazy(() => import("./pages/crm/components/deal/DealListComponent"))
const DealList = () => {
    return (
        <Suspense fallback={null}>
            <DealListComponent />
        </Suspense>
    )
}
const UserListComponent = lazy(() => import("./pages/crm/components/user/UserListComponent"))
const UserList = () => {
    return (
        <Suspense fallback={null}>
            <UserListComponent />
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
                <Route path="/about-us" component={AboutUs} />
                <Route path="/news" exact component={News} />
                <Route path="/news/:props" exact component={NewsSingle} />
                <Route path="/login-or-join" component={LoginOrJoin} />
                <Route path="/crm" exact component={Welcome} />
                <Route path="/crm/updateInfor" component={UpdateInfo} />
                <Route path="/crm/ChangPW" component={ChangPW} />
                <Route path="/crm/DealList" excact component={DealList} />
                <Route path="/crm/DealInfor" component={DealInfor} />
                <Route path="/crm/UserList" component={UserList} />

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
