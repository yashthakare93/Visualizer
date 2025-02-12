import React, { useState, useEffect, useRef } from "react";

const InsertionSortAnimation = () => {
  const [array, setArray] = useState([15, 43, 28, 9, 7]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [highlightedCodeLine, setHighlightedCodeLine] = useState("");

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);


  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const animateSwap = async (i, j) => {
    const blocks = document.querySelectorAll(".block");
    const block1 = blocks[i];
    const block2 = blocks[j];

    // Ensure the blocks exist before proceeding
    if (!block1 || !block2) return;

    const blockWidth = block1.offsetWidth + 16;

    // Apply transition for the swap
    block1.style.transition = "transform 0.5s";
    block2.style.transition = "transform 0.5s";

    // Move blocks visually to the new positions
    block1.style.transform = `translateX(${(j - i) * blockWidth}px)`;
    block2.style.transform = `translateX(${(i - j) * blockWidth}px)`;

    await sleep(500); // Wait for the swap animation to complete

    // Swap elements in the array
    const newArray = [...array];
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
    setArray(newArray);

    // Reset the block styles after the swap
    block1.style.transition = "";
    block2.style.transition = "";
    block1.style.transform = "";
    block2.style.transform = "";
  };

  const insertionSort = async (arr) => {
    setCurrentStep("Starting Insertion Sort");
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1;

      setHighlightedIndices([i]);
      setCurrentStep(`Inserting ${currentVal}`);
      await sleep(500);

      while (j >= 0 && arr[j] > currentVal) {
        setHighlightedIndices([j, i]);
        setCurrentStep(`Comparing ${arr[j]} with ${currentVal}`);
        await sleep(500);

        // Animate swap
        await animateSwap(j, j + 1);

        arr[j + 1] = arr[j]; // Shift the larger element to the right
        setArray([...arr]);
        await sleep(500);
        j--;
      }

      // Place the current element in the correct position
      arr[j + 1] = currentVal;
      setArray([...arr]);
      setHighlightedIndices([j + 1]);
      setCurrentStep(`Inserted ${currentVal} at index ${j + 1}`);
      await sleep(500);
    }
    setCurrentStep("Sorting complete!");
  };

  const handleInsertionSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    let arr = [...array];
    await insertionSort(arr);
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const resetArray = () => {
    setArray([15, 43, 28, 9, 7]);
    setCurrentStep("");
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const setBestCase = () => {
    setArray([7, 9, 15, 28, 43]);
    setCurrentStep("Best case loaded");
  };

  const setWorstCase = () => {
    setArray([43, 28, 15, 9, 7]);
    setCurrentStep("Worst case loaded");
  };

  const setAverageCase = () => {
    setArray([15, 43, 28, 9, 7]);
    setCurrentStep("Average case loaded");
  };

  return (
    <div className="flex flex-col p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-x-32">
        {/* Algorithm Code Section */}
        <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-800 mb-4 sm:mb-0">
          <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">insertion-sort.js</span>
          </div>

          {/* Code Block */}
          <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
            <code className="text-gray-300">
              {/* Line 1 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">1</span>
                <span className={highlightedCodeLine === "function" ? "text-yellow-400" : ""}>
                  function insertionSort(arr) &#123;
                </span>
              </div>

              {/* Line 2 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">2</span>
                <span className={highlightedCodeLine === "outer-loop" ? "text-blue-400" : ""}>
                  &nbsp;&nbsp;for (let i = 1; i &lt; arr.length; i++) &#123;
                </span>
              </div>

              {/* Line 3 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">3</span>
                <span className={highlightedCodeLine === "current-val" ? "text-yellow-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;let currentVal = arr[i];
                </span>
              </div>

              {/* Line 4 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">4</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;let j = i - 1;</span>
              </div>

              {/* Line 5 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">5</span>
                <span className={highlightedCodeLine === "while-loop" ? "text-green-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;while (j &gt;= 0 &amp;&amp; arr[j] &gt; currentVal) &#123;
                </span>
              </div>

              {/* Line 6 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">6</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = arr[j];</span>
              </div>

              {/* Line 7 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">7</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j--;</span>
              </div>

              {/* Line 8 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">8</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 9 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">9</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = currentVal;</span>
              </div>

              {/* Line 10 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">10</span>
                <span className="text-gray-300">&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 11 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">11</span>
                <span className="text-gray-300">&#125;</span>
              </div>
            </code>
          </div>
        </div>

        {/* Array Section */}
        <div className="flex-1 flex flex-col items-center">
          {/* Buttons  */}
          <div className="flex flex-nowrap justify-center gap-2 sm:gap-4 mt-4 mb-4 sm:mb-6 w-full">
            <button
              onClick={setBestCase}
              className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 transition-all"
            >
              Best
            </button>
            <button
              onClick={setWorstCase}
              className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold bg-red-500 hover:bg-red-600 transition-all"
            >
              Worst
            </button>
            <button
              onClick={setAverageCase}
              className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold bg-amber-500 hover:bg-amber-600 transition-all"
            >
              Average
            </button>
            <button
              onClick={handleInsertionSort}
              className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50"
              disabled={isSorting}
            >
              Sort
            </button>
            <button
              onClick={resetArray}
              className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold bg-slate-600 hover:bg-slate-700 disabled:opacity-50"
              disabled={isSorting}
            >
              Reset
            </button>

          </div>

          {/* Array Visualization */}
          <div className="flex gap-2 sm:gap-4 pt-2 sm:pt-4">
            {array.map((value, index) => (
              <div
                key={index}
                className={`w-12 h-12 sm:w-16 sm:h-16 text-sm sm:text-base flex items-center justify-center rounded shadow-md ${highlightedIndices.includes(index) ? "bg-red-500" : "bg-blue-500"
                  } block`}
                style={{ transition: "transform 0.5s" }}
              >
                {value}
              </div>
            ))}
          </div>

          {/* Step Text */}
          <div className="text-sm sm:text-lg mt-3 sm:mt-4 text-gray-300 text-center px-2">
            {currentStep}
          </div>
        </div>
      </div>
    </div >
  );
};

export default InsertionSortAnimation;
