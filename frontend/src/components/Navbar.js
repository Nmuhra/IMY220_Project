import React, { Component } from 'react';
import { Music, Home, Search, User } from 'lucide-react';
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
                    <Home size={24} />
                    <Search size={24} />
                    <User size={24} />
                </div>
            </nav>
        );
    }
}

export default Navbar;