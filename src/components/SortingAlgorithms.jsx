import React, { useState, useEffect } from 'react';
import BubbleSort from '../comparison/BubbleSort';
import QuickSort from '../comparison/QuickSort';
import InsertionSort from '../comparison/InsertionSort';
import SelectionSort from '../comparison/SelectionSort';
import MergeSort from '../comparison/MergeSort';
import HeapSort from '../comparison/HeapSort';
import RadixSort from '../comparison/RadixSort';
import CountingSort from '../comparison/CountingSort';
import SortingBars from './SortingBars';

const SortingAlgorithm = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('BubbleSort');
  const [arraySize, setArraySize] = useState(100); 
  const [array, setArray] = useState(generateRandomArray(arraySize));
  const [isSorting, setIsSorting] = useState(false);

  // Function to generate random array
  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  }

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
    setArray(generateRandomArray(arraySize));
    setIsSorting(false); // Reset sorting state
  };

  const handleArraySizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setArraySize(newSize);
    setArray(generateRandomArray(newSize));
    setIsSorting(false); // Reset sorting state when array size changes
  };

  const handleArrayReset = () => {
    setArray(generateRandomArray(arraySize));
    setIsSorting(false); // Reset sorting state
  };

  const startSorting = () => {
    setIsSorting(true); // Set sorting to true when the "Start Sorting" button is clicked
  };

  const generateBestCase = () => {
    const sortedArray = [...array].sort((a, b) => a - b);
    setArray(sortedArray);
  };

  const generateWorstCase = () => {
    const reverseSortedArray = [...array].sort((a, b) => b - a);
    setArray(reverseSortedArray);
  };

  const generateAvgCase = () => {
    setArray(generateRandomArray(arraySize)); // Random unsorted array
  };

  useEffect(() => {
    if (isSorting) {
      // If sorting is triggered, do nothing for now, as child components handle sorting.
      // This effect ensures that once the sorting starts, the algorithm will trigger the sorting.
    }
  }, [isSorting]);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center py-4">
      <h1 className="text-4xl font-mono mb-6 text-center">
        Sorting Algorithm <span className="text-green-400">Visualizer</span>
      </h1>

      {/* Buttons in one row */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center items-center w-full px-4">
        {/* Dropdown to select the sorting algorithm */}
        <div className="w-full sm:w-auto">
          <label htmlFor="algorithm" className="mr-4 text-lg">
            Select Algorithm:
          </label>
          <select
            id="algorithm"
            value={selectedAlgorithm}
            onChange={handleAlgorithmChange}
            className="bg-gray-700 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            <option value="BubbleSort">Bubble Sort</option>
            <option value="QuickSort">Quick Sort</option>
            <option value="InsertionSort">Insertion Sort</option>
            <option value="SelectionSort">Selection Sort</option>
            <option value="MergeSort">Merge Sort</option>
            <option value="HeapSort">Heap Sort</option>
            <option value="RadixSort">Radix Sort</option>
            <option value="CountingSort">Counting Sort</option>
          </select>
        </div>

        {/* Dropdown to select the array size */}
        <div className="w-full sm:w-auto">
          <label htmlFor="arraySize" className="mr-4 text-lg">
            Select Array Size:
          </label>
          <select
            id="arraySize"
            value={arraySize}
            onChange={handleArraySizeChange}
            className="bg-gray-700 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {/* Buttons for generating best, worst, and avg case */}
        <div className="flex gap-2 w-full sm:w-auto justify-center">
          <button
            onClick={generateBestCase}
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition duration-300 w-full sm:w-auto"
          >
            Best Case
          </button>
          <button
            onClick={generateWorstCase}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300 w-full sm:w-auto"
          >
            Worst Case
          </button>
          <button
            onClick={generateAvgCase}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
          >
            Average Case
          </button>
        </div>

        {/* Button to start sorting */}
        <button
          onClick={startSorting}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 w-full sm:w-auto"
        >
          Sort
        </button>

        {/* Button to reset the array */}
        <button
          onClick={handleArrayReset}
          className="bg-cyan-400 text-white px-6 py-2 rounded hover:bg-cyan-500 transition duration-300 w-full sm:w-auto"
        >
          Reset Array
        </button>
      </div>

      {/* Sorting Bars component */}
      <SortingBars array={array} />

      {/* Display the selected sorting algorithm */}
      <div className="w-full flex justify-center mt-6">
        {isSorting && selectedAlgorithm === 'BubbleSort' && (
          <BubbleSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'QuickSort' && (
          <QuickSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'InsertionSort' && (
          <InsertionSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'SelectionSort' && (
          <SelectionSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'MergeSort' && (
          <MergeSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'HeapSort' && (
          <HeapSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'RadixSort' && (
          <RadixSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
        {isSorting && selectedAlgorithm === 'CountingSort' && (
          <CountingSort array={array} setArray={setArray} isSorting={isSorting} />
        )}
      </div>
    </div>
  );
};

export default SortingAlgorithm;
