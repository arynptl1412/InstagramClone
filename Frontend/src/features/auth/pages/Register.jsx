import React, { useState, useEffect } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {user, handleRegister, loading} = useAuth();

    useEffect(() => {
            if (user) {
                navigate("/");
            }
        }, [user, navigate]);

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            await handleRegister(username, email, password);
        }catch(err){
            console.log(err);
        }
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
                    <button type='submit' className='button'>Register</button>

                    <p>Already have an account? <Link to='/login' className='linkTag'>Login</Link></p>
                </form>
            </div>
        </main>
    )
}

export default Register