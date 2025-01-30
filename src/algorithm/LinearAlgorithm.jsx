import React from "react";

const LinearAlgorithm = ({ array, target, setHighlightIndex, setStatus }) => {
    const linearSearch = async () => {
        for (let i = 0; i < array.length; i++) {
            setHighlightIndex(i);
            await new Promise((resolve) => setTimeout(resolve, 200)); // Animation delay
            if (array[i] === target) {
                setStatus(`Target found at index ${i}!`);
                return;
            }
        }
        setStatus("Target not found.");
    };

    return (
        <button
            onClick={linearSearch}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
            Search
        </button>
    );
};

export default LinearAlgorithm;
