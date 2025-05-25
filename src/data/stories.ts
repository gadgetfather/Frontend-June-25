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
    avatar: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=150&h=150&fit=crop",
    stories: [
      {
        id: 101,
        type: "image",
        content: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T10:30:00Z"
      },
      {
        id: 102,
        type: "image",
        content: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T11:15:00Z"
      }
    ]
  },
  {
    id: 2,
    username: "foodie_adventures",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    stories: [
      {
        id: 201,
        type: "image",
        content: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T09:30:00Z"
      },
      {
        id: 202,
        type: "image",
        content: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T10:15:00Z"
      }
    ]
  },
  {
    id: 3,
    username: "nature_photographer",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop",
    stories: [
      {
        id: 301,
        type: "image",
        content: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T08:30:00Z"
      },
      {
        id: 302,
        type: "image",
        content: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T09:15:00Z"
      }
    ]
  },
  {
    id: 4,
    username: "urban_explorer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    stories: [
      {
        id: 401,
        type: "image",
        content: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T07:30:00Z"
      },
      {
        id: 402,
        type: "image",
        content: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T08:15:00Z"
      }
    ]
  },
  {
    id: 5,
    username: "art_gallery",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    stories: [
      {
        id: 501,
        type: "image",
        content: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T06:30:00Z"
      },
      {
        id: 502,
        type: "image",
        content: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T07:15:00Z"
      }
    ]
  },
  {
    id: 6,
    username: "fitness_goals",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop",
    stories: [
      {
        id: 601,
        type: "image",
        content: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T05:30:00Z"
      },
      {
        id: 602,
        type: "image",
        content: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T06:15:00Z"
      }
    ]
  },
  {
    id: 7,
    username: "coffee_enthusiast",
    avatar: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=150&h=150&fit=crop",
    stories: [
      {
        id: 701,
        type: "image",
        content: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T04:30:00Z"
      },
      {
        id: 702,
        type: "image",
        content: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T05:15:00Z"
      }
    ]
  },
  {
    id: 8,
    username: "pet_lover",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    stories: [
      {
        id: 801,
        type: "image",
        content: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T03:30:00Z"
      },
      {
        id: 802,
        type: "image",
        content: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1080&h=2160&fit=cover&crop=center&q=90",
        timestamp: "2024-01-15T04:15:00Z"
      }
    ]
  }
]; 