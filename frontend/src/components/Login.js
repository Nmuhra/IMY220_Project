import React, { useState } from 'react';
import { Music2 } from 'lucide-react';
import './styles/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    // Validate form fields on submit
    const validateForm = (e) => {
        e.preventDefault();
        let isValid = true;
        let newErrors = { username: '', password: '' };

        // Username validation: must be at least 3 characters
        if (username.trim().length < 3) {
            newErrors.username = 'Username must be at least 3 characters long';
            isValid = false;
        }

        // Password validation: must be at least 6 characters
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        // Update errors in state
        setErrors(newErrors);

        // If validation passes, log the user in (dummy implementation here)
        if (isValid) {
            alert('Login successful!');
            // Proceed with login logic (e.g., API call)
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-header">
                    <div className="logo">
                        <Music2 style={{ margin: '0 auto', marginBottom: '0rem' }} size={64} />
                    </div>
                    <h2>LOG IN</h2>
                </div>
                <form onSubmit={validateForm}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
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
