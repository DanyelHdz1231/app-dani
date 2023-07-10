'use client'
import React from "react"
import { login } from "@/services/firebase/auth"
import "./login.css"

function Login() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    })

    function onChange(event) {
        const value= event.target.value;
        const name=event.target.name;

        setState({
            ...state,
            [name]:value
        })
    }

    return (
        <div className="container">
            <input onChange={onChange} name="email" type="text" value={state.email} />
            <input onChange={onChange} name="password" type="password" value={state.password} /> 
            <button>Login</button> 
        </div>
    )
}

export default Login;