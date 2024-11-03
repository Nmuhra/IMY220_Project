import React from 'react';
import { Play, Pause } from 'lucide-react';
import './styles/SongPreview.css';

class SongPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }

    togglePlay = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }));
    }

    formatDuration = (duration) => {
        if (!duration) return 'N/A';
        return duration; // Assuming duration comes in formatted form, if not we can add formatting logic
    }

    render() {
        const {
            image,
            title,
            artist,
            album,
            year,
            duration = 'N/A',
            plays = 0,
            createdAt
        } = this.props;

        const { isPlaying } = this.state;

        return (
            <div className="song-preview-container">
                <div className="song-preview-image-wrapper">
                    <img
                        src={image || '/assets/images/song.png'}
                        alt={title}
                        className="song-preview-image"
                    />
                    <button
                        className="play-overlay-button"
                        onClick={this.togglePlay}
                    >
                        {isPlaying ?
                            <Pause className="play-icon" size={24} /> :
                            <Play className="play-icon" size={24} />
                        }
                    </button>
                </div>
                <div className="song-preview-info">
                    <span className="song-preview-label"></span>
                    <h3 className="song-preview-title">{title}</h3>
                    <div className="artist-preview-info">
                        <img
                            src={image || '/assets/images/artist.png'}
                            alt={artist}
                            className="artist-preview-image"
                        />
                        <span className="artist-preview-name">{artist}</span>
                    </div>
                    <div className="song-preview-details">
                        <span>{album}</span>
                        {year && (
                            <>
                                <span className="separator">•</span>
                                <span>{year}</span>
                            </>
                        )}
                        <span className="separator">•</span>
                        <span>{this.formatDuration(duration)}</span>
                        <span className="separator">•</span>
                        <span>{plays.toLocaleString()} plays</span>
                    </div>
                    {createdAt && (
                        <div className="song-preview-date">
                            Added {new Date(createdAt).toLocaleDateString()}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default SongPreview;