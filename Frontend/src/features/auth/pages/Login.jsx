import React, { useState, useEffect } from 'react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { user, handleLogin, loading } = useAuth()

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);
    
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await handleLogin(username, password)
        } catch (err) {
            console.log(err)
        }

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
                    <button type='submit' className='button'>Login</button>

                    <p>New User? <Link to='/register' className='linkTag'>Register</Link></p>
                </form>
            </div>
        </main>
    )
}

export default Login