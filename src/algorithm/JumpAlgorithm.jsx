import React from "react";

const JumpAlgorithm = ({ array, target, setArray, setHighlightIndex, setStatus }) => {
    const jumpSearch = async () => {
        setStatus("Sorting in progress...");
        const sortedArray = [...array].sort((a, b) => a - b); // Sort the array
        setArray(sortedArray); // Trigger re-render with sorted array
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay to show sorting
        setStatus(""); // Clear sorting message

        // Create an array of objects to keep track of original indices
        const indexedArray = sortedArray.map((value, index) => ({ value, index }));

        const n = indexedArray.length;
        let step = Math.floor(Math.sqrt(n)); // Jump step size
        let prev = 0;

        setStatus("Starting Jump Search...");
        setStatus(`Sorted Array: ${sortedArray.join(', ')}`);

        // Jump to blocks
        while (indexedArray[Math.min(step, n) - 1].value < target) {
            prev = step;
            setHighlightIndex(indexedArray[prev].index); // Highlight based on original index
            setStatus(`Jumping to block, checking index ${prev}, value: ${indexedArray[prev].value}`);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Animation delay

            if (prev >= n) {
                setStatus("Target not found.");
                return;
            }
            step += Math.floor(Math.sqrt(n)); // Move to the next block
            setStatus(`Jumping to next block, new step is ${step}. Moving forward.`);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay to show step
        }

        // Linear search within the block
        setStatus(`Target might be between indices ${prev} and ${Math.min(step, n) - 1}. Starting linear search...`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Animation delay

        for (let i = prev; i < Math.min(step, n); i++) {
            setHighlightIndex(indexedArray[i].index); // Highlight based on original index
            setStatus(`Checking index ${i}, value: ${indexedArray[i].value}`);

            await new Promise((resolve) => setTimeout(resolve, 1000)); // Animation delay
            if (indexedArray[i].value === target) {
                setStatus(`Target found at original index ${indexedArray[i].index}!`);
                return;
            }
        }

        setStatus("Target not found.");
    };

    return (
        <button
            onClick={jumpSearch}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"

        >
            Search
        </button>
    );
};

export default JumpAlgorithm;
