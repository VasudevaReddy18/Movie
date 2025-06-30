import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import { movieApi } from '../services/api';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchType, setSearchType] = useState<'name' | 'actor' | 'director' | 'genre'>(
    (searchParams.get('type') as any) || 'name'
  );

  const searchTypes = [
    { value: 'name', label: 'Movie Name' },
    { value: 'actor', label: 'Actor' },
    { value: 'director', label: 'Director' },
    { value: 'genre', label: 'Genre' }
  ];

  useEffect(() => {
    const query = searchParams.get('q');
    const type = searchParams.get('type') as any;
    
    if (query) {
      setSearchQuery(query);
      setSearchType(type || 'name');
      performSearch(query, type || 'name');
    }
  }, [searchParams]);

  const performSearch = async (query: string, type: 'name' | 'actor' | 'director' | 'genre') => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    setLoading(true);
    try {
      const results = await movieApi.searchMovies(query, type);
      setMovies(results);
    } catch (error) {
      console.error('Error searching movies:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery, type: searchType });
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setMovies([]);
    setSearchParams({});
  };

  const getSearchIcon = () => {
    switch (searchType) {
      case 'actor':
        return '👤';
      case 'director':
        return '🎬';
      case 'genre':
        return '🎭';
      default:
        return '🎬';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Search Movies
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Type Selector */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg">
                  {getSearchIcon()}
                </div>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value as any)}
                  className="pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {searchTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search by ${searchType}...`}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="btn-primary px-8"
                disabled={!searchQuery.trim()}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : searchQuery ? (
          <div>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Search Results
                </h2>
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {movies.length} {movies.length === 1 ? 'result' : 'results'} found
              </span>
            </div>

            {/* Results Grid */}
            {movies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No movies found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your search terms or search type
                </p>
                <button
                  onClick={clearSearch}
                  className="btn-primary"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Search Suggestions */
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Start your search
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Search for movies by name, actor, director, or genre
            </p>
            
            {/* Search Examples */}
            <div className="max-w-2xl mx-auto">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Try searching for:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Movie Names</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Inception</li>
                    <li>• The Dark Knight</li>
                    <li>• Interstellar</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Actors & Directors</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Christopher Nolan</li>
                    <li>• Leonardo DiCaprio</li>
                    <li>• Quentin Tarantino</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 