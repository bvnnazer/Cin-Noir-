
export interface Episode {
  id: string;
  number: number;
  title: string;
  thumbnail: string;
  duration: string;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  banner?: string;
  rating: number;
  year: number;
  genres: string[];
  description: string;
  duration: string;
  trending?: boolean;
  type: 'Movie' | 'Series';
  episodes?: Episode[];
}

export type Anime = Movie;

export type AuthMode = 'login' | 'register' | null;

export interface UserProfile {
  username: string;
  avatar: string;
  isLoggedIn: boolean;
  preferences: {
    language: string;
    autoplay: boolean;
    quality: 'Auto' | '4K' | '1080p' | '720p';
  };
}

export enum Genre {
  Action = 'Action',
  Adventure = 'Adventure',
  Comedy = 'Comedy',
  Drama = 'Drama',
  Fantasy = 'Fantasy',
  Horror = 'Horror',
  Mystery = 'Mystery',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller',
  Romance = 'Romance',
  Animation = 'Animation',
  Crime = 'Crime',
  Documentary = 'Documentary'
}
