import React, { Component } from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import './styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [
                {
                    id: 1,
                    image: '/assets/images/playlist.png',
                    title: 'Chill Vibes',
                    artist: 'Various Artists',
                    album: 'Mixed',
                    songsCount: 25,
                    duration: '1h 45m',
                    plays: 1200
                },
                {
                    id: 2,
                    image: '/assets/images/playlist.png',
                    title: 'Workout Mix',
                    artist: 'User',
                    album: 'Various',
                    songsCount: 30,
                    duration: '2h 10m',
                    plays: 1500
                },
                {
                    id: 3,
                    image: '/assets/images/playlist.png',
                    title: 'Road Trip Tunes',
                    artist: 'Various Artists',
                    album: 'Road Sounds',
                    songsCount: 45,
                    duration: '3h 5m',
                    plays: 2500
                },
                {
                    id: 4,
                    image: '/assets/images/playlist.png',
                    title: 'Party Anthems',
                    artist: 'DJ Max',
                    album: 'Club Mix',
                    songsCount: 40,
                    duration: '2h 30m',
                    plays: 3200
                },
                {
                    id: 5,
                    image: '/assets/images/playlist.png',
                    title: 'Relaxing Piano',
                    artist: 'Piano Masters',
                    album: 'Relax & Unwind',
                    songsCount: 20,
                    duration: '1h 10m',
                    plays: 1800
                },
                {
                    id: 6,
                    image: '/assets/images/playlist.png',
                    title: '90s Hits',
                    artist: 'Various Artists',
                    album: 'Throwback',
                    songsCount: 35,
                    duration: '2h 15m',
                    plays: 4000
                },
                {
                    id: 7,
                    image: '/assets/images/playlist.png',
                    title: 'Indie Discoveries',
                    artist: 'Emerging Indie',
                    album: 'Fresh Sounds',
                    songsCount: 22,
                    duration: '1h 25m',
                    plays: 1100
                },
                {
                    id: 8,
                    image: '/assets/images/playlist.png',
                    title: 'Jazz Classics',
                    artist: 'Jazz Legends',
                    album: 'Smooth Jazz',
                    songsCount: 28,
                    duration: '1h 50m',
                    plays: 1300
                }
            ]

        };
    }

    render() {
        const { playlists } = this.state;

        return (
            <div className="home-container">
                <main>
                    <aside className="friends-list">
                        <h2>Friends</h2>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="friend-item">
                                <div className="friend-avatar">◯</div>
                                <div className="friend-username">friend's username</div>
                            </div>
                        ))}
                    </aside>
                    <section className="playlists">
                        <div className="playlist-header">
                            <h2>Your Playlists</h2>
                            <button className="add-playlist">+</button>
                        </div>
                        <div className="playlist-grid">
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
                        <button className="show-more">show more</button>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;