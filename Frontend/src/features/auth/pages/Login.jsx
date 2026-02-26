import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:3000/api/auth/login", {
            username,
            password
        },{
            withCredentials: true
        })
            .then(res => {
                console.log(res.data.message);
            })
    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <label>Username</label>
                        <input onInput={e => setUsername(e.target.value)} type="text" name='username' placeholder='Enter Your Username' />
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input onInput={e => setPassword(e.target.value)} type="password" name='password' placeholder='Enter Your Password' />
                    </div>
                    <button type='submit'>Login</button>

                    <p>New User? <Link to='/register' className='linkTag'>Register</Link></p>
                </form>
            </div>
        </main>
    )
}

export default Login