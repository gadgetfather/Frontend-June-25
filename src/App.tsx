import { useCallback } from 'react';
import { StoryList } from './components/StoryList';
import { StoryViewer } from './components/StoryViewer';
import { userStories } from './data/stories';
import { useStoryNavigation } from './hooks/useStoryNavigation';
import { MAX_WIDTH, MOBILE_BREAKPOINT } from './constants/story';

function App() {
  const handleClose = useCallback(() => {
    // Additional cleanup logic can be added here
  }, []);

  const {
    selectedUser,
    handleStoryClick,
    handleClose: closeStory,
    handleNextUser,
    handlePreviousUser
  } = useStoryNavigation({
    userStories,
    onClose: handleClose
  });

  return (
    <div className={`max-w-full mx-auto p-4 bg-gray-50 min-h-screen md:max-w-[${MAX_WIDTH}px]`}>
      <StoryList
        userStories={userStories}
        onStoryClick={handleStoryClick}
      />
      
      {selectedUser && (
        <StoryViewer
          userStory={selectedUser}
          onClose={closeStory}
          onNextUser={handleNextUser}
          onPreviousUser={handlePreviousUser}
        />
      )}
    </div>
  );
}

export default App;
