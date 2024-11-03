import { API_BASE_URL, getAuthToken } from './config.js';

export const getAllSongs = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/songs`, {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch songs');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const createSong = async (songData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
            },
            body: JSON.stringify(songData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create song');
        }

        return data;
    } catch (error) {
        throw error;
    }
};