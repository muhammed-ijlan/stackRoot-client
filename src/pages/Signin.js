import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import "./Signin.css"
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'

function Signin() {
    const [user, setUser] = useState([])
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser)


    const handleLogin = async () => {
        dispatch(loginStart())
        try {
            const res = await axios.post("http://localhost:5000/api/login", { email: emailInput, password: passwordInput })
            dispatch(loginSuccess(res.data))
            navigate("/")
        } catch (e) {
            dispatch(loginFailure())
        }
    }

    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>Sign In</h1>
                <div className='form'>
                    <label>Email :</label>
                    <input type="text" placeholder='abc@xyz.com' name='email' onChange={(e) => setEmailInput(e.target.value)} />
                    <label>password :</label>
                    <input type="password" placeholder='*****' name='password' onChange={(e) => setPasswordInput(e.target.value)}></input>
                    <button onClick={() => handleLogin()}>SignIn</button>
                </div>
            </div>
        </div>
    )
}

export default Signin