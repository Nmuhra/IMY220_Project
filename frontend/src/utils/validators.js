// src/utils/validators.js
export const isValidSpotifyUrl = (url) => {
    try {
        const parsedUrl = new URL(url);

        // Check if it's a Spotify domain
        if (!parsedUrl.hostname.includes('spotify.com')) {
            return false;
        }

        // Check if it's a track URL
        // Valid formats:
        // https://open.spotify.com/track/[ID]
        // https://open.spotify.com/track/[ID]?si=[...]
        if (parsedUrl.pathname.startsWith('/track/')) {
            const trackId = parsedUrl.pathname.split('/')[2];
            return trackId && trackId.length > 0;
        }

        return false;
    } catch (e) {
        // If URL parsing fails, it's not a valid URL
        return false;
    }
};

// Helper function to extract Spotify track ID from URL
export const getSpotifyTrackId = (url) => {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.pathname.startsWith('/track/')) {
            return parsedUrl.pathname.split('/')[2];
        }
        return null;
    } catch (e) {
        return null;
    }
};

// Helper function to format duration from seconds to mm:ss
export const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};