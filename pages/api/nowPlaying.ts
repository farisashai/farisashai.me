import type {NextApiRequest, NextApiResponse} from 'next';
import {getNowPlaying} from 'utils';
import {NowPlayingResponse, FixMeLater} from 'types';

const NO_DATA = {isPlaying: false};

export default async function handler(_: NextApiRequest, res: NextApiResponse<NowPlayingResponse>) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json(NO_DATA);
  }

  const responseObj = await response.json();
  const song = responseObj.item;

  if (!song) return res.status(200).json(NO_DATA);

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  const data: NowPlayingResponse = {
    album: song.album.name,
    albumImageUrl: song.album.images[0].url,
    artist: song.artists.map(_artist => _artist.name).join(', '),
    isPlaying: responseObj.is_playing,
    songUrl: song.external_urls.spotify,
    title: song.name,
  };

  return res.status(200).json(data);
}
