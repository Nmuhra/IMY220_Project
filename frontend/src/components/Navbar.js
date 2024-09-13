import React, { Component } from 'react';
import { Music, Home, Search, User } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../pages/styles/Splash.css'; // Make sure this path is correct

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar">
                <div className="navbar-brand">
                    <Music size={24} />
                    <span>TuneMe</span>
                </div>
                <div className="navbar-links">

                    <a href="/home"><Home size={24} /></a>
                    <Search size={24} />
                    <a href='/profile'><User size={24} /></a>
                </div>
            </nav>

        );
    }
}

export default Navbar;