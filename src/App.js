import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import BubbleSort from './algorithm/BubbleSort';
import QuickSort from './algorithm/QuickSort';
import InsertionSort from './algorithm/InsertionSort';
import SortingComparison from './comparison/SortingComparison';
import SortingAlgorithms from './components/SortingAlgorithms';
import SearchingAlgorithms from './components/SearchingAlgorithms';
import Home from './pages/Home';
import ArrayVisualizer from './components/ArrayVisualizer';
import Visualizer from './pages/Visualizer';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/visualizer" element={<Visualizer />} />
                <Route path="/visualizer/bubble" element={<BubbleSort/>} /> 
                <Route path="/visualizer/quick" element={<QuickSort/>} /> 
                <Route path="/visualizer/insertion" element={<InsertionSort/>} /> 
                <Route path="/visualizer/algoComparison" element={<SortingComparison/>} /> 
                <Route path="/visualizer/sortingAlgorithm" element={<SortingAlgorithms/>} />
                <Route path="/visualizer/searchingAlgorithm" element={<SearchingAlgorithms/>} />
                <Route path="/visualizer/array" element={<ArrayVisualizer/>} />
            </Routes>
        </Router>
    );
};

export default App;
