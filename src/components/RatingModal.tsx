import React, { useState } from 'react';
import { X, Star, MessageSquare } from 'lucide-react';
import RatingStars from './RatingStars';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  currentRating?: number;
  currentReview?: string;
  onSaveRating: (rating: number, review?: string) => void;
}

const RatingModal: React.FC<RatingModalProps> = ({
  isOpen,
  onClose,
  movieTitle,
  currentRating = 0,
  currentReview = '',
  onSaveRating
}) => {
  const [rating, setRating] = useState(currentRating);
  const [review, setReview] = useState(currentReview);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    if (rating === 0) return;
    
    setIsSubmitting(true);
    try {
      await onSaveRating(rating, review.trim() || undefined);
      onClose();
    } catch (error) {
      console.error('Error saving rating:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setRating(currentRating);
    setReview(currentReview);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Rate "{movieTitle}"
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Your Rating
            </label>
            <div className="flex items-center justify-center">
              <RatingStars
                rating={rating}
                maxRating={10}
                size="lg"
                interactive={true}
                onRatingChange={setRating}
                showValue={true}
              />
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                {rating === 10 && "Perfect! A masterpiece!"}
                {rating === 9 && "Excellent! Highly recommended!"}
                {rating === 8 && "Very good! Worth watching!"}
                {rating === 7 && "Good! Enjoyable movie!"}
                {rating === 6 && "Decent! Not bad at all!"}
                {rating === 5 && "Average! It's okay!"}
                {rating === 4 && "Below average! Could be better!"}
                {rating === 3 && "Poor! Not recommended!"}
                {rating === 2 && "Very poor! Skip this one!"}
                {rating === 1 && "Terrible! Avoid at all costs!"}
              </p>
            )}
          </div>

          {/* Review Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Review (Optional)
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your thoughts about this movie..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
              rows={4}
              maxLength={500}
            />
            <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
              {review.length}/500
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleCancel}
              className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={rating === 0 || isSubmitting}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Saving...' : 'Save Rating'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal; 