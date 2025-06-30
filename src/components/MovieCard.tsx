import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Clock, Calendar } from 'lucide-react';
import { Movie } from '../types';
import { useWatchlist } from '../context/WatchlistContext';
import { useRating } from '../context/RatingContext';
import RatingStars from './RatingStars';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const { getUserRating } = useRating();
  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const userRating = getUserRating(movie.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="card overflow-hidden transition-transform duration-200 group-hover:scale-105">
        {/* Movie Poster */}
        <div className="relative">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-full h-80 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/300x450/666666/FFFFFF?text=No+Image';
            }}
          />
          
          {/* Watchlist Button */}
          <button
            onClick={handleWatchlistToggle}
            className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 ${
              inWatchlist
                ? 'bg-primary-600 text-white'
                : 'bg-black bg-opacity-50 text-white hover:bg-primary-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${inWatchlist ? 'fill-current' : ''}`} />
          </button>

          {/* User Rating Badge */}
          {userRating && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current" />
              <span>{userRating.rating}</span>
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
            {movie.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
            {movie.overview}
          </p>

          {/* Movie Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(movie.release_date)}</span>
            </div>
            
            {movie.runtime && (
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{movie.runtime}m</span>
              </div>
            )}
          </div>

          {/* Genres */}
          {movie.genres && movie.genres.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {movie.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre.id}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                >
                  {genre.name}
                </span>
              ))}
              {movie.genres.length > 2 && (
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                  +{movie.genres.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard; 