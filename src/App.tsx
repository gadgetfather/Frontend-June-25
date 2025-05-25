import { useState, useCallback } from 'react';
import { StoryList } from './components/StoryList';
import { StoryViewer } from './components/StoryViewer';
import { userStories } from './data/stories';
import styles from './App.module.css';

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleStoryClick = useCallback((userId: number) => {
    setSelectedUserId(userId);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedUserId(null);
  }, []);

  const handleNextUser = useCallback(() => {
    if (selectedUserId === null) {
      console.log("No user selected");
      return;
    }
    const currentIndex = userStories.findIndex(user => user.id === selectedUserId);
    if (currentIndex < userStories.length - 1) {
      console.log("Next user");
      setSelectedUserId(userStories[currentIndex + 1].id);
    } else {
      console.log("No more users");
      handleClose();
    }
  }, [selectedUserId, handleClose]);

  const handlePreviousUser = useCallback(() => {
    if (selectedUserId === null) return;
    const currentIndex = userStories.findIndex(user => user.id === selectedUserId);
    if (currentIndex > 0) {
      setSelectedUserId(userStories[currentIndex - 1].id);
    } else {
      setSelectedUserId(userStories[0].id);
    }
  }, [selectedUserId]);

  const selectedUser = selectedUserId
    ? userStories.find(user => user.id === selectedUserId)
    : null;

  return (
    <div className={styles.app}>
      <StoryList
        userStories={userStories}
        onStoryClick={handleStoryClick}
      />
      
      {selectedUser && (
        <StoryViewer
          userStory={selectedUser}
          onClose={handleClose}
          onNextUser={handleNextUser}
          onPreviousUser={handlePreviousUser}
        />
      )}
    </div>
  );
}

export default App;
