import React from 'react';
import './styles/PlaylistPreview.css';

class PlaylistPreview extends React.Component {
    render() {
        const {
            image,
            title,
            artist,
            album,
            songsCount,
            duration = 'N/A',
            plays = 0,
        } = this.props;

        return (
            <div className="playlist-container">
                <div className="playlist-image">
                    <img src={image} alt={title} />
                </div>
                <div className="playlist-info">
                    <span className="playlist-label">Playlist</span>
                    <h3 className="playlist-title">{title}</h3>
                    <p>{artist}</p>
                    <p>{album}</p>
                    <div className="playlist-details">
                        <span>{songsCount} songs</span>
                        <span className="separator">|</span>
                        <span>{duration}</span>
                        <span className="separator">|</span>
                        <span>{plays.toLocaleString()} plays</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistPreview;