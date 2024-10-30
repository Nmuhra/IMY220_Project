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
            duration = 'N/A',  // Default values if missing
            plays = 0,
        } = this.props;

        return (
            <div className="playlist-preview">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{artist}</p>
                <p>{album}</p>
                <p>{songsCount} songs</p>
                <p>{duration}</p>
                <p>{plays.toLocaleString()} plays</p>  {/* Ensure plays is a number */}
            </div>
        );
    }
}

export default PlaylistPreview;
