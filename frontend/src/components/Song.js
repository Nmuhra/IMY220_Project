import React from 'react';
import './styles/Song.css';

class Song extends React.Component {
    render() {
        const { image, title, artist, album, year, duration, plays } = this.props;

        return (
            <div className="song-container">
                <div className="song-image">
                    <img src={image} alt={title} />
                </div>
                <div className="song-info">
                    <span className="song-label">Song</span>
                    <h2 className="song-title">{title}</h2>
                    <div className="song-details">
                        <img src={image} alt={artist} className="artist-image" />
                        <span>{artist}</span>
                        <span className="separator">•</span>
                        <span>{album}</span>
                        <span className="separator">•</span>
                        <span>{year}</span>
                        <span className="separator">•</span>
                        <span>{duration}</span>
                        <span className="separator">•</span>
                        <span>{plays.toLocaleString()} plays</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Song;