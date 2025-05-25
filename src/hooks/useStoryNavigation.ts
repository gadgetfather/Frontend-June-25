import { useState, useCallback } from 'react';
import type { UserStory } from '../data/stories';

interface UseStoryNavigationProps {
  userStories: UserStory[];
  onClose: () => void;
}

export const useStoryNavigation = ({ userStories, onClose }: UseStoryNavigationProps) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleStoryClick = useCallback((userId: number) => {
    setSelectedUserId(userId);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedUserId(null);
  }, [onClose]);

  const handleNextUser = useCallback(() => {
    if (selectedUserId === null) {
      console.log("No user selected");
      return;
    }
    const currentIndex = userStories.findIndex(user => user.id === selectedUserId);
    if (currentIndex < userStories.length - 1) {
      console.log("Moving to next user");
      setSelectedUserId(userStories[currentIndex + 1].id);
    } else {
      console.log("No more users");
      handleClose();
    }
  }, [selectedUserId, userStories, handleClose]);

  const handlePreviousUser = useCallback(() => {
    if (selectedUserId === null) {
      console.log("No user selected");
      return;
    }
    const currentIndex = userStories.findIndex(user => user.id === selectedUserId);
    if (currentIndex > 0) {
      console.log("Moving to previous user");
      setSelectedUserId(userStories[currentIndex - 1].id);
    } else {
      console.log("Already at first user");
      setSelectedUserId(userStories[0].id);
    }
  }, [selectedUserId, userStories]);

  const selectedUser = selectedUserId
    ? userStories.find(user => user.id === selectedUserId)
    : null;

  return {
    selectedUser,
    handleStoryClick,
    handleClose,
    handleNextUser,
    handlePreviousUser
  };
}; 