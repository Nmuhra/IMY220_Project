import React, { Component } from 'react';
import PlaylistPreview from '../components/PlaylistPreview.js';
import Navbar from '../components/Navbar.js';
import { getAllPlaylists, createPlaylist } from '../services/playlistService.js';
import { getAllSongs, createSong, deleteSong } from '../services/songService.js';
import './styles/Home.css';
import SongPreview from '../components/SongPreview.js';
import CreatePlaylist from '../components/CreatePlaylist.js';
import CreateSong from '../components/CreateSong.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            songs: [],
            error: '',
            activeView: 'playlists',
            showCreateForm: false,
            isDeleting: false
        };
    }

    async componentDidMount() {
        try {
            const response = await getAllPlaylists();
            const songs = await getAllSongs();

            console.log('Fetched playlists:', response);
            console.log('Fetched songs:', songs);

            this.setState({
                playlists: Array.isArray(response.data) ? response.data : [],
                songs: Array.isArray(songs.data) ? songs.data : []
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ error: error.message });
        }
    }

    handleViewToggle = (view) => {
        this.setState({ activeView: view });
    }

    toggleCreateForm = () => {
        this.setState(prevState => ({
            showCreateForm: !prevState.showCreateForm
        }));
    }

    handleCreatePlaylist = async (playlistData) => {
        try {
            const response = await createPlaylist(playlistData);
            this.setState(prevState => ({
                playlists: [...prevState.playlists, response.data],
                showCreateForm: false
            }));
        } catch (error) {
            console.error('Error creating playlist:', error);
            this.setState({ error: error.message });
        }
    }

    handleCreateSong = async (songData) => {
        try {
            const response = await createSong(songData);
            this.setState(prevState => ({
                songs: [...prevState.songs, response.data],
                showCreateForm: false
            }));
        } catch (error) {
            console.error('Error creating song:', error);
            this.setState({ error: error.message });
        }
    }

    handleDeleteSong = async (songId) => {
        this.setState({ isDeleting: true });
        try {
            await deleteSong(songId);
            // Remove the deleted song from state
            this.setState(prevState => ({
                songs: prevState.songs.filter(song => song._id !== songId),
                error: ''
            }));
        } catch (error) {
            console.error('Error deleting song:', error);
            this.setState({ error: error.message });
        } finally {
            this.setState({ isDeleting: false });
        }
    }

    render() {
        const { playlists, songs, error, activeView, showCreateForm, isDeleting } = this.state;
        const currentUserId = localStorage.getItem('userId'); // Get current user ID from localStorage

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
                                    <button className="add-button" onClick={this.toggleCreateForm}>+</button>
                                </div>
                                {showCreateForm && (
                                    <CreateSong onCreateSong={this.handleCreateSong} />
                                )}
                                {error && <p className="error">{error}</p>}
                                <div className="content-grid">
                                    {songs.map(song => (
                                        <SongPreview
                                            key={song._id}
                                            id={song._id}
                                            image={song.image || '/assets/images/playlist.png'}
                                            title={song.title}
                                            artist={song.artist}
                                            album={song.album}
                                            duration={song.duration}
                                            plays={song.plays}
                                            createdAt={song.createdAt}
                                            spotifyUrl={song.spotifyUrl}
                                            uploadedBy={song.uploadedBy}
                                            currentUserId={currentUserId}
                                            onDelete={this.handleDeleteSong}
                                            isDeleting={isDeleting}
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