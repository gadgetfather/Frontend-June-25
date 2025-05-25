import { useState, useEffect } from 'react';
import type { UserStory } from '../data/stories';
import { StoryProgress } from './StoryProgress';
import { STORY_DURATION } from '../constants/story';

interface StoryViewerProps {
  userStory: UserStory;
  onClose: () => void;
  onNextUser: () => void;
  onPreviousUser: () => void;
}

export const StoryViewer = ({ userStory, onClose, onNextUser, onPreviousUser }: StoryViewerProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    setCurrentStoryIndex(0);
    setIsLoading(true);
  }, [userStory]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      if (currentStoryIndex < userStory.stories.length - 1) {
        setCurrentStoryIndex(prev => prev + 1);
      } else {
        onNextUser();
      }
    }, STORY_DURATION);

    return () => clearTimeout(timer);
  }, [currentStoryIndex, userStory.stories.length, onNextUser, isPaused]);

  useEffect(() => {
    setIsLoading(true);
    const currentStory = userStory.stories[currentStoryIndex];
    
    if (currentStory) {
      const img = new Image();
      img.src = currentStory.content;
      
      img.onload = () => {
        setCurrentImage(currentStory.content);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        console.error('Error loading image');
        setIsLoading(false);
      };
    }
  }, [currentStoryIndex, userStory.stories]);

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    } else {
      onPreviousUser();
    }
  };

  const handleNext = () => {
    if (currentStoryIndex < userStory.stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      onNextUser();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const screenWidth = window.innerWidth;
    const touchX = touch.clientX;

    if (touchX < screenWidth / 3) {
      handlePrevious();
    } else if (touchX > (screenWidth * 2) / 3) {
      handleNext();
    } else {
      setIsPaused(true);
    }
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4">
          <StoryProgress
            totalStories={userStory.stories.length}
            currentStoryIndex={currentStoryIndex}
            duration={STORY_DURATION}
            onComplete={handleNext}
          />
        </div>

        {/* User info */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img
              src={userStory.avatar}
              alt={userStory.username}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-medium">{userStory.username}</span>
          <button
            onClick={onClose}
            className="ml-auto text-white text-2xl hover:opacity-80"
          >
            ×
          </button>
        </div>

        {/* Story image */}
        <div className="w-full h-full relative">
          {/* Blurred placeholder */}
          {currentImage && (
            <img
              src={currentImage}
              alt=""
              className="w-full h-full object-cover absolute inset-0 filter blur-xl scale-110"
              style={{ opacity: isLoading ? 0.5 : 0 }}
            />
          )}
          
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Main image */}
          {currentImage && (
            <img
              src={currentImage}
              alt={`Story ${currentStoryIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}
        </div>

        {/* Navigation areas */}
        <div className="absolute inset-0 flex">
          <div 
            className="w-1/3 h-full cursor-pointer"
            onClick={handlePrevious}
          />
          <div 
            className="w-1/3 h-full cursor-pointer"
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
          />
          <div 
            className="w-1/3 h-full cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}; 