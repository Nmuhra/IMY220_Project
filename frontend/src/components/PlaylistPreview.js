import React from 'react';
import './styles/PlaylistPreview.css';

class PlaylistPreview extends React.Component {

    render() {
        const { image, title, artist, album, songsCount, duration, plays } = this.props;

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
                        <span>{album}</span>
                        <span className="separator">•</span>
                        <span>{songsCount} songs</span>
                        <span className="separator">•</span>
                        <span>{duration}</span>
                        <span className="separator">•</span>
                        <span>{plays.toLocaleString()} plays</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistPreview;