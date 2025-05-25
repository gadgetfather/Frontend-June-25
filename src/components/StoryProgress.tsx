import { useEffect, useState } from 'react';
import styles from './StoryProgress.module.css';

interface StoryProgressProps {
  totalStories: number;
  currentStoryIndex: number;
  duration?: number;
  onComplete: () => void;
}

export const StoryProgress = ({
  totalStories,
  currentStoryIndex,
  duration = 5000,
  onComplete
}: StoryProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / duration) * 100;
      
      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        onComplete();
      } else {
        setProgress(newProgress);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [currentStoryIndex, duration, onComplete]);

  return (
    <div className={styles.progressContainer}>
      {Array.from({ length: totalStories }).map((_, index) => (
        <div key={index} className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{
              width: `${index === currentStoryIndex ? progress : index < currentStoryIndex ? 100 : 0}%`
            }}
          />
        </div>
      ))}
    </div>
  );
}; 