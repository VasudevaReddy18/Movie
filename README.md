# 🎬 Movies App

A modern, responsive movies application built with React, TypeScript, and Tailwind CSS. Discover, search, and manage your favorite movies with a beautiful dark/light mode interface.

## ✨ Features

### 🔍 Smart Search
- Search movies by name, actor, director, or genre
- Advanced filtering options
- Real-time search suggestions

### 🏆 Trending & Popular
- Discover trending movies
- Browse popular releases
- Featured movie spotlight

### ❤️ Personal Watchlist
- Add movies to your personal watchlist
- Remove movies from watchlist
- Persistent storage with localStorage

### 📺 Detailed Movie Information
- Comprehensive movie details
- Ratings and reviews
- Cast and crew information
- Budget and revenue data
- Embedded movie trailers

### ✅ Smart Recommendations
- Personalized movie suggestions
- "You might also like" section
- Based on your watchlist

### 🌙 Dark/Light Mode
- Toggle between dark and light themes
- Persistent theme preference
- Smooth transitions

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movies-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client (for future API integration)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and search header
│   └── MovieCard.tsx   # Movie card component
├── context/            # React context providers
│   ├── ThemeContext.tsx    # Dark/light mode context
│   └── WatchlistContext.tsx # Watchlist management
├── pages/              # Page components
│   ├── Home.tsx        # Home page with featured content
│   ├── MovieDetails.tsx # Detailed movie information
│   ├── Search.tsx      # Search functionality
│   └── Watchlist.tsx   # User's watchlist
├── services/           # API and data services
│   └── api.ts          # Movie API service
├── types/              # TypeScript type definitions
│   └── index.ts        # Movie and app types
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## 🎯 Key Features Explained

### Search Functionality
The app supports multiple search types:
- **Movie Name**: Search by exact or partial movie titles
- **Actor**: Find movies by actor name
- **Director**: Discover movies by director
- **Genre**: Browse movies by genre

### Watchlist Management
- Add movies to your personal watchlist with one click
- View all saved movies in a dedicated page
- Remove movies from watchlist
- Clear entire watchlist
- Persistent storage across browser sessions

### Movie Details
Each movie page includes:
- High-quality poster and backdrop images
- Comprehensive overview and plot
- Cast and crew information
- Ratings and user reviews
- Budget and revenue data
- Embedded YouTube trailers
- Related movie recommendations

### Responsive Design
The app is fully responsive with:
- Mobile-first design approach
- Adaptive grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

### Tailwind Configuration
The app uses a custom Tailwind configuration with:
- Dark mode support
- Custom color palette
- Responsive breakpoints
- Custom animations

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    // ... more shades
  }
}
```

### Components
All components are modular and can be easily customized:
- Modify `MovieCard.tsx` for different card layouts
- Update `Header.tsx` for navigation changes
- Customize theme in `ThemeContext.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the amazing framework

---

Made with ❤️ by [Your Name] 