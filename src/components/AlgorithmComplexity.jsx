import React from 'react';

const AlgorithmComplexity = ({ algorithm }) => {
  const complexities = {
    "LinearSearch": {
      time: "O(n)",
      space: "O(1)",
      timeDetail: "Linear search iterates through each element, making its time complexity directly proportional to the number of elements in the list.",
      spaceDetail: "Linear search uses a constant amount of extra space regardless of the input size, hence space complexity is O(1)."
    },
    "BinarySearch": {
      time: "O(log n)",
      space: "O(1)",
      timeDetail: "Binary search works by repeatedly dividing the search interval in half, making it logarithmic in time complexity.",
      spaceDetail: "Binary search only requires a constant amount of extra space, as the process doesn't require additional storage beyond the input data."
    },
    "JumpSearch": {
      time: "O(√n)",
      space: "O(1)",
      timeDetail: "Jump search works by jumping ahead by a fixed block size (√n) and then performing a linear search within the block. This reduces the number of elements to be checked.",
      spaceDetail: "Jump search uses a constant amount of space, as it only requires variables for indexing and block size, hence space complexity is O(1)."
    },
    "InterpolationSearch": {
      time: "O(log log n) in best case, O(n) in worst case",
      space: "O(1)",
      timeDetail: "Interpolation search is similar to binary search but uses a formula to estimate the position of the target. It performs well on uniformly distributed data, but in the worst case (non-uniform data), it can degrade to O(n).",
      spaceDetail: "Interpolation search uses a constant amount of space, hence space complexity is O(1)."
    }
  };

  const complexity = complexities[algorithm] || { time: "N/A", space: "N/A", timeDetail: "N/A", spaceDetail: "N/A" };

  return (
    <div className="bg-gray-800 p-4 md:p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-auto min-h-[300px] md:min-h-[350px]">
      <h3 className="text-xl md:text-2xl text-yellow-400 mb-2 md:mb-4 text-center">
        Algorithm Complexity
      </h3>
      <div className="text-base md:text-lg text-white space-y-3 md:space-y-4">
        <div>
          <p className="font-semibold">Time Complexity:</p>
          <p>{complexity.time}</p>
          <p className="text-xs md:text-sm text-gray-300 mt-1">
            {complexity.timeDetail}
          </p>
        </div>
        <div>
          <p className="font-semibold">Space Complexity:</p>
          <p>{complexity.space}</p>
          <p className="text-xs md:text-sm text-gray-300 mt-1">
            {complexity.spaceDetail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmComplexity;
