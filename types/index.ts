export type FixMeLater = any;

export type TrackInfo = {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  songUrl?: string;
  title?: string;
};

type IsPlaying = {
  isPlaying: boolean;
};

export type NowPlayingResponse = TrackInfo & IsPlaying;

export type TopTracksResponse = TrackInfo[];
