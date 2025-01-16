import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import Visualizer from './pages/Visualizer';
import BubbleSort from './algorithm/BubbleSort';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/visualizer" element={<Visualizer />} />
                <Route path="/visualizer/bubble" element={<BubbleSort/>} /> 
            </Routes>
        </Router>
    );
};

export default App;
