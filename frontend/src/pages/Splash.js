import React, { Component } from 'react';
import { Music } from 'lucide-react';

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
                    <button className="login-button">Login</button>
                    <button className="register-button">Register</button>
                </div>
            </div>
        );
    }
}

export default Splash;