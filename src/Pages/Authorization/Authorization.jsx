import React, { useState } from 'react';
import './Authorization.css';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';

function Authorization() {
    const [activeComponent, setActiveComponent] = useState('Authorization');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'SignUp':
                return <SignUp />;
            case 'LogIn':
                return <LogIn />;
            default:
                return (
                    <div className='authorization-form'>
                        <h2 className='form-name'>Authorization</h2>
                        <div className='authorization-buttons'>
                            <button className='authorization-button' onClick={() => setActiveComponent('SignUp')}>Sign Up</button>
                            <button className='authorization-button' onClick={() => setActiveComponent('LogIn')}>Log In</button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className='authorization-container'>
            {renderComponent()}
        </div>
    );
}

export default Authorization;