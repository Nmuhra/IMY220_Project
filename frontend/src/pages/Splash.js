import React, { Component } from 'react';
import { Music } from 'lucide-react';
import './styles/Splash.css';
import Login from '../components/Login.js';

class Splash extends Component {
    render() {
        return (
            <div className="container">
                <div className="background animate-gradient-x"></div>
                <div className="content">
                    <Music style={{ margin: '0 auto', marginBottom: '1rem' }} size={64} />
                    <h1 className="title">TuneMe</h1>
                    <p className="subtitle">SHARE THE RHYTHM</p>
                    <p className="subtitle">SHARE THE VIBE</p>
                </div>

                <div className="button-container">
                    <a href='/login'><button className="login-button">Login</button></a>
                    <a href='/register'><button className="register-button">Register</button></a>
                </div>
            </div>
        );
    }
}

export default Splash;