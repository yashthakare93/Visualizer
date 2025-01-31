import React, { useState } from 'react';
import BubbleSort from './BubbleSort';
import QuickSort from './QuickSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import MergeSort from './MergeSort';
import HeapSort from './HeapSort';
import RadixSort from './RadixSort';
import CountingSort from './CountingSort';
import SortingBars from './SortingBars';

const SortingComparison = () => {
    // Function to generate random array
    const generateRandomArray = (size) => {
        const newArray = [];
        for (let i = 0; i < size; i++) {
            newArray.push(Math.floor(Math.random() * 100) + 1);
        }
        return newArray;
    };

    // Function to generate best, worst, and average case arrays
    const generateBestCase = (size) => {
        return Array.from({ length: size }, (_, i) => i + 1); // Sorted array
    };

    const generateWorstCase = (size) => {
        return Array.from({ length: size }, (_, i) => size - i); // Reverse sorted array
    };

    const generateAverageCase = (size) => {
        return generateRandomArray(size); // Random array
    };

    const initialArray = generateRandomArray(100);

    // State to manage arrays for sorting algorithms
    const [bubbleArray, setBubbleArray] = useState([...initialArray]);
    const [quickArray, setQuickArray] = useState([...initialArray]);
    const [insertionArray, setInsertionArray] = useState([...initialArray]);
    const [selectionArray, setSelectionArray] = useState([...initialArray]);
    const [mergeArray, setMergeArray] = useState([...initialArray]);
    const [heapArray, setHeapArray] = useState([...initialArray]);
    const [radixArray, setRadixArray] = useState([...initialArray]);
    const [countingArray, setCountingArray] = useState([...initialArray]);

    const [isSorting, setIsSorting] = useState(false);
    const [caseType, setCaseType] = useState('average');


    // Handle case change
    const handleCaseChange = (type) => {
        setCaseType(type);
        const newArray =
            type === 'best'
                ? generateBestCase(100)
                : type === 'worst'
                    ? generateWorstCase(100)
                    : generateAverageCase(100);

        // Set new arrays for each sorting algorithm
        setBubbleArray([...newArray]);
        setQuickArray([...newArray]);
        setInsertionArray([...newArray]);
        setSelectionArray([...newArray]);
        setMergeArray([...newArray]);
        setHeapArray([...newArray]);
        setRadixArray([...newArray]);
        setCountingArray([...newArray]);
    };

    const handleSortClick = () => {
        setIsSorting(true);
        setTimeout(() => {
            setIsSorting(false); // Stop sorting after completion
        }, 5000);
    };

    const handleReset = () => {
        setIsSorting(false);
        setBubbleArray([...initialArray]);
        setQuickArray([...initialArray]);
        setInsertionArray([...initialArray]);
        setSelectionArray([...initialArray]);
        setMergeArray([...initialArray]);
        setHeapArray([...initialArray]);
        setRadixArray([...initialArray]);
        setCountingArray([...initialArray]);
        setCaseType('average');
    };

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center py-6 sm:p-6">
            {/* Header Section */}
            <div className="w-full max-w-8xl">
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                    <h1 className="text-2xl sm:text-4xl font-mono mb-4">Sorting Algorithms <span className='text-green-400'> Comparison</span></h1>
                    {/* Control Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center w-full mb-4">
                        <button
                            onClick={handleSortClick}
                            className={`px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-2 rounded transition duration-300 
                    ${isSorting ? 'bg-gray-600 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600'}`}
                            disabled={isSorting}
                        >
                            {isSorting ? 'Sorting...' : 'Start Sorting'}
                        </button>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {['best', 'worst', 'average'].map((type) => {
                                const colors = {
                                    best: 'bg-green-600 hover:bg-green-700',
                                    worst: 'bg-red-600 hover:bg-red-700',
                                    average: 'bg-yellow-600 hover:bg-yellow-700',
                                };

                                return (
                                    <button
                                        key={type}
                                        onClick={() => handleCaseChange(type)}
                                        className={`px-3 py-1 text-sm sm:text-base sm:px-4 sm:py-2 rounded capitalize 
          ${colors[type]} ${caseType === type ? 'brightness-125' : 'brightness-100'}`}
                                    >
                                        {type} Case
                                    </button>
                                );
                            })}
                        </div>


                        <button
                            onClick={handleReset}
                            className={`px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-2 rounded transition duration-300 
                    ${isSorting ? 'bg-gray-600 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600'}`}
                            disabled={isSorting}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Algorithm Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
                    {[
                        { component: BubbleSort, array: bubbleArray, setArray: setBubbleArray, name: 'Bubble Sort', complexity: 'O(n²)' },
                        { component: QuickSort, array: quickArray, setArray: setQuickArray, name: 'Quick Sort', complexity: 'O(n log n)' },
                        { component: InsertionSort, array: insertionArray, setArray: setInsertionArray, name: 'Insertion Sort', complexity: 'O(n²)' },
                        { component: SelectionSort, array: selectionArray, setArray: setSelectionArray, name: 'Selection Sort', complexity: 'O(n²)' },
                        { component: MergeSort, array: mergeArray, setArray: setMergeArray, name: 'Merge Sort', complexity: 'O(n log n)' },
                        { component: HeapSort, array: heapArray, setArray: setHeapArray, name: 'Heap Sort', complexity: 'O(n log n)' },
                        { component: RadixSort, array: radixArray, setArray: setRadixArray, name: 'Radix Sort', complexity: 'O(nk)' },
                        { component: CountingSort, array: countingArray, setArray: setCountingArray, name: 'Counting Sort', complexity: 'O(n + k)' },
                    ].map(({ component: Algorithm, array, setArray, name, complexity }) => (
                        <div key={name} className="bg-gray-800 rounded-lg p-4 border border-gray-700 w-full sm:col-span-2 lg:col-span-1">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">
                                {name}
                                <span className="ml-2 text-sm text-blue-400 font-mono">{complexity}</span>
                            </h2>
                            <div className="h-48 mb-3">
                                <SortingBars array={array} />
                            </div>
                            <Algorithm array={array} setArray={setArray} isSorting={isSorting} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SortingComparison;
