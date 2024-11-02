import { API_BASE_URL, setAuthToken } from './config.js';

export const getUser = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'get user failed');
        }

        return data;
    } catch (error) {
        throw error;
    }
};