import { API_BASE_URL, getAuthToken } from './config.js';

export const createPlaylist = async (playlistData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
            },
            body: JSON.stringify(playlistData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create playlist');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const getAllPlaylists = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/playlists`, {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch playlists');
        }

        return data;
    } catch (error) {
        throw error;
    }
};



export const addSongToPlaylist = async (playlistId, songId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/playlists/${playlistId}/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
            },
            body: JSON.stringify({ songId }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to add song to playlist');
        }

        return data;
    } catch (error) {
        throw error;
    }
};