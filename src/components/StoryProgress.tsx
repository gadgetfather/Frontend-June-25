import { useEffect, useState } from 'react';

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
    <div className="flex gap-1 p-2 absolute top-0 left-0 right-0 z-10">
      {Array.from({ length: totalStories }).map((_, index) => (
        <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-[width] duration-100 ease-linear"
            style={{
              width: `${index === currentStoryIndex ? progress : index < currentStoryIndex ? 100 : 0}%`
            }}
          />
        </div>
      ))}
    </div>
  );
}; 