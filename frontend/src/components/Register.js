import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {
                username: '',
                email: '',
                password: ''
            }
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    validateForm = () => {
        const { username, email, password } = this.state;
        let errors = { username: '', email: '', password: '' };
        let isValid = true;

        // Username validation: must be at least 3 characters
        if (username.trim().length < 3) {
            errors.username = 'Username must be at least 3 characters long';
            isValid = false;
        }

        // Email validation: must be a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Password validation: must be at least 6 characters
        if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        this.setState({ errors });
        return isValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validateForm()) {
            // Proceed with registration logic (e.g., API call)
            console.log('Registration successful', this.state);
        } else {
            console.log('Validation failed');
        }
    };

    render() {
        const { username, email, password, errors } = this.state;

        return (
            <div className="register-container">
                <div className="register-form">
                    <div className="register-header">
                        <h2>Register</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={username}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                                required
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <button type="submit" className="register-button">Register</button>
                    </form>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
