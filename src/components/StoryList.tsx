import type { UserStory } from '../data/stories';
import styles from './StoryList.module.css';

interface StoryListProps {
  userStories: UserStory[];
  onStoryClick: (userId: number) => void;
}

export const StoryList = ({ userStories, onStoryClick }: StoryListProps) => {
  return (
    <div className={styles.storyList}>
      {userStories.map((userStory) => (
        <div
          key={userStory.id}
          className={styles.storyItem}
          onClick={() => onStoryClick(userStory.id)}
        >
          <div className={styles.storyRing}>
            <img
              src={userStory.avatar}
              alt={`${userStory.username}'s story`}
              className={styles.storyImage}
            />
          </div>
          <span className={styles.username}>{userStory.username}</span>
        </div>
      ))}
    </div>
  );
}; 