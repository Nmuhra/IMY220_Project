import React from 'react';
import { Music2 } from 'lucide-react';
import './styles/login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-header">
                    <div className="logo">
                        <Music2 style={{ margin: '0 auto', marginBottom: '0rem' }} size={64} />
                    </div>
                    <h2>LOG IN</h2>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" id="username" placeholder="Username" required />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Password" required />
                    </div>
                    <div className="form-group remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;