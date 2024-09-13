import React, { Component } from 'react';
import { Music, Home, Search, User, ListMusic } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../pages/styles/Splash.css'; // Make sure this path is correct

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        };
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement search functionality here
        console.log('Search query:', this.state.searchQuery);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <Music size={24} />
                    <span>TuneMe</span>
                </div>
                <form className="navbar-search" onSubmit={this.handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                    />
                    <button type="submit"><Search size={20} /></button>
                </form>
                <div className="navbar-links">
                    <Link to="/home"><Home size={24} /></Link>
                    <Link to="/playlist"><ListMusic size={24} /></Link>
                    <Link to="/profile"><User size={24} /></Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;