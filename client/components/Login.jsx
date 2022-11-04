import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { loginUser, loginError } from '../actions/auth'

function Login() {
    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((redux) => redux.auth)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    useEffect(() => {
        dispatch(loginError(''))
    }, [])

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const confirmSuccess = () => navigateTo('/Blog')
        dispatch(loginUser(formData, confirmSuccess))
    }

    return (
        <div className='login-container load-animation'>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>
                {/* <hr /> */}
                {auth.errorMessage && (
                    <span className="login-error">{auth.errorMessage}</span>
                )}
                <label className="login-user">
                    Username:
                    <input
                        required
                        placeholder="User Name"
                        type="text"
                        name="username"
                        autoComplete="username"
                        value={formData.username}
                        onChange={handleChange}
                        className='login-user-input'
                    />
                </label>
                <label className="login-password">
                    Password:
                    <input
                        required
                        placeholder="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        className='login-password-input'
                    />
                </label>
                <input className="login-button" value="Login" type="submit" />
            </form>
            <div className='login-back'>
                <Link to='/Blog' className='links'>Back</Link>
            </div>
        </div>
    )
}

export default Login
