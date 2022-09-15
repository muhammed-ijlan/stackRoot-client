import axios from 'axios';
import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from "react-router-dom"

function Register() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(false)
    const navigate = useNavigate();


    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:5000/api/register", { fullname, email, password })
            navigate("/signin")

        } catch (e) {
            setMessage(true)
            throw e
        }
    }

    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>Register</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Full Name :</label>
                    <input required type="text" name='fullname' placeholder='John Doe' onChange={(e) => setFullname(e.target.value)}></input>
                    <label>Email :</label>
                    <input required type="email" name='email' placeholder='abc@xyz.com' onChange={(e) => setEmail(e.target.value)} />
                    <label>password :</label>
                    <input required maxLength="20" minLength="8" type="password" name='password' placeholder='******' onChange={(e) => setPassword(e.target.value)}></input>

                    {message && <p style={{ color: "red", fontSize: "12px" }}>Enter Another Email Address</p>}
                    <button onClick={() => handleRegister()}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register