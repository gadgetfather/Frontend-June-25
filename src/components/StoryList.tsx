import type { UserStory } from '../data/stories';

interface StoryListProps {
  userStories: UserStory[];
  onStoryClick: (userId: number) => void;
}

export const StoryList = ({ userStories, onStoryClick }: StoryListProps) => {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 scrollbar-hide">
      {userStories.map((userStory) => (
        <div
          key={userStory.id}
          className="flex flex-col items-center cursor-pointer min-w-[70px]"
          onClick={() => onStoryClick(userStory.id)}
        >
          <div className="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]">
            <img
              src={userStory.avatar}
              alt={`${userStory.username}'s story`}
              className="w-full h-full rounded-full border-2 border-white object-cover"
            />
          </div>
          <span className="text-xs mt-1 text-gray-800 max-w-[70px] truncate text-center">
            {userStory.username}
          </span>
        </div>
      ))}
    </div>
  );
}; 