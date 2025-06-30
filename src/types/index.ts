export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  genres?: Genre[];
  runtime?: number;
  director?: string;
  cast?: string[];
  trailer_key?: string;
  streaming_platforms?: StreamingPlatform[];
  full_cast?: Cast[];
  full_crew?: Crew[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface SearchParams {
  query: string;
  type: 'name' | 'actor' | 'director' | 'genre';
}

export interface WatchlistItem {
  movie: Movie;
  addedAt: Date;
}

export interface MovieDetails extends Movie {
  budget: number;
  revenue: number;
  status: string;
  production_companies: ProductionCompany[];
  spoken_languages: Language[];
  videos: Video[];
  recommendations: Movie[];
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path?: string;
}

export interface Language {
  iso_639_1: string;
  name: string;
}

export interface Video {
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface ApiResponse<T> {
  results: T[];
  total_pages: number;
  total_results: number;
  page: number;
}

// New types for enhanced cast/crew functionality
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
  order: number;
  biography?: string;
  birthday?: string;
  place_of_birth?: string;
  known_for_department?: string;
  popularity?: number;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path?: string;
  biography?: string;
  birthday?: string;
  place_of_birth?: string;
  known_for_department?: string;
  popularity?: number;
}

export interface Person {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday?: string;
  place_of_birth: string;
  profile_path?: string;
  known_for_department: string;
  popularity: number;
  imdb_id?: string;
  homepage?: string;
}

export interface StreamingPlatform {
  id: number;
  name: string;
  logo_path: string;
  type: 'subscription' | 'rental' | 'purchase' | 'free';
  price?: number;
  url?: string;
}

// New type for user ratings
export interface UserRating {
  movieId: number;
  rating: number; // 1-10 scale
  review?: string;
  ratedAt: Date;
} 