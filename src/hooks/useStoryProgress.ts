import { useState, useEffect } from 'react';
import { STORY_DURATION, PROGRESS_INTERVAL } from '../constants/story';

interface UseStoryProgressProps {
  onComplete: () => void;
  duration?: number;
}

export const useStoryProgress = ({ onComplete, duration = STORY_DURATION }: UseStoryProgressProps) => {
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
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return progress;
}; 