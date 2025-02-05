import type {NextApiRequest, NextApiResponse} from 'next';
import {getTopTracks} from 'utils';
import {TopTracksResponse} from 'types';

const NO_DATA = [];

export const revalidate = 3600; // revalidate the data at most every hour

export default async function handler(_: NextApiRequest, res: NextApiResponse<TopTracksResponse>) {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json(NO_DATA);
  }

  const responseObj = await response.json();
  const tracks = responseObj.items;

  if (!tracks) return res.status(200).json(NO_DATA);

  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=3600');

  const data: TopTracksResponse = tracks.map(song => ({
    album: song.album.name,
    albumImageUrl: song.album.images[0].url,
    artist: song.album.artists[0].name,
    songUrl: song.external_urls.spotify,
    title: song.name,
  }));

  return res.status(200).json(data);
}
