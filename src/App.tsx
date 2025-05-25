import { StoryList } from './components/StoryList';
import { StoryViewer } from './components/StoryViewer';
import { userStories } from './data/stories';
import { useStoryNavigation } from './hooks/useStoryNavigation';
import { MAX_WIDTH } from './constants/story';

function App() {
  const {
    selectedUser,
    handleStoryClick,
    handleClose,
    handleNextUser,
    handlePreviousUser
  } = useStoryNavigation({
    userStories,
    onClose: () => {} // Empty callback since we don't need additional cleanup
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
          onClose={handleClose}
          onNextUser={handleNextUser}
          onPreviousUser={handlePreviousUser}
        />
      )}
    </div>
  );
}

export default App;
