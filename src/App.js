import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import Visualizer from './pages/Visualizer';
import BubbleSort from './algorithm/BubbleSort';
import QuickSort from './algorithm/QuickSort';
import InsertionSort from './algorithm/InsertionSort';
import SortingComparison from './comparison/SortingComparison';
import SortingAlgorithms from './components/SortingAlgorithms';
import SearchingAlgorithms from './components/SearchingAlgorithms';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/visualizer" element={<Visualizer />} />
                <Route path="/visualizer/bubble" element={<BubbleSort/>} /> 
                <Route path="/visualizer/quick" element={<QuickSort/>} /> 
                <Route path="/visualizer/insertion" element={<InsertionSort/>} /> 
                <Route path="/visualizer/algoComparison" element={<SortingComparison/>} /> 
                <Route path="/visualizer/sortingAlgorithm" element={<SortingAlgorithms/>} />
                <Route path="/visualizer/searchingAlgorithm" element={<SearchingAlgorithms/>} />
            </Routes>
        </Router>
    );
};

export default App;
