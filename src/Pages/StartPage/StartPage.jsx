import React from 'react';
import tomato from '../../additions/tomato-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import './StartPage.css';

function Start_Page() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={tomato} className="App-logo" alt="logo" />
                <p className='App-name'>
                    Pomodoro app
                </p>
                <Link to="/authorization" className="App-link">Start now!</Link>
            </header>
        </div>

    );
}

export default Start_Page;