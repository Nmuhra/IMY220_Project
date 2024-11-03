// CreatePlaylist.js
import React, { useState } from 'react';

const CreatePlaylist = ({ onCreatePlaylist }) => { // Pass userId as a prop
    const [title, setTitle] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const userId = localStorage.getItem('userId');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create playlist data with user ID as creator
        const playlistData = {
            title,
            creator: userId,
            isPublic,
        };

        onCreatePlaylist(playlistData);  // Pass playlist data to the parent handler

        setTitle('');  // Clear fields after submission
        setIsPublic(false);
    };

    return (
        <form onSubmit={handleSubmit} className="create-playlist-form">
            <input
                type="text"
                placeholder="Playlist Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                />
                Make Public
            </label>
            <button type="submit">Create Playlist</button>
        </form>
    );
};

export default CreatePlaylist;
