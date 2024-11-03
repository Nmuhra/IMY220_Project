import React, { Component } from 'react';
import { Music, Home, Search, User, ListMusic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchUsers } from '../services/userService.js';
import './styles/Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchResults: [],
            showResults: false,
            isSearching: false,
            error: null
        };
        this.searchTimeout = null;
    }
    handleSearchChange = async (event) => {
        const value = event.target.value;
        this.setState({
            searchQuery: value,
            isSearching: true,
            showResults: true,
            error: null,
        });

        if (this.searchTimeout) clearTimeout(this.searchTimeout);

        if (!value.trim()) {
            this.setState({ searchResults: [], isSearching: false, showResults: false });
            return;
        }

        this.searchTimeout = setTimeout(async () => {
            try {
                const response = await searchUsers(value);
                if (response.error) throw new Error(response.error);

                this.setState({
                    searchResults: response.data || [],
                    isSearching: false,
                });
            } catch (error) {
                console.error('Search failed:', error);
                this.setState({
                    searchResults: [],
                    isSearching: false,
                    error: 'Failed to search users',
                });
            }
        }, 300);
    };

    handleClickOutside = (event) => {
        if (!event.target.closest('.navbar-search')) {
            this.setState({ showResults: false });
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
    }

    render() {
        const { searchQuery, searchResults, showResults, isSearching, error } = this.state;

        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <Music size={24} />
                    <span>TuneMe</span>
                </div>
                <div className="navbar-search">
                    <div className="search-input-container">
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={this.handleSearchChange}
                            onFocus={() => this.setState({ showResults: true })}
                        />
                        <Search size={20} className="search-icon" />
                    </div>

                    {showResults && (searchQuery.trim() !== '') && (
                        <div className="search-results">
                            {isSearching ? (
                                <div className="search-message">Searching...</div>
                            ) : error ? (
                                <div className="search-message error">{error}</div>
                            ) : searchResults.length > 0 ? (
                                searchResults.map(user => (
                                    <Link
                                        key={user._id}
                                        to={`/profile/${user._id}`}
                                        className="search-result-item"
                                        onClick={() => this.setState({
                                            showResults: false,
                                            searchQuery: ''
                                        })}
                                    >
                                        <div className="user-avatar">
                                            {user.profilePicture ? (
                                                <img src={user.profilePicture} alt={user.username} />
                                            ) : (
                                                <User size={24} />
                                            )}
                                        </div>
                                        <div className="user-info">
                                            <div className="username">{user.username}</div>
                                            <div className="email">{user.email}</div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="search-message">No users found</div>
                            )}
                        </div>
                    )}
                </div>
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