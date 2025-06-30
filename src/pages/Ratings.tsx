import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, SortAsc, SortDesc, Calendar, MessageSquare } from 'lucide-react';
import { useRating } from '../context/RatingContext';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';
import RatingStars from '../components/RatingStars';

type SortOption = 'date' | 'rating' | 'title';
type SortOrder = 'asc' | 'desc';

const Ratings: React.FC = () => {
  const { ratings, removeRating } = useRating();
  const { watchlist } = useWatchlist();
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterRating, setFilterRating] = useState<number>(0);

  const sortedRatings = useMemo(() => {
    let filtered = ratings;

    // Filter by rating
    if (filterRating > 0) {
      filtered = filtered.filter(rating => rating.rating === filterRating);
    }

    // Sort ratings
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.ratedAt).getTime() - new Date(b.ratedAt).getTime();
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'title':
          // We'll need to get movie titles from the watchlist or API
          const movieA = watchlist.find(item => item.movie.id === a.movieId)?.movie;
          const movieB = watchlist.find(item => item.movie.id === b.movieId)?.movie;
          comparison = (movieA?.title || '').localeCompare(movieB?.title || '');
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [ratings, sortBy, sortOrder, filterRating, watchlist]);

  const averageRating = useMemo(() => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return Math.round((sum / ratings.length) * 10) / 10;
  }, [ratings]);

  const ratingDistribution = useMemo(() => {
    const distribution = new Array(10).fill(0);
    ratings.forEach(rating => {
      distribution[rating.rating - 1]++;
    });
    return distribution;
  }, [ratings]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  if (ratings.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⭐</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No Ratings Yet
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start rating movies to build your personal collection of reviews.
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
            <Star className="w-8 h-8 text-yellow-500" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Ratings
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {ratings.length} {ratings.length === 1 ? 'rating' : 'ratings'} • Average: {averageRating.toFixed(1)}/10
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {ratings.length}
            </div>
            <p className="text-gray-600 dark:text-gray-400">Total Ratings</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {averageRating.toFixed(1)}
            </div>
            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {ratings.filter(r => r.review).length}
            </div>
            <p className="text-gray-600 dark:text-gray-400">With Reviews</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {Math.max(...ratingDistribution)}
            </div>
            <p className="text-gray-600 dark:text-gray-400">Most Common Rating</p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Rating Distribution
          </h3>
          <div className="space-y-2">
            {ratingDistribution.map((count, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="w-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {index + 1}
                </span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${(count / Math.max(...ratingDistribution)) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-sm text-gray-600 dark:text-gray-400 text-right">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value={0}>All Ratings</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rating => (
                <option key={rating} value={rating}>{rating} Stars</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <SortAsc className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="date">Date</option>
              <option value="rating">Rating</option>
              <option value="title">Title</option>
            </select>
            
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Ratings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {sortedRatings.map((rating) => {
            const movie = watchlist.find(item => item.movie.id === rating.movieId)?.movie;
            
            if (!movie) {
              return (
                <div key={rating.movieId} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Movie ID: {rating.movieId}
                    </p>
                    <RatingStars rating={rating.rating} size="sm" showValue={true} />
                    <p className="text-xs text-gray-400 mt-2">
                      {formatDate(rating.ratedAt)}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={rating.movieId} className="relative">
                <MovieCard movie={movie} />
                
                {/* Rating Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 rounded-b-lg">
                  <div className="flex items-center justify-between text-white">
                    <RatingStars rating={rating.rating} size="sm" />
                    <div className="flex items-center space-x-1 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(rating.ratedAt)}</span>
                    </div>
                  </div>
                  {rating.review && (
                    <div className="flex items-center space-x-1 text-xs text-gray-300 mt-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>Review added</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ratings; 