// AlgorithmSteps Component
import React, { useState, useEffect } from 'react';

const AlgorithmSteps = ({ algorithm, currentStep, setCurrentStep }) => {
  // Define algorithm steps
  const algorithmSteps = {
    "BinarySearch": [
      "Initialize the left and right pointers.",
      "Sort the array  (if not already sorted).",
      "Find the middle element.",
      "Compare the middle element with the target.",
      "Adjust the pointers based on comparison.",
      "Repeat until the target is found or pointers cross."
    ],
    "LinearSearch": [
      "Start from the leftmost element.",
      "Compare the element with the target.",
      "If found, return the index.",
      "If not found, move to the next element.",
      "Repeat until the target is found or the array ends."
    ],
    "JumpSearch": [
      "Sort the array in ascending order (if not already sorted).", 
      "Calculate the block size (√n).",
      "Start at the first block and check if the target is within the block.",
      "Jump to the next block if the target is not found.",
      "If the target is found in the current block, perform a linear search within the block.",
      "Return the index if found, otherwise return 'not found'."
    ],
    "InterpolationSearch": [
      "Sort the array in ascending order (if not already sorted).", 
      "Calculate the position using the formula: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]).",
      "If the target is at the position, return the index.",
      "If the target is smaller than the element at the position, move to the left half.",
      "If the target is larger, move to the right half.",
      "Repeat the process until the target is found or low > high."
    ]
  };

  // Ensure steps are provided for the selected algorithm
  const steps = algorithmSteps[algorithm] || ["No steps provided for this algorithm."];

  // Reset the current step whenever the algorithm changes
  useEffect(() => {
    setCurrentStep(0); // Reset to the first step
  }, [algorithm, setCurrentStep]);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-gray-800 p-4 md:p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-auto min-h-[250px] md:min-h-[300px]">
        <div className="h-full flex flex-col justify-between">
          <h3 className="text-lg md:text-xl text-yellow-400 mb-2 md:mb-4">
            {`Step ${currentStep + 1}`}
          </h3>
          <p className="text-white text-sm md:text-base text-center flex-grow px-2">
            {steps[currentStep]}
          </p>

          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                  currentStep === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmSteps;
