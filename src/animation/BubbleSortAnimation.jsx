import React, { useState } from "react";

const BubbleSortAnimation = () => {
  const [array, setArray] = useState([15, 43, 28, 9, 7]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [highlightedCodeLine, setHighlightedCodeLine] = useState(null);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setHighlightedIndices([j, j + 1]);
        setHighlightedCodeLine("Comparing code: arr[j] > arr[j + 1]");
        setCurrentStep(`Comparing ${arr[j]} and ${arr[j + 1]} at indices ${j} and ${j + 1}`);
        await sleep(500);

        if (arr[j] > arr[j + 1]) {
          setHighlightedCodeLine("[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];");
          setCurrentStep(`Swapping ${arr[j]} and ${arr[j + 1]} at indices ${j} and ${j + 1}`);
          await animateSwap(j, j + 1);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
    }

    setCurrentStep("Sorting complete!");
    setIsSorting(false);
    setHighlightedIndices([]);
    setHighlightedCodeLine(null);
  };

  const animateSwap = async (i, j) => {
    const blocks = document.querySelectorAll(".block");
    const block1 = blocks[i];
    const block2 = blocks[j];
    const blockWidth = block1.offsetWidth + 16;
    const distance = (j - i) * blockWidth;

    // Apply transition and animation for swapping
    block1.style.transition = "transform 0.5s";
    block1.style.transform = `translate(${distance}px, -50px)`;

    block2.style.transition = "transform 0.5s";
    block2.style.transform = `translate(-${distance}px, 50px)`;

    await sleep(500); // Wait for the swap animation to complete

    // Reset block styles
    block1.style.transition = "";
    block2.style.transition = "";
    block1.style.transform = "";
    block2.style.transform = "";
  };

  const resetArray = () => {
    setArray([15, 43, 28, 9, 7]);
    setCurrentStep("");
    setIsSorting(false);
    setHighlightedIndices([]);
    setHighlightedCodeLine(null);
  };

  const setBestCase = () => {
    setArray([1, 2, 3, 4, 5]);
  };

  const setWorstCase = () => {
    setArray([5, 4, 3, 2, 1]); 
  };

  const setAverageCase = () => {
    setArray([15, 43, 28, 9, 7]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-full gap-6">
        {/* Algorithm Code Section */}
        <div className="flex-1">
          <pre className="bg-gray-900 text-white p-4 rounded w-full min-h-[200px] overflow-x-auto whitespace-pre-wrap">
            <code>
              <span className={highlightedCodeLine === "Comparing code: arr[j] > arr[j + 1]" ? "text-yellow-300" : ""}>
                {`for (let i = 0; i < n; i++) { // Outer loop, runs for each element`}
              </span>
              <br />
              <span className={highlightedCodeLine === "Comparing code: arr[j] > arr[j + 1]" ? "text-yellow-300" : ""}>
                {`  for (let j = 0; j < n - i - 1; j++) { // Inner loop, compares adjacent elements`}
              </span>
              <br />
              <span className={highlightedCodeLine === "Comparing code: arr[j] > arr[j + 1]" ? "text-yellow-300" : ""}>
                {`    if (arr[j] > arr[j + 1]) { // If the current element is greater than the next`}
              </span>
              <br />
              <span className={highlightedCodeLine === "[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];" ? "text-green-400" : ""}>
                {`      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap the elements`}
              </span>
              <br />
              <span className={highlightedCodeLine === "Comparing code: arr[j] > arr[j + 1]" ? "text-yellow-300" : ""}>
                {`    }`}
              </span>
              <br />
              <span className={highlightedCodeLine === "Comparing code: arr[j] > arr[j + 1]" ? "text-yellow-300" : ""}>
                {`  }`}
              </span>
              <br />
              <span className={highlightedCodeLine === "Comparing code: arr[j] > arr[j + 1]" ? "text-yellow-300" : ""}>
                {`}`}
              </span>
            </code>
          </pre>
        </div>

        {/* Array Section */}
        <div className="flex-1 flex flex-col items-center">
          {/* Buttons for selecting cases */}
          <div className="flex gap-2 mt-8 mb-8">
            <button
              onClick={setBestCase}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              Best Case
            </button>
            <button
              onClick={setWorstCase}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Worst Case
            </button>
            <button
              onClick={setAverageCase}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
            >
              Average Case
            </button>
            <button
              onClick={bubbleSort}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition disabled:opacity-50"
              disabled={isSorting}
            >
              Sort
            </button>
            <button
              onClick={resetArray}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition disabled:opacity-50"
              disabled={isSorting}
            >
              Reset Array
            </button>
          </div>

          {/* Sorting Array Visual */}
          <div className="flex gap-4 pt-4 relative">
            {array.map((value, index) => (
              <div
                key={index}
                className={`w-16 h-16 text-white flex items-center justify-center rounded shadow-md ${highlightedIndices.includes(index) ? "bg-red-500" : "bg-blue-500"} block`}
                style={{ transition: "transform 0.5s" }}
              >
                {value}
              </div>
            ))}
          </div>

          {/* Sorting Step Text */}
          <div className="text-lg mt-4 text-gray-300 text-center">{currentStep}</div>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortAnimation;
