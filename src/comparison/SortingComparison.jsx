import React, { useState } from 'react';
import BubbleSort from './BubbleSort';
import QuickSort from './QuickSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import MergeSort from './MergeSort';
import HeapSort from './HeapSort';
import RadixSort from './RadixSort';
import CountingSort from './CountingSort';
import ShellSort from './ShellSort';
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
    const [shellArray, setShellArray] = useState([...initialArray]);

    const [isSorting, setIsSorting] = useState(false);
    const [caseType, setCaseType] = useState('average'); // Default case is 'average'


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
        setShellArray([...newArray]);
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
        setShellArray([...initialArray]);
        setCaseType('average');
    };

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center">
            <div className="flex items-center justify-center w-full mb-6 px-6 p-4">
                <h1 className="text-4xl font-mono mb-6 mr-8">Sorting Algorithms Comparison</h1>


                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={handleSortClick}
                        className="bg-green-500 text-white px-6 py-2 rounded "
                        disabled={isSorting}
                    >
                        Start Sorting
                    </button>
                    <button
                        onClick={() => handleCaseChange('best')}
                        className="bg-blue-500 text-white px-6 py-2 rounded"
                    >
                        Best Case
                    </button>
                    <button
                        onClick={() => handleCaseChange('worst')}
                        className="bg-red-500 text-white px-6 py-2 rounded"
                    >
                        Worst Case
                    </button>
                    <button
                        onClick={() => handleCaseChange('average')}
                        className="bg-gray-500 text-white px-6 py-2 rounded"
                    >
                        Average Case
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-yellow-500 text-white px-6 py-2 rounded"
                        disabled={isSorting}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div
                className="flex justify-center items-center overflow-auto"
                style={{
                    transform: 'scale(0.5)',
                    transformOrigin: 'center',
                    width: '200%',
                    height: '200%',
                    marginTop: '-350px',
                }}
            >
                <div className="space-y-8 flex flex-col">
                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Bubble Sort (O(n^2))</h2>
                            <SortingBars array={bubbleArray} />
                            <BubbleSort array={bubbleArray} setArray={setBubbleArray} isSorting={isSorting} />
                        </div>

                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Quick Sort (O(n log n))</h2>
                            <SortingBars array={quickArray} />
                            <QuickSort array={quickArray} setArray={setQuickArray} isSorting={isSorting} />
                        </div>
                    </div>

                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Insertion Sort (O(n^2))</h2>
                            <SortingBars array={insertionArray} />
                            <InsertionSort array={insertionArray} setArray={setInsertionArray} isSorting={isSorting} />
                        </div>

                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Selection Sort (O(n^2))</h2>
                            <SortingBars array={selectionArray} />
                            <SelectionSort array={selectionArray} setArray={setSelectionArray} isSorting={isSorting} />
                        </div>
                    </div>

                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Merge Sort (O(n log n))</h2>
                            <SortingBars array={mergeArray} />
                            <MergeSort array={mergeArray} setArray={setMergeArray} isSorting={isSorting} />
                        </div>

                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Heap Sort (O(n log n))</h2>
                            <SortingBars array={heapArray} />
                            <HeapSort array={heapArray} setArray={setHeapArray} isSorting={isSorting} />
                        </div>
                    </div>

                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Radix Sort (O(nk))</h2>
                            <SortingBars array={radixArray} />
                            <RadixSort array={radixArray} setArray={setRadixArray} isSorting={isSorting} />
                        </div>

                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Counting Sort (O(n + k))</h2>
                            <SortingBars array={countingArray} />
                            <CountingSort array={countingArray} setArray={setCountingArray} isSorting={isSorting} />
                        </div>
                    </div>

                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center w-1/2">
                            <h2 className="text-xl mb-2">Shell Sort (O(n^2) to O(n log n))</h2>
                            <SortingBars array={shellArray} />
                            <ShellSort array={shellArray} setArray={setShellArray} isSorting={isSorting} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortingComparison;
