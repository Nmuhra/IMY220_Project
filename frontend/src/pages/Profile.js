import React from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import FriendList from '../components/FriendList.js';
import './styles/Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'John Danaher',
                image: '',
                following: 382,
                followers: 32
            },
            playlists: [
                {
                    id: 1,
                    image: '/assets/images/jimi.jpg',
                    title: 'My Favorite Tracks',
                    artist: 'John Danaher',
                    album: 'Various',
                    songsCount: 25,
                    duration: '1h 32m',
                    plays: 1500
                },
                {
                    id: 2,
                    image: '/assets/images/jimi.jpg',
                    title: 'Classic Rock Anthems',
                    artist: 'Various Artists',
                    album: 'Best of Rock',
                    songsCount: 30,
                    duration: '2h 15m',
                    plays: 2300
                },
                {
                    id: 3,
                    image: '/assets/images/jimi.jpg',
                    title: 'Lo-Fi Chill Beats',
                    artist: 'Lo-Fi Collective',
                    album: 'Chill Vibes',
                    songsCount: 50,
                    duration: '3h 10m',
                    plays: 3200
                },
                {
                    id: 4,
                    image: '/assets/images/jimi.jpg',
                    title: 'Top Pop Hits',
                    artist: 'Various Artists',
                    album: 'Pop Sensations',
                    songsCount: 40,
                    duration: '2h 50m',
                    plays: 2750
                },
                {
                    id: 5,
                    image: '/assets/images/jimi.jpg',
                    title: 'Indie Gems',
                    artist: 'Indie Stars',
                    album: 'Hidden Treasures',
                    songsCount: 20,
                    duration: '1h 45m',
                    plays: 1200
                },
                {
                    id: 6,
                    image: '/assets/images/jimi.jpg',
                    title: 'Electronic Vibes',
                    artist: 'DJ Spectrum',
                    album: 'Electro Beats',
                    songsCount: 35,
                    duration: '2h 5m',
                    plays: 1800
                },
                {
                    id: 7,
                    image: '/assets/images/jimi.jpg',
                    title: 'Hip-Hop Hits',
                    artist: 'Various Artists',
                    album: 'Rap Royale',
                    songsCount: 45,
                    duration: '2h 30m',
                    plays: 2900
                },
                {
                    id: 8,
                    image: '/assets/images/jimi.jpg',
                    title: 'Syrian Hits',
                    artist: 'Various Artists',
                    album: 'Syria Royale',
                    songsCount: 45,
                    duration: '2h 30m',
                    plays: 2900
                }
            ],
            currentView: 'overview',
            following: [
                { id: 1, avatarUrl: '/assets/images/avatar.png', username: 'Gordon', friendsCount: 100 },
                { id: 2, avatarUrl: '/assets/images/avatar.png', username: 'Garry', friendsCount: 150 },
            ],
            followers: [
                { id: 3, avatarUrl: '/assets/images/avatar.png', username: 'Luke', friendsCount: 80 },
                { id: 4, avatarUrl: '/assets/images/avatar.png', username: 'Dan', friendsCount: 120 },
            ]
        };
    }
    handleNavClick = (view) => {
        this.setState({ currentView: view });
    }

    render() {
        const { user, playlists, currentView, following, followers } = this.state;

        return (
            <div className="profile-container">
                <header className="profile-header">
                    <div className="profile-image">
                        <img src='/assets/images/avatar.png' alt={user.name} />
                    </div>
                    <div className="profile-info">
                        <h1 className="user-name">{user.name}</h1>
                    </div>
                </header>

                <nav className="profile-nav">
                    <ul>
                        <li className={currentView === 'overview' ? 'active' : ''} onClick={() => this.handleNavClick('overview')}>OVERVIEW</li>
                        <li className={currentView === 'playlists' ? 'active' : ''} onClick={() => this.handleNavClick('playlists')}>PUBLIC PLAYLISTS</li>
                        <li className={currentView === 'following' ? 'active' : ''} onClick={() => this.handleNavClick('following')}>FOLLOWING ({user.following})</li>
                        <li className={currentView === 'followers' ? 'active' : ''} onClick={() => this.handleNavClick('followers')}>FOLLOWERS ({user.followers})</li>
                    </ul>
                </nav>

                {currentView === 'overview' && (
                    <section className="public-playlists">
                        <div className="section-header">
                            <h2>Public Playlists</h2>
                            <button className="see-all">SEE ALL</button>
                        </div>
                        <div className="playlists-grid">
                            {playlists.map(playlist => (
                                <PlaylistPreview
                                    key={playlist.id}
                                    image={playlist.image}
                                    title={playlist.title}
                                    artist={playlist.artist}
                                    album={playlist.album}
                                    songsCount={playlist.songsCount}
                                    duration={playlist.duration}
                                    plays={playlist.plays}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {currentView === 'playlists' && (
                    <section className="public-playlists">
                        <div className="section-header">
                            <h2>Public Playlists</h2>
                        </div>
                        <div className="playlists-grid">
                            {playlists.map(playlist => (
                                <PlaylistPreview
                                    key={playlist.id}
                                    image={playlist.image}
                                    title={playlist.title}
                                    artist={playlist.artist}
                                    album={playlist.album}
                                    songsCount={playlist.songsCount}
                                    duration={playlist.duration}
                                    plays={playlist.plays}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {currentView === 'following' && (
                    <FriendList friends={following} type="Following" />
                )}

                {currentView === 'followers' && (
                    <FriendList friends={followers} type="Followers" />
                )}
            </div>
        );
    }
}

export default Profile;