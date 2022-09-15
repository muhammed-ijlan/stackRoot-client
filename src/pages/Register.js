import React from 'react'
import "./Register.css"

function Register() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>Register</h1>
                <form >
                    <label>Full Name :</label>
                    <input type="text" placeholder='John Doe'></input>
                    <label>Email :</label>
                    <input type="text" placeholder='abc@xyz.com' />
                    <label>password :</label>
                    <input type="password" placeholder='******'></input>
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register