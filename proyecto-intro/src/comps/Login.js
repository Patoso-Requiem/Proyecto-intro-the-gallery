import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/portfolio")
        } catch {
            setError("Error al intentar acceder a la cuenta")
        }

        setLoading(false)
    }

    return ( <
        div style = {
            { position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' } } >
        <
        Card >
        <
        Card.Body >
        <
        h1 style = {
            { textAlign: 'center' } } > Acceso < /h1> {
            error && < Alert variant = "danger" > { error } < /Alert>} <
                Form onSubmit = { handleSubmit } >
                <
                Form.Group id = "email" >
                <
                h3 > Correo electrónico < /h3> <
                Form.Control type = "email"
            ref = { emailRef }
            required / >
                <
                /Form.Group> <
                Form.Group id = "password" >
                <
                h3 > Contraseña < /h3> <
                Form.Control type = "password"
            ref = { passwordRef }
            required / >
                <
                /Form.Group> <
                Button disabled = { loading }
            className = "w-100"
            type = "submit" >
                Acceder <
                /Button> <
                /Form> <
                /Card.Body> <
                /Card> <
                div className = "w-100 text-center mt-2" > ¿Todavía no tienes una cuenta ? , < Link to = "/signup" > Regístrate aquí < /Link> <
                /div> <
                /div>
        )
    }