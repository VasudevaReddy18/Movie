import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, TrendingUp, Flame, Search, Heart } from 'lucide-react';
import { movieApi } from '../services/api';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trending, popular] = await Promise.all([
          movieApi.getTrendingMovies(),
          movieApi.getPopularMovies()
        ]);
        setTrendingMovies(trending);
        setPopularMovies(popular);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const featuredMovie = trendingMovies[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {featuredMovie && (
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={featuredMovie.backdrop_path}
              alt={featuredMovie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {featuredMovie.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6 line-clamp-3">
                  {featuredMovie.overview}
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1 bg-yellow-500 text-black px-3 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{featuredMovie.vote_average.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-300">
                    {new Date(featuredMovie.release_date).getFullYear()}
                  </span>
                  {featuredMovie.runtime && (
                    <span className="text-gray-300">{featuredMovie.runtime}m</span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <Link
                    to={`/movie/${featuredMovie.id}`}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    to={`/movie/${featuredMovie.id}`}
                    className="btn-secondary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trending Movies */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Trending Now
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/trending"
              className="btn-primary"
            >
              View All Trending
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-8">
            <Flame className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Popular Movies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {popularMovies.slice(0, 6).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/popular"
              className="btn-primary"
            >
              View All Popular
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Discover Amazing Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Smart Search
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Search by name, actor, director, or genre to find exactly what you're looking for.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Trending & Popular
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with the latest trending movies and popular releases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Personal Watchlist
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Save your favorite movies to watch later with our personal watchlist feature.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Detailed Reviews
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get comprehensive movie details, ratings, trailers, and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 