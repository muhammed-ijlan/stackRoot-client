import React from 'react'
import "./Signin.css"

function Signin() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>Sign In</h1>
                <form >
                    <label>Email :</label>
                    <input type="text" placeholder='abc@xyz.com' />
                    <label>password</label>
                    <input type="password" placeholder='******'></input>
                    <button>SignIn</button>
                </form>
            </div>
        </div>
    )
}

export default Signin