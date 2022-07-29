export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
export const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

export const BASIC_AUTH = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

export const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export const NOW_PLAYING_ENDPOINT = `${SPOTIFY_API_BASE_URL}/me/player/currently-playing`;
export const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
