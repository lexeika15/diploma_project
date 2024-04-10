// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export const handlePasswordChange = (event, setPassword) => {
    setPassword(event.target.value);
};

const handleConfirmPasswordChange = (event, setConfirmPassword) => {
    setConfirmPassword(event.target.value);
};

export const handleEmailChange = (event, setEmail) => {
    setEmail(event.target.value);
};

const handleSubmit = (event, password, confirmPassword, email, setErrorMessage, navigate, isValidEmail) => {
    event.preventDefault();

    if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
    }

    if (email && isValidEmail(email)) {
        navigate('/profile');
    } else {
        setErrorMessage('Please enter a valid email');
    }
};

export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

function SignUp() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    return (
        <form className='signup-form' onSubmit={(event) => handleSubmit(event, password, confirmPassword, email, setErrorMessage, navigate, isValidEmail)}>
            <h2 className='signup-title'>Sign Up</h2>
            <input className='signup-input' type="email" placeholder="Email" value={email} onChange={(event) => handleEmailChange(event, setEmail)} required />
            <input className='signup-input' type="password" placeholder="Password" value={password} onChange={(event) => handlePasswordChange(event, setPassword)} required />
            <input className='signup-input' type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => handleConfirmPasswordChange(event, setConfirmPassword)} required />
            {errorMessage && <p className="signup-error-message">{errorMessage}</p>}
            <button className='signup-button' type="submit">Submit</button>
        </form>
    );
}

export default SignUp;
