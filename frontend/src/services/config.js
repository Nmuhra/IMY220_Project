export const API_BASE_URL = 'http://localhost:3000/api'; // adjust the port as needed

export const getAuthToken = () => localStorage.getItem('token');

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
};