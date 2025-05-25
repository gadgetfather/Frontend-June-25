export interface StoryItem {
  id: number;
  type: 'image';
  content: string;
  timestamp: string;
}

export interface UserStory {
  id: number;
  username: string;
  avatar: string;
  stories: StoryItem[];
}

export const userStories: UserStory[] = [
  {
    id: 1,
    username: "sarah_travels",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: 101,
        type: "image",
        content: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T10:30:00Z"
      },
      {
        id: 102,
        type: "image",
        content: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T11:15:00Z"
      },
      {
        id: 103,
        type: "image",
        content: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T12:00:00Z"
      }
    ]
  },
  {
    id: 2,
    username: "travel_enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: 201,
        type: "image",
        content: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T09:30:00Z"
      },
      {
        id: 202,
        type: "image",
        content: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T10:15:00Z"
      }
    ]
  },
  {
    id: 3,
    username: "wanderlust_journey",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    stories: [
      {
        id: 301,
        type: "image",
        content: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T08:30:00Z"
      },
      {
        id: 302,
        type: "image",
        content: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T09:15:00Z"
      },
      {
        id: 303,
        type: "image",
        content: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=800&fit=crop",
        timestamp: "2024-01-15T10:00:00Z"
      }
    ]
  }
]; 