import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Las contraseñas no coinciden")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Error al intentar registrar la cuenta")
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
            { textAlign: 'center' } } > Registro < /h1> {
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
                Form.Group id = "password-confirm" >
                <
                h3 > Confirma contraseña < /h3> <
                Form.Control type = "password"
            ref = { passwordConfirmRef }
            required / >
                <
                /Form.Group> <
                Button disabled = { loading }
            className = "w-100"
            type = "submit" >
                Registrarse <
                /Button> <
                /Form> <
                /Card.Body> <
                /Card> <
                div className = "w-100 text-center mt-2" > ¿Ya tienes una cuenta ? < Link to = "/login" > accede aquí < /Link> <
                /div> <
                /div>
        )
    }