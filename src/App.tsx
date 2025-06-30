import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { WatchlistProvider } from './context/WatchlistContext';
import { RatingProvider } from './context/RatingContext';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';
import Ratings from './pages/Ratings';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <WatchlistProvider>
        <RatingProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/watchlist" element={<Watchlist />} />
                  <Route path="/ratings" element={<Ratings />} />
                  <Route path="/trending" element={<Home />} />
                  <Route path="/popular" element={<Home />} />
                </Routes>
              </main>
            </div>
          </Router>
        </RatingProvider>
      </WatchlistProvider>
    </ThemeProvider>
  );
};

export default App; 