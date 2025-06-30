import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserRating } from '../types';

interface RatingContextType {
  ratings: UserRating[];
  addRating: (movieId: number, rating: number, review?: string) => void;
  updateRating: (movieId: number, rating: number, review?: string) => void;
  removeRating: (movieId: number) => void;
  getUserRating: (movieId: number) => UserRating | undefined;
  getAverageRating: (movieId: number) => number;
  getRatingCount: (movieId: number) => number;
}

const RatingContext = createContext<RatingContextType | undefined>(undefined);

export const useRating = () => {
  const context = useContext(RatingContext);
  if (context === undefined) {
    throw new Error('useRating must be used within a RatingProvider');
  }
  return context;
};

interface RatingProviderProps {
  children: ReactNode;
}

export const RatingProvider: React.FC<RatingProviderProps> = ({ children }) => {
  const [ratings, setRatings] = useState<UserRating[]>([]);

  // Load ratings from localStorage on mount
  useEffect(() => {
    const savedRatings = localStorage.getItem('movieRatings');
    if (savedRatings) {
      try {
        const parsedRatings = JSON.parse(savedRatings).map((rating: any) => ({
          ...rating,
          ratedAt: new Date(rating.ratedAt)
        }));
        setRatings(parsedRatings);
      } catch (error) {
        console.error('Error loading ratings from localStorage:', error);
      }
    }
  }, []);

  // Save ratings to localStorage whenever ratings change
  useEffect(() => {
    localStorage.setItem('movieRatings', JSON.stringify(ratings));
  }, [ratings]);

  const addRating = (movieId: number, rating: number, review?: string) => {
    const newRating: UserRating = {
      movieId,
      rating,
      review,
      ratedAt: new Date()
    };

    setRatings(prev => {
      const existingIndex = prev.findIndex(r => r.movieId === movieId);
      if (existingIndex >= 0) {
        // Update existing rating
        const updated = [...prev];
        updated[existingIndex] = newRating;
        return updated;
      } else {
        // Add new rating
        return [...prev, newRating];
      }
    });
  };

  const updateRating = (movieId: number, rating: number, review?: string) => {
    addRating(movieId, rating, review);
  };

  const removeRating = (movieId: number) => {
    setRatings(prev => prev.filter(r => r.movieId !== movieId));
  };

  const getUserRating = (movieId: number) => {
    return ratings.find(r => r.movieId === movieId);
  };

  const getAverageRating = (movieId: number) => {
    const movieRatings = ratings.filter(r => r.movieId === movieId);
    if (movieRatings.length === 0) return 0;
    
    const sum = movieRatings.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / movieRatings.length) * 10) / 10;
  };

  const getRatingCount = (movieId: number) => {
    return ratings.filter(r => r.movieId === movieId).length;
  };

  const value: RatingContextType = {
    ratings,
    addRating,
    updateRating,
    removeRating,
    getUserRating,
    getAverageRating,
    getRatingCount
  };

  return (
    <RatingContext.Provider value={value}>
      {children}
    </RatingContext.Provider>
  );
}; 