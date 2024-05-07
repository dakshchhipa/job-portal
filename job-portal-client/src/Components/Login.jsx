import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import { IoMdMail } from 'react-icons/io';
import { FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('link', { email, password });
            console.log(res.data);
            const { token } = res.data;
            localStorage.setItem('token', token);
            navigate('/newEvent');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className='containers'>
            <div className='logreg-box'>
                <div className='form-box login'>
                    <form onSubmit={onSubmit}>
                        <h2>Sign In</h2>
                        <div className='input-box'>
                            <span className='icon'><IoMdMail /></span>
                            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} required />
                            <label>Email</label>
                        </div>

                        <div className='input-box'>
                            <span className='icon'><FaLock /></span>
                            <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} minLength="6" />
                            <label>Password</label>
                        </div>

                        <div className='remember-forgot'>
                            <label><input type='checkbox' />Remember me</label>
                            <a href='#home'>Forgot Password</a>
                        </div>

                        <button type="submit" className='butn'>Sign In</button>

                        <div className='login-register'>
                            <p>Do you have an Account?<Link to='/signup' className='register-link'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

