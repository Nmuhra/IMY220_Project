import React from 'react';
import { Share2, Edit2 } from 'lucide-react';
import './styles/PlaylistPage.css';
import SongList from '../components/SongList.js';
import EditPlaylist from '../components/EditPlaylist.js';
import CommentList from '../components/CommentList.js';
import AddComment from '../components/AddComment.js';
import Navbar from '../components/Navbar.js';


class PlaylistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: {
                id: 1,
                name: "Playlist name",
                image: "/assets/images/jimi.jpg",
                songCount: 7,
                songs: [
                    { id: 1, name: "All Along the Watchtower", artist: "Jimi Hendrix" },
                    { id: 2, name: "Voodoo Child", artist: "Jimi Hendrix" },
                    { id: 3, name: "Sonne", artist: "Rammstein" },
                    { id: 4, name: "Back in Black", artist: "AC/DC" },
                    { id: 5, name: "Hurt", artist: "Johnny Cash" },
                    { id: 6, name: "Three little birds", artist: "Bob Marley" },
                    { id: 7, name: "Hustling", artist: "Rick Ross" },
                ]
            },
            comments: [
                { id: 1, author: "John Doe", content: "Great playlist!", timestamp: "2024-09-13 14:30" },
                { id: 2, author: "Jane Smith", content: "Love the mix of genres!", timestamp: "2024-09-13 15:45" }
            ],
            isEditing: false
        };
    }

    toggleEdit = () => {
        this.setState(prevState => ({ isEditing: !prevState.isEditing }));
    }

    handlePlaylistEdit = (updatedPlaylist) => {
        this.setState({ playlist: updatedPlaylist, isEditing: false });
    }

    handleAddComment = (newComment) => {
        const comment = {
            id: this.state.comments.length + 1,
            ...newComment,
            timestamp: new Date().toLocaleString()
        };
        this.setState(prevState => ({
            comments: [...prevState.comments, comment]
        }));
    }

    render() {
        const { playlist, comments, isEditing } = this.state;

        return (
            <div className="playlist-page">
                <Navbar />
                {isEditing ? (
                    <EditPlaylist
                        playlist={playlist}
                        onSave={this.handlePlaylistEdit}
                        onCancel={this.toggleEdit}
                    />
                ) : (
                    <>
                        <div className="playlist-header">
                            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
                            <div className="playlist-info">
                                <h1 className="playlist-name">{playlist.name}</h1>
                                <p className="playlist-song-count">{playlist.songCount} songs</p>
                            </div>
                            <button className="edit-button" onClick={this.toggleEdit}>
                                <Edit2 size={24} />
                            </button>
                            <button className="share-button">
                                <Share2 size={24} />
                            </button>
                        </div>
                        <SongList songs={playlist.songs} />
                        <CommentList comments={comments} />
                        <AddComment onSubmit={this.handleAddComment} />
                    </>
                )}
            </div>
        );
    }
}

export default PlaylistPage;