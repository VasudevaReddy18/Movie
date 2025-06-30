import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  showValue?: boolean;
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 10,
  size = 'md',
  interactive = false,
  onRatingChange,
  showValue = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const handleStarHover = (starRating: number) => {
    // Optional: Add hover effects for interactive stars
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= maxRating; i++) {
      let starClass = 'text-gray-300 dark:text-gray-600';
      
      if (i <= fullStars) {
        starClass = 'text-yellow-500 fill-current';
      } else if (i === fullStars + 1 && hasHalfStar) {
        starClass = 'text-yellow-500 fill-current';
      }

      if (interactive) {
        starClass += ' cursor-pointer hover:text-yellow-400 transition-colors';
      }

      stars.push(
        <Star
          key={i}
          className={`${sizeClasses[size]} ${starClass} ${className}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {renderStars()}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">
          {rating.toFixed(1)}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingStars; 