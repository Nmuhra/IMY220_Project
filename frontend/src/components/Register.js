import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the registration logic
        console.log('Registration submitted', this.state);
    };

    render() {
        return (
            <div className="register-container">
                <div className="register-form">
                    <div className="register-header">
                        <div className="logo">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path d="M3 22l6-6 3 3 6-6 6 6V2H3z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2>Register for TuneMe</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
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