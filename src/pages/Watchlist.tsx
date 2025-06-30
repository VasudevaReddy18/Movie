import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, Calendar } from 'lucide-react';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

const Watchlist: React.FC = () => {
  const { watchlist, clearWatchlist } = useWatchlist();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  if (watchlist.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">❤️</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Watchlist is Empty
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start building your personal collection by adding movies you want to watch later.
            </p>
            <Link to="/" className="btn-primary">
              Discover Movies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-primary-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Watchlist
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'} saved
              </p>
            </div>
          </div>
          
          <button
            onClick={clearWatchlist}
            className="btn-secondary flex items-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>

        {/* Watchlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {watchlist.map((item) => (
            <div key={item.movie.id} className="relative group">
              <MovieCard movie={item.movie} />
              
              {/* Added Date Badge */}
              <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(item.addedAt)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="btn-primary">
              Discover More Movies
            </Link>
            <Link to="/trending" className="btn-secondary">
              View Trending
            </Link>
            <button
              onClick={clearWatchlist}
              className="btn-secondary text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              Clear Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist; 