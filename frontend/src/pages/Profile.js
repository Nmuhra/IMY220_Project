import React, { useState, useEffect } from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import FriendList from '../components/FriendList.js';
import ProfileSettings from '../components/ProfileSettings.js';
import CreatePlaylist from '../components/CreatePlaylist.js';
import Navbar from '../components/Navbar.js';
import {
    getUser,
    updateUser,
    createPlaylist as createPlaylistService
} from '../services/userService.js';
import './styles/Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentView, setCurrentView] = useState('overview');

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

                const data = await getUser(userId);
                setUserData(data.data);
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
            const data = await updateUser(userData._id, updatedUser);
            setUserData(data.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handlePlaylistCreation = async (newPlaylist) => {
        try {
            await createPlaylistService(newPlaylist);
            // Refresh user data to get updated playlists
            const updatedData = await getUser(userData._id);
            setUserData(updatedData.data);
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