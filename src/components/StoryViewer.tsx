import { useState, useEffect } from 'react';
import type { UserStory } from '../data/stories';
import { StoryProgress } from './StoryProgress';

interface StoryViewerProps {
  userStory: UserStory;
  onClose: () => void;
  onNextUser: () => void;
  onPreviousUser: () => void;
}

export const StoryViewer = ({
  userStory,
  onClose,
  onNextUser,
  onPreviousUser
}: StoryViewerProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = () => {
    if (currentStoryIndex < userStory.stories.length - 1) {
      console.log("Next story");
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      console.log("Moving to next user");
      onNextUser();
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      console.log("Previous story");
      setCurrentStoryIndex(prev => prev - 1);
    } else {
      console.log("Moving to previous user");
      onPreviousUser();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const { clientX } = e;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickPosition = clientX - left;
    
    if (clickPosition < width / 2) {
      handlePrevious();
    } else {
      handleNext();
    }
  };

  useEffect(() => {
    console.log("Resetting to first story for user:", userStory.username);
    setCurrentStoryIndex(0);
    setIsLoading(true);
  }, [userStory.id]);

  useEffect(() => {
    if (!userStory?.stories?.length) {
      console.log("No stories available");
      onClose();
      return;
    }

    if (currentStoryIndex >= userStory.stories.length) {
      console.log("Story index out of bounds, resetting to first story");
      setCurrentStoryIndex(0);
      return;
    }

    const currentStory = userStory.stories[currentStoryIndex];
    if (!currentStory) {
      console.log("Current story not found, resetting to first story");
      setCurrentStoryIndex(0);
      return;
    }

    setIsLoading(true);
    const img = new Image();
    img.src = currentStory.content;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      console.log("Error loading image, moving to next");
      setIsLoading(false);
      handleNext();
    };
  }, [currentStoryIndex, userStory, onClose]);

  if (!userStory?.stories?.length) {
    console.log("No stories available");
    return null;
  }

  const currentStory = userStory.stories[currentStoryIndex];
  if (!currentStory) {
    console.log("Current story not found");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <StoryProgress
        totalStories={userStory.stories.length}
        currentStoryIndex={currentStoryIndex}
        onComplete={handleNext}
      />
      
      <div className="flex justify-between items-center p-3 text-white z-20">
        <div className="flex items-center gap-2">
          <img
            src={userStory.avatar}
            alt={userStory.username}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="font-semibold text-sm">{userStory.username}</span>
        </div>
        <button 
          className="text-2xl cursor-pointer p-2 hover:opacity-80"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div 
        className="flex-1 relative flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        {isLoading ? (
          <div className="text-white text-base">Loading...</div>
        ) : (
          <img
            src={currentStory.content}
            alt="Story content"
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
    </div>
  );
}; 