# Instagram Stories Clone

A modern Instagram Stories clone built with React, TypeScript, and Tailwind CSS. This project implements the core functionality of Instagram Stories with a focus on performance, user experience, and code quality.

## Features

- 📱 Responsive design that works on both desktop and mobile
- 🎨 Modern UI with smooth animations and transitions
- ⚡ Optimized performance with React hooks and TypeScript
- 🔄 Story progress tracking with visual indicators
- 👆 Touch and mouse interactions for navigation
- ⏸️ Pause story playback on hold
- 🖼️ High-quality image loading with blur effects
- 🔍 Image preloading for smooth transitions
- ⌨️ Keyboard navigation support

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- ESLint
- Prettier

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/instagram-stories-clone.git
cd instagram-stories-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/         # React components
│   ├── StoryList.tsx  # Story list with user avatars
│   ├── StoryProgress.tsx  # Progress bars for stories
│   └── StoryViewer.tsx  # Full-screen story viewer
├── hooks/             # Custom React hooks
│   ├── useStoryProgress.ts  # Story progress management
│   └── useStoryNavigation.ts  # Story navigation logic
├── constants/         # Application constants
│   └── story.ts      # Story-related constants
├── data/             # Mock data
│   └── stories.ts    # Story data structure
└── App.tsx           # Main application component
```

## Features in Detail

### Story Navigation
- Click/tap left side to go to previous story
- Click/tap right side to go to next story
- Hold middle section to pause the story
- Progress bars show current story position
- Smooth transitions between stories

### Image Loading
- Blur effect while images are loading
- Loading spinner for visual feedback
- Preloading of next story for smooth transitions
- Error handling for failed image loads

### User Interface
- Clean, modern design with Tailwind CSS
- Responsive layout for all screen sizes
- User avatar and username display
- Close button to exit story view
- Progress indicators for story duration

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Style

This project uses ESLint and Prettier for code formatting. The configuration can be found in:
- `.eslintrc.cjs`
- `.prettierrc`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Inspired by Instagram's story feature
- Built with modern web technologies
