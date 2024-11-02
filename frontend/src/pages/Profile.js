import React, { useState, useEffect } from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import FriendList from '../components/FriendList.js';
import ProfileSettings from '../components/ProfileSettings.js';
import CreatePlaylist from '../components/CreatePlaylist.js';
import Navbar from '../components/Navbar.js';
import { getUser } from '../services/userService.js';
import './styles/Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentView, setCurrentView] = useState('overview');

    // Missing calculateDuration function
    const calculateDuration = (songs = []) => {
        return songs.reduce((total, song) => total + (song.duration || 0), 0);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    throw new Error('User ID not found');
                }

                const response = await getUser(userId);
                setUserData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleProfileUpdate = async (updatedUser) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Authentication token not found');
            }

            const response = await fetch(`/api/users/${userData?._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            const data = await response.json();
            setUserData(data.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handlePlaylistCreation = async (newPlaylist) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Authentication token not found');
            }

            const response = await fetch('/api/playlists', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPlaylist)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create playlist');
            }

            // Refresh user data to get updated playlists
            const updatedUserData = await getUser(userData._id);
            setUserData(updatedUserData.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const renderPlaylists = () => (
        <div className="playlists-grid">
            {userData?.playlists?.map(playlist => (
                <PlaylistPreview
                    key={playlist._id}
                    image={playlist.image}
                    title={playlist.title}
                    artist={userData.username}
                    songsCount={playlist.songs?.length || 0}
                    duration={calculateDuration(playlist.songs)}
                    plays={playlist.plays || 0}
                />
            )) || []}
        </div>
    );

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!userData) {
        return <div className="error">No user data found</div>;
    }

    return (
        <div className="profile-container">
            <Navbar />
            <header className="profile-header">
                <div className="profile-image">
                    <img
                        src={userData.profilePicture || '/assets/images/avatar.png'}
                        alt={userData.username}
                    />
                </div>
                <div className="profile-info">
                    <h1 className="user-name">{userData.username}</h1>
                    <div className="user-stats">
                        <span>{userData.friends?.length || 0} Friends</span>
                        <span>{userData.playlists?.length || 0} Playlists</span>
                    </div>
                </div>
            </header>

            <nav className="profile-nav">
                <ul>
                    {['overview', 'playlists', 'following', 'settings', 'create-playlist'].map((view) => (
                        <li
                            key={view}
                            className={currentView === view ? 'active' : ''}
                            onClick={() => setCurrentView(view)}
                        >
                            {view === 'following'
                                ? `FRIENDS (${userData.friends?.length || 0})`
                                : view.toUpperCase().replace('-', ' ')}
                        </li>
                    ))}
                </ul>
            </nav>

            {currentView === 'overview' && (
                <section className="public-playlists">
                    <div className="section-header">
                        <h2>Public Playlists</h2>
                        <button
                            className="see-all"
                            onClick={() => setCurrentView('playlists')}
                        >
                            SEE ALL
                        </button>
                    </div>
                    {renderPlaylists()}
                </section>
            )}

            {currentView === 'playlists' && (
                <section className="public-playlists">
                    <div className="section-header">
                        <h2>Public Playlists</h2>
                    </div>
                    {renderPlaylists()}
                </section>
            )}

            {currentView === 'following' && (
                <FriendList
                    friends={userData.friends || []}
                    type="Friends"
                />
            )}

            {currentView === 'settings' && (
                <ProfileSettings
                    user={userData}
                    onUpdateProfile={handleProfileUpdate}
                />
            )}

            {currentView === 'create-playlist' && (
                <CreatePlaylist
                    onCreatePlaylist={handlePlaylistCreation}
                />
            )}
        </div>
    );
};

export default Profile;