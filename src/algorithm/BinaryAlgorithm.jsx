import React from "react";

const BinaryAlgorithm = ({ array, target, setArray, setHighlightIndex, setStatus }) => {
    const binarySearch = async () => {
        setStatus("Sorting in progress...");
        const sortedArray = [...array].sort((a, b) => a - b);
        setArray(sortedArray);
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay to show sorting
        setStatus(""); // Clear sorting message

        let left = 0, right = sortedArray.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            setHighlightIndex(mid);
            await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay

            if (sortedArray[mid] === target) {
                setStatus(`Target found at index ${mid}!`);
                return;
            }
            if (sortedArray[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        setStatus("Target not found.");
    };

    return (
        <button
            onClick={binarySearch}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
            Search
        </button>
    );
};

export default BinaryAlgorithm;
