import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()

        axios.post("http://localhost:3000/api/auth/register", {
            username,
            email,
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
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input onInput={e => setUsername(e.target.value)} type="text" name='username' placeholder='Enter Your Username' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input onInput={e => setEmail(e.target.value)} type="text" name='email' placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input onInput={e => setPassword(e.target.value)} type="password" name='password' placeholder='Enter Your Password' />
                    </div>
                    <button type='submit'>Register</button>

                    <p>Already have an account? <Link to='/login' className='linkTag'>Login</Link></p>
                </form>
            </div>
        </main>
    )
}

export default Register