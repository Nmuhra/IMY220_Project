import React, { Component } from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import Navbar from '../components/Navbar.js';
import { getAllPlaylists } from '../services/playlistService.js';
import './styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            error: '',
        };
    }

    async componentDidMount() {
        try {
            // Fetch playlists from the API
            const response = await getAllPlaylists();
            console.log('Fetched playlists:', response);

            // Access the nested data array
            this.setState({ playlists: Array.isArray(response.data) ? response.data : [] });
        } catch (error) {
            console.error('Error fetching playlists:', error);
            this.setState({ error: error.message });
        }
    }


    render() {
        const { playlists, error } = this.state;

        return (
            <div className="home-container">
                <Navbar />
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
                        {error && <p className="error">{error}</p>}
                        <div className="playlist-grid">
                            {playlists.map(playlist => (
                                <PlaylistPreview
                                    key={playlist._id}  // Using MongoDB's _id as the unique key
                                    image={playlist.image || '/assets/images/playlist.png'}
                                    title={playlist.title}
                                    artist={playlist.artist}
                                    createdBy={playlist.creator}
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
