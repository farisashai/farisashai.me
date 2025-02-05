import axios from 'axios';
import {FixMeLater} from 'types';
import {
  BASIC_AUTH,
  NOW_PLAYING_ENDPOINT,
  REFRESH_TOKEN,
  TOKEN_ENDPOINT,
  TOP_TRACKS_ENDPOINT,
} from './constants';

export const fetcher = async (input: FixMeLater, init: FixMeLater) => {
  const res = await axios.get(input, init);
  return res.data;
};

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC_AUTH}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const {access_token} = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const getTopTracks = async () => {
  const {access_token} = await getAccessToken();

  return fetch(`${TOP_TRACKS_ENDPOINT}?limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'force-cache',
  });
};
