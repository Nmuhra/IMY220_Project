import React, { Component } from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import Navbar from '../components/Navbar.js';
import { getAllPlaylists, createPlaylist } from '../services/playlistService.js';
import { getAllSongs } from '../services/songService.js';
import './styles/Home.css';
import SongPreview from '../components/SongPreview.js';
import CreatePlaylist from '../components/CreatePlaylist.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            songs: [],
            error: '',
            activeView: 'playlists',
            showCreateForm: false // New state variable to control form visibility
        };
    }

    async componentDidMount() {
        try {
            // Fetch playlists from the API
            const response = await getAllPlaylists();
            const songs = await getAllSongs();

            console.log('Fetched playlists:', response);
            console.log('Fetched songs:', songs);

            // Access the nested data array
            this.setState({
                playlists: Array.isArray(response.data) ? response.data : [],
                songs: Array.isArray(songs.data) ? songs.data : []
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ error: error.message });
        }
    }

    // Add this method to handle toggle
    handleViewToggle = (view) => {
        this.setState({ activeView: view });
    }
    // Toggle function for the form visibility
    toggleCreateForm = () => {
        this.setState(prevState => ({
            showCreateForm: !prevState.showCreateForm
        }));
    }

    // Method to handle new playlist creation
    handleCreatePlaylist = async (playlistData) => {
        try {
            const response = await createPlaylist(playlistData); // Assuming createPlaylist is defined in your service layer
            this.setState(prevState => ({
                playlists: [...prevState.playlists, response.data],
                showCreateForm: false // Close form after creation
            }));
        } catch (error) {
            console.error('Error creating playlist:', error);
            this.setState({ error: error.message });
        }
    }
    render() {
        const { playlists, songs, error, activeView, showCreateForm } = this.state;

        return (
            <div className="home-container">
                <Navbar />
                <div className="view-toggle">
                    <button
                        className={`toggle-btn ${activeView === 'playlists' ? 'active' : ''}`}
                        onClick={() => this.handleViewToggle('playlists')}
                    >
                        Playlists
                    </button>
                    <button
                        className={`toggle-btn ${activeView === 'songs' ? 'active' : ''}`}
                        onClick={() => this.handleViewToggle('songs')}
                    >
                        Songs
                    </button>
                </div>
                <main>
                    <section className="content-section">
                        {activeView === 'playlists' ? (
                            <>
                                <div className="section-header">
                                    <h2>Your Playlists</h2>
                                    <button className="add-button" onClick={this.toggleCreateForm}>+</button>
                                </div>
                                {showCreateForm && (
                                    <CreatePlaylist onCreatePlaylist={this.handleCreatePlaylist} />
                                )}
                                {error && <p className="error">{error}</p>}
                                <div className="content-grid">
                                    {playlists.map(playlist => (
                                        <PlaylistPreview
                                            key={playlist._id}
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
                            </>
                        ) : (
                            <>
                                <div className="section-header">
                                    <h2>Your Songs</h2>
                                    <button className="add-button">+</button>
                                </div>
                                {error && <p className="error">{error}</p>}
                                <div className="content-grid">
                                    {songs.map(song => (
                                        <SongPreview
                                            key={song._id}
                                            image={song.image || '/assets/images/playlist.png'}
                                            title={song.title}
                                            artist={song.artist}
                                            createdBy={song.creator}
                                            duration={song.duration}
                                            plays={song.plays}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        <button className="show-more">show more</button>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;