import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Portfolio from "./Portfolio"

function App() {
    return ( <
        Container className = "d-flex align-items-center justify-content-center"
        style = {
            { minHeight: "100vh" } } >
        <
        div className = "w-100"
        style = {
            { maxWidth: "600px", width: "100%" } } >
        <
        Router >
        <
        AuthProvider >
        <
        Switch >
        <
        PrivateRoute exact path = "/"
        component = { Login }
        /> <
        PrivateRoute path = "/portfolio"
        component = { Portfolio }
        /> <
        Route path = "/signup"
        component = { Signup }
        /> <
        Route path = "/login"
        component = { Login }
        /> <
        /Switch> <
        /AuthProvider> <
        /Router> <
        /div> <
        /Container>
    )
}

export default App