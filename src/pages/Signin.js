import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import "./Signin.css"
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'

function Signin() {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const { loading } = useSelector((state) => state.user)

    const handleLogin = async () => {
        dispatch(loginStart())
        try {
            const res = await axios.post("http://localhost:5000/api/login", { email: emailInput, password: passwordInput },
                { withCredentials: true })
            localStorage.setItem("user-info", JSON.stringify(res.data));

            dispatch(loginSuccess(JSON.parse(localStorage.getItem("user-info"))))

            setMessage(res)
            navigate("/")
        } catch (e) {
            setMessage(e.response.data.message);
            dispatch(loginFailure())

        }
    }
    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>Sign In</h1>
                <div className='form'>
                    <label>Email :</label>
                    <input type="email" required maxLength="20" minLength="8" placeholder='abc@xyz.com' name='email' onChange={(e) => setEmailInput(e.target.value)} />
                    <label>password :</label>
                    <input type="password" required maxLength="20" minLength="8" placeholder='*****' name='password' onChange={(e) => setPasswordInput(e.target.value)}></input>
                    <p style={{ color: "red" }}>{message}</p>
                    {loading && <button>Loading...</button>}
                    {!loading && <button onClick={() => handleLogin()}>SignIn</button>}
                </div>
            </div>
        </div>
    )
}

export default Signin