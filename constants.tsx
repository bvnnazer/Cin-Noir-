
import { Movie, Genre } from './types';

export const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Dune: Part Two',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&h=600&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&h=1080&auto=format&fit=crop',
    rating: 8.9,
    year: 2024,
    genres: [Genre.Action, Genre.Adventure, Genre.SciFi],
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    duration: '2h 46m',
    trending: true,
    type: 'Movie'
  },
  {
    id: '2',
    title: 'Arcane',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=600&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1614728263952-84ea206f9c45?q=80&w=1920&h=1080&auto=format&fit=crop',
    rating: 9.0,
    year: 2021,
    genres: [Genre.Animation, Genre.Action, Genre.SciFi],
    description: 'Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.',
    duration: 'Season 1',
    trending: true,
    type: 'Series',
    episodes: [
      { id: 'e1', number: 1, title: 'Welcome to the Playground', duration: '41m', thumbnail: 'https://picsum.photos/seed/arc1/320/180' },
      { id: 'e2', number: 2, title: 'Some Mysteries Are Better Left Unsolved', duration: '44m', thumbnail: 'https://picsum.photos/seed/arc2/320/180' },
      { id: 'e3', number: 3, title: 'The Base Violence Necessary for Change', duration: '40m', thumbnail: 'https://picsum.photos/seed/arc3/320/180' }
    ]
  },
  {
    id: '3',
    title: 'The Batman',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&h=600&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1920&h=1080&auto=format&fit=crop',
    rating: 7.8,
    year: 2022,
    genres: [Genre.Action, Genre.Crime, Genre.Drama],
    description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption.',
    duration: '2h 56m',
    trending: true,
    type: 'Movie'
  },
  {
    id: '4',
    title: 'Inception',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400&h=600&auto=format&fit=crop',
    rating: 8.8,
    year: 2010,
    genres: [Genre.Action, Genre.SciFi, Genre.Thriller],
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    duration: '2h 28m',
    type: 'Movie'
  },
  {
    id: '5',
    title: 'The Bear',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&h=600&auto=format&fit=crop',
    rating: 8.6,
    year: 2022,
    genres: [Genre.Drama, Genre.Comedy],
    description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
    duration: 'Season 2',
    type: 'Series',
    episodes: [
      { id: 'b1', number: 1, title: 'Beef', duration: '28m', thumbnail: 'https://picsum.photos/seed/bear1/320/180' },
      { id: 'b2', number: 2, title: 'Hands', duration: '30m', thumbnail: 'https://picsum.photos/seed/bear2/320/180' }
    ]
  }
];

export const APP_THEME = {
  accent: '#5865F2', // Discord Blurple
  background: '#313338', // Discord primary bg
  sidebar: '#2b2d31', // Discord sidebar
  darkest: '#1e1f22', // Discord server list
};
