import React, { useState } from 'react';
import { isValidSpotifyUrl } from '../utils/validators.js';

const CreateSong = ({ onCreateSong, onDeleteSong }) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        album: '',
        duration: '',
        spotifyUrl: '',
    });
    const [errors, setErrors] = useState({});
    const userId = localStorage.getItem('userId');

    const validateSpotifyUrl = (url) => {
        if (!url) return true; // Optional field
        return isValidSpotifyUrl(url);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate Spotify URL if provided
        if (formData.spotifyUrl && !validateSpotifyUrl(formData.spotifyUrl)) {
            newErrors.spotifyUrl = 'Please enter a valid Spotify URL';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Create song data with user ID as creator and current timestamp
        const songData = {
            ...formData,
            uploadedBy: userId,
            createdAt: new Date().toISOString(), // Automatic timestamp
        };

        try {
            await onCreateSong(songData);
            // Reset form after successful creation
            setFormData({
                title: '',
                artist: '',
                album: '',
                duration: '',
                spotifyUrl: '',
            });
        } catch (error) {
            setErrors({ submit: error.message });
        }
    };

    return (
        <div className="create-song-container">
            <form onSubmit={handleSubmit} className="create-song-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="Song Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        value={formData.artist}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="album"
                        placeholder="Album"
                        value={formData.album}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="duration"
                        placeholder="Duration (seconds)"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="url"
                        name="spotifyUrl"
                        placeholder="Spotify URL (optional)"
                        value={formData.spotifyUrl}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.spotifyUrl && (
                        <span className="error-message">{errors.spotifyUrl}</span>
                    )}
                </div>

                {formData.spotifyUrl && validateSpotifyUrl(formData.spotifyUrl) && (
                    <div className="spotify-preview">
                        <iframe
                            src={`https://open.spotify.com/embed/${formData.spotifyUrl.split('/').pop()}`}
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        />
                    </div>
                )}

                {errors.submit && (
                    <div className="error-message">{errors.submit}</div>
                )}

                <button type="submit" className="submit-button">
                    Create Song
                </button>
            </form>
        </div>
    );
};

export default CreateSong;