import React from 'react';
import './styles/Playlist.css';

class Playlist extends React.Component {
    renderSongs() {
        return this.props.songs.map((song, index) => (
            <div key={index} className="song-item">
                <span>{song.title}</span>
                <span>{song.artist}</span>
                <span>{song.duration}</span>
            </div>
        ));
    }

    render() {
        const { image, title, artist, songs, duration, plays } = this.props;

        return (
            <div className="playlist-container">
                <div className="playlist-image">
                    <img src={image} alt={title} />
                </div>
                <div className="playlist-info">
                    <span className="playlist-label">Playlist</span>
                    <h2 className="playlist-title">{title}</h2>
                    <div className="playlist-details">
                        <img src={image} alt={artist} className="artist-image" />
                        <span>{artist}</span>
                        <span className="separator">•</span>
                        <span>{songs.length} songs</span>
                        <span className="separator">•</span>
                        <span>{duration}</span>
                        <span className="separator">•</span>
                        <span>{plays.toLocaleString()} plays</span>
                    </div>
                </div>
                <div className="songs-list">
                    {this.renderSongs()}
                </div>
            </div>
        )
    }
}

export default Playlist;