import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/register.css';
import { register } from '../services/authService.js';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', email: '', password: '' });
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        let errors = { username: '', email: '', password: '' };
        let isValid = true;

        if (username.trim().length < 3) {
            errors.username = 'Username must be at least 3 characters long';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError('');

        if (validateForm()) {
            try {
                const response = await register(username, email, password);
                console.log('Registration successful:', response);

                // Redirect to login page
                navigate('/home');
            } catch (error) {
                console.error('Registration failed:', error.message);
                setServerError(error.message);
            }
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <div className="register-header">
                    <h2>Register</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                {serverError && <p className="error">{serverError}</p>}
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
