import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import { handlePasswordChange, handleEmailChange, isValidEmail } from '../SignUp/SignUp';

function LogIn() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = (event) => {
        handlePasswordChange(event, setPassword);
    };

    const handleChangeEmail = (event) => {
        handleEmailChange(event, setEmail);
    };

    const handleSubmit = (event, email, setErrorMessage, navigate, isValidEmail) => {
        event.preventDefault();

        if (email && isValidEmail(email)) {
            navigate('/profile');
        } else {
            setErrorMessage('Please enter a valid email');
        }
    };

    return (
        <form className='login-form' onSubmit={(event) => handleSubmit(event, email, setErrorMessage, navigate, isValidEmail)}>
            <h2 className='login-title'>Log In</h2>
            <input className='login-input' type="email" placeholder="Email" value={email} onChange={(event) => handleChangeEmail(event, setEmail)} required />
            <input className='login-input' type="password" placeholder="Password" value={password} onChange={(event) => handleChangePassword(event, setPassword)} required />
            {errorMessage && <p className="login-error-message">{errorMessage}</p>}
            <button className='login-button' type="submit">Submit</button>
        </form>
    );
}

export default LogIn;