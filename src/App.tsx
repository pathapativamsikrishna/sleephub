import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import RoutinesPage from './pages/RoutinesPage';
import SleepTrackerPage from './pages/SleepTrackerPage';
import StudyToolsPage from './pages/StudyToolsPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routines" element={<RoutinesPage />} />
          <Route path="/sleep-tracker" element={<SleepTrackerPage />} />
          <Route path="/study-tools" element={<StudyToolsPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;