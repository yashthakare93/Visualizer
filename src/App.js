import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import LandingPage from './pages/LandingPage';
import SortingVisualizer from './pages/SortingVisualizer';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/visualizer" element={<SortingVisualizer />} />
            </Routes>
        </Router>
    );
};

export default App;
