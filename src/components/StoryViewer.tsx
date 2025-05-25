import { useState, useEffect } from 'react';
import type { UserStory } from '../data/stories';
import { StoryProgress } from './StoryProgress';
import styles from './StoryViewer.module.css';

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

  // Reset currentStoryIndex when userStory changes
  useEffect(() => {
    console.log("Resetting to first story for user:", userStory.username);
    setCurrentStoryIndex(0);
    setIsLoading(true);
  }, [userStory.id]);

  useEffect(() => {
    // Validate story index and user stories
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
    <div className={styles.container}>
      <StoryProgress
        totalStories={userStory.stories.length}
        currentStoryIndex={currentStoryIndex}
        onComplete={handleNext}
      />
      
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img
            src={userStory.avatar}
            alt={userStory.username}
            className={styles.avatar}
          />
          <span className={styles.username}>{userStory.username}</span>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>

      <div className={styles.storyContent} onClick={handleClick}>
        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <img
            src={currentStory.content}
            alt="Story content"
            className={styles.storyImage}
          />
        )}
      </div>
    </div>
  );
}; 