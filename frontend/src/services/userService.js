import { API_BASE_URL } from './config.js';

// Helper function to get auth token
const getAuthToken = () => localStorage.getItem('token');

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication token not found');
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'API request failed');
    }

    return data;
};

// User-related API functions
export const getUser = async (userId) => {
    if (!userId) {
        throw new Error('User ID is required');
    }
    return apiCall(`/users/${userId}`);
};

export const updateUser = async (userId, userData) => {
    if (!userId) {
        throw new Error('User ID is required');
    }
    return apiCall(`/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
    });
};

export const createPlaylist = async (playlistData) => {
    return apiCall('/playlists', {
        method: 'POST',
        body: JSON.stringify(playlistData),
    });
};

export const getUserPlaylists = async (userId) => {
    if (!userId) {
        throw new Error('User ID is required');
    }
    return apiCall(`/users/${userId}/playlists`);
};

export const getUserFriends = async (userId) => {
    if (!userId) {
        throw new Error('User ID is required');
    }
    return apiCall(`/users/${userId}/friends`);
};