import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Clock, Calendar, Play, DollarSign, Users, ExternalLink, Video, Users as CastIcon, Settings as CrewIcon, MessageSquare } from 'lucide-react';
import { movieApi } from '../services/api';
import { MovieDetails as MovieDetailsType, Person } from '../types';
import { useWatchlist } from '../context/WatchlistContext';
import { useRating } from '../context/RatingContext';
import MovieCard from '../components/MovieCard';
import RatingStars from '../components/RatingStars';
import RatingModal from '../components/RatingModal';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [showPersonModal, setShowPersonModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'cast' | 'crew' | 'streaming' | 'ratings'>('overview');
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const { getUserRating, getAverageRating, getRatingCount, addRating } = useRating();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;
      
      try {
        const movieData = await movieApi.getMovieDetails(parseInt(id));
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleWatchlistToggle = () => {
    if (movie) {
      if (isInWatchlist(movie.id)) {
        removeFromWatchlist(movie.id);
      } else {
        addToWatchlist(movie);
      }
    }
  };

  const handlePersonClick = async (personId: number) => {
    try {
      const personData = await movieApi.getPersonDetails(personId);
      setSelectedPerson(personData);
      setShowPersonModal(true);
    } catch (error) {
      console.error('Error fetching person details:', error);
    }
  };

  const handleSaveRating = async (rating: number, review?: string) => {
    if (movie) {
      addRating(movie.id, rating, review);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Movie not found
          </h2>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const userRating = getUserRating(movie.id);
  const averageRating = getAverageRating(movie.id);
  const ratingCount = getRatingCount(movie.id);

  return (
    <div className="min-h-screen">
      {/* Backdrop */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-75 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>

        {/* Watchlist Button */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleWatchlistToggle}
            className={`p-3 rounded-full transition-all ${
              isInWatchlist(movie.id)
                ? 'bg-primary-600 text-white'
                : 'bg-black bg-opacity-50 text-white hover:bg-primary-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isInWatchlist(movie.id) ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Movie Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Info */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {movie.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-1 bg-yellow-500 text-black px-3 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{movie.vote_average.toFixed(1)}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
                {movie.runtime && (
                  <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{movie.runtime}m</span>
                  </div>
                )}
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{movie.vote_count.toLocaleString()} votes</span>
                </div>
              </div>

              {/* User Rating Section */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Your Rating
                  </h3>
                  <button
                    onClick={() => setShowRatingModal(true)}
                    className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {userRating ? 'Edit Rating' : 'Rate This Movie'}
                  </button>
                </div>
                
                {userRating ? (
                  <div className="flex items-center space-x-4">
                    <RatingStars rating={userRating.rating} size="md" showValue={true} />
                    {userRating.review && (
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">Review added</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <RatingStars rating={0} size="md" />
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Click "Rate This Movie" to add your rating
                    </span>
                  </div>
                )}
              </div>

              {/* Genres */}
              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('cast')}
                  className={`px-4 py-2 font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${
                    activeTab === 'cast'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <CastIcon className="w-4 h-4" />
                  <span>Cast</span>
                </button>
                <button
                  onClick={() => setActiveTab('crew')}
                  className={`px-4 py-2 font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${
                    activeTab === 'crew'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <CrewIcon className="w-4 h-4" />
                  <span>Crew</span>
                </button>
                <button
                  onClick={() => setActiveTab('streaming')}
                  className={`px-4 py-2 font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${
                    activeTab === 'streaming'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>Where to Watch</span>
                </button>
                <button
                  onClick={() => setActiveTab('ratings')}
                  className={`px-4 py-2 font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${
                    activeTab === 'ratings'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  <span>Ratings</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div>
                  {/* Overview */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {movie.overview}
                    </p>
                  </div>

                  {/* Cast & Director (Brief) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {movie.director && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Director
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{movie.director}</p>
                      </div>
                    )}
                    {movie.cast && movie.cast.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Cast
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {movie.cast.slice(0, 5).join(', ')}
                          {movie.cast.length > 5 && '...'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Financial Info */}
                  {(movie.budget > 0 || movie.revenue > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {movie.budget > 0 && (
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Budget</p>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {formatCurrency(movie.budget)}
                            </p>
                          </div>
                        </div>
                      )}
                      {movie.revenue > 0 && (
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Revenue</p>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {formatCurrency(movie.revenue)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Trailer Button */}
                  {movie.trailer_key && (
                    <button
                      onClick={() => setShowTrailer(true)}
                      className="btn-primary flex items-center space-x-2 mb-6"
                    >
                      <Play className="w-5 h-5" />
                      <span>Watch Trailer</span>
                    </button>
                  )}
                </div>
              )}

              {activeTab === 'cast' && movie.full_cast && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Cast
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {movie.full_cast.slice(0, 12).map((castMember) => (
                      <div
                        key={castMember.id}
                        onClick={() => handlePersonClick(castMember.id)}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <img
                          src={castMember.profile_path || 'https://via.placeholder.com/50x50/666666/FFFFFF?text=?'}
                          alt={castMember.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 dark:text-white truncate">
                            {castMember.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {castMember.character}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'crew' && movie.full_crew && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Crew
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {movie.full_crew.slice(0, 12).map((crewMember) => (
                      <div
                        key={crewMember.id}
                        onClick={() => handlePersonClick(crewMember.id)}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <img
                          src={crewMember.profile_path || 'https://via.placeholder.com/50x50/666666/FFFFFF?text=?'}
                          alt={crewMember.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 dark:text-white truncate">
                            {crewMember.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {crewMember.job}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'streaming' && movie.streaming_platforms && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Where to Watch
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {movie.streaming_platforms.map((platform) => (
                      <div
                        key={platform.id}
                        className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                      >
                        <img
                          src={platform.logo_path}
                          alt={platform.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {platform.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {platform.type}
                          </p>
                          {platform.price && (
                            <p className="text-sm font-medium text-primary-600">
                              {formatCurrency(platform.price)}
                            </p>
                          )}
                        </div>
                        {platform.url && (
                          <a
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'ratings' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Ratings & Reviews
                  </h3>
                  
                  {/* Rating Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {movie.vote_average.toFixed(1)}
                      </div>
                      <div className="flex justify-center mb-2">
                        <RatingStars rating={movie.vote_average} size="sm" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        TMDB Rating
                      </p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {averageRating > 0 ? averageRating.toFixed(1) : 'N/A'}
                      </div>
                      <div className="flex justify-center mb-2">
                        <RatingStars rating={averageRating} size="sm" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        User Average ({ratingCount} ratings)
                      </p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {movie.vote_count.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Votes
                      </p>
                    </div>
                  </div>

                  {/* Rate This Movie Button */}
                  <div className="text-center">
                    <button
                      onClick={() => setShowRatingModal(true)}
                      className="btn-primary flex items-center space-x-2 mx-auto"
                    >
                      <Star className="w-5 h-5" />
                      <span>{userRating ? 'Update Your Rating' : 'Rate This Movie'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {movie.recommendations && movie.recommendations.length > 0 && (
          <section className="py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {movie.recommendations.map((recMovie) => (
                <MovieCard key={recMovie.id} movie={recMovie} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Trailer Modal */}
      {showTrailer && movie.trailer_key && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${movie.trailer_key}?autoplay=1`}
                title="Movie Trailer"
                className="absolute inset-0 w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Person Modal */}
      {showPersonModal && selectedPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <button
              onClick={() => setShowPersonModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={selectedPerson.profile_path || 'https://via.placeholder.com/100x100/666666/FFFFFF?text=?'}
                  alt={selectedPerson.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedPerson.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {selectedPerson.known_for_department}
                  </p>
                  {selectedPerson.birthday && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Born: {formatDate(selectedPerson.birthday)}
                    </p>
                  )}
                  {selectedPerson.place_of_birth && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedPerson.place_of_birth}
                    </p>
                  )}
                </div>
              </div>
              {selectedPerson.biography && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Biography
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedPerson.biography}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      <RatingModal
        isOpen={showRatingModal}
        onClose={() => setShowRatingModal(false)}
        movieTitle={movie.title}
        currentRating={userRating?.rating}
        currentReview={userRating?.review}
        onSaveRating={handleSaveRating}
      />
    </div>
  );
};

export default MovieDetails; 