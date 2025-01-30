import React from "react";

const InterpolationAlgorithm = ({ array, target, setHighlightIndex, setStatus }) => {
    const interpolationSearch = async () => {
        let low = 0;
        let high = array.length - 1;

        while (low <= high && target >= array[low] && target <= array[high]) {
            const pos = Math.floor(low + ((target - array[low]) * (high - low)) / (array[high] - array[low]));
            setHighlightIndex(pos);
            await new Promise((resolve) => setTimeout(resolve, 200)); // Animation delay

            if (array[pos] === target) {
                setStatus(`Target found at index ${pos}!`);
                return;
            }
            if (array[pos] < target) low = pos + 1;
            else high = pos - 1;
        }
        setStatus("Target not found.");
    };

    return (
        <button
            onClick={interpolationSearch}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
         Search
        </button>
    );
};

export default InterpolationAlgorithm;
