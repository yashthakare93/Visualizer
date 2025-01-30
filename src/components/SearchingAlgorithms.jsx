import React, { useState, useEffect } from "react";
import LinearAlgorithm from "../algorithm/LinearAlgorithm";
import BinaryAlgorithm from "../algorithm/BinaryAlgorithm";
import AlgorithmSteps from "./AlgorithmSteps";
import AlgorithmComplexity from "./AlgorithmComplexity";
import JumpAlgorithm from "../algorithm/JumpAlgorithm";
import InterpolationAlgorithm from "../algorithm/InterpolationAlgorithm";

const SearchingAlgorithms = () => {
  const [array, setArray] = useState(generateRandomArray(50));
  const [target, setTarget] = useState("");
  const [algorithm, setAlgorithm] = useState("LinearSearch");
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [status, setStatus] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Function to generate random array
  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  }

  const handleTargetChange = (e) => {
    const value = parseInt(e.target.value);
    setTarget(isNaN(value) ? "" : value);
  };

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
    resetArray();
  };

  const resetArray = () => {
    setArray(generateRandomArray(50));
    setHighlightIndex(null);
    setStatus("");
  };

  useEffect(() => {
    setCurrentStep(0);
    console.log(algorithm); // Debugging algorithm selection
  }, [algorithm]);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-mono mb-6 mt-6">Searching Algorithm <span className='text-green-400'>Visualization</span></h1>
      {/* Controls */}
      <div className="flex space-x-4 mb-6 items-center">
        <select
          value={algorithm}
          onChange={handleAlgorithmChange}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          <option value="LinearSearch">Linear Search</option>
          <option value="BinarySearch">Binary Search</option>
          <option value="JumpSearch">Jump Search</option>
          <option value="InterpolationSearch">Interpolation Search</option>
        </select>

        <input
          type="number"
          value={target}
          onChange={handleTargetChange}
          placeholder="Enter target"
          className="bg-gray-700 text-white px-4 py-2 rounded"
        />

        {/* Algorithm Component */}
        {algorithm === "LinearSearch" && (
          <LinearAlgorithm array={array} target={target} setHighlightIndex={setHighlightIndex} setStatus={setStatus} />
        )}
        {algorithm === "BinarySearch" && (
          <BinaryAlgorithm array={array} target={target} setArray={setArray} setHighlightIndex={setHighlightIndex} setStatus={setStatus} />
        )}
        {algorithm === "JumpSearch" && (
          <JumpAlgorithm array={array} target={target} setArray={setArray} setHighlightIndex={setHighlightIndex} setStatus={setStatus} />
        )}
        {algorithm === "InterpolationSearch" && (
          <InterpolationAlgorithm array={array} target={target} setHighlightIndex={setHighlightIndex} setStatus={setStatus} />
        )}

        <button
          onClick={resetArray}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Reset Array
        </button>
      </div>

      {/* Status Display */}
      <div className="mb-4 text-lg font-semibold text-yellow-300">
        {status}
      </div>

      {/* Visualization */}
      <div className="flex space-x-1 items-end">
        {array.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Display the number above the bar */}
            <span
              className={`text-sm mb-1 ${index === highlightIndex ? "text-yellow-400 font-bold" : "text-gray-300"}`}
            >
              {value}
            </span>

            {/* Bar visualization */}
            <div
              className={`w-5 bg-gray-400 rounded ${index === highlightIndex ? "bg-yellow-500" : ""}`}
              style={{
                height: `${value}px`,
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 w-full max-w-screen-lg">
        <div className="flex space-x-8 w-full justify-center ">
          <div className="flex-1 flex justify-center">
            <AlgorithmSteps algorithm={algorithm} currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </div>
          <div className="flex-1 flex justify-center">
            <AlgorithmComplexity algorithm={algorithm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingAlgorithms;