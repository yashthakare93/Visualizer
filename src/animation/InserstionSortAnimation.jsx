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
    <div className="flex flex-col p-6">
      <div className="flex flex-col lg:flex-row gap-x-32">
        {/* Algorithm Code Section */}
        <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-800">
          {/* Header with file name and traffic light buttons */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">insertion-sort.js</span>
          </div>

          {/* Code Block */}
          <div className="p-4 font-mono text-sm leading-7">
            <code className="text-gray-300">
              {/* Line 1 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">1</span>
                <span className={highlightedCodeLine === "function" ? "text-yellow-400" : ""}>
                  function insertionSort(arr) &#123;
                </span>
              </div>

              {/* Line 2 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">2</span>
                <span className={highlightedCodeLine === "outer-loop" ? "text-blue-400" : ""}>
                  &nbsp;&nbsp;for (let i = 1; i &lt; arr.length; i++) &#123;
                </span>
              </div>

              {/* Line 3 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">3</span>
                <span className={highlightedCodeLine === "current-val" ? "text-yellow-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;let currentVal = arr[i];
                </span>
              </div>

              {/* Line 4 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">4</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;let j = i - 1;</span>
              </div>

              {/* Line 5 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">5</span>
                <span className={highlightedCodeLine === "while-loop" ? "text-green-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;while (j &gt;= 0 &amp;&amp; arr[j] &gt; currentVal) &#123;
                </span>
              </div>

              {/* Line 6 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">6</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = arr[j];</span>
              </div>

              {/* Line 7 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">7</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j--;</span>
              </div>

              {/* Line 8 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">8</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 9 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">9</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = currentVal;</span>
              </div>

              {/* Line 10 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">10</span>
                <span className="text-gray-300">&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 11 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">11</span>
                <span className="text-gray-300">&#125;</span>
              </div>
            </code>
          </div>
        </div>


        {/* Array Section */}
        <div className="flex-1 flex flex-col items-center">
          {/* Buttons for selecting cases */}
          <div className="flex gap-3 mt-4 mb-6">
            <button
              onClick={setBestCase}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold
              hover:bg-blue-600 hover:shadow-lg transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              active:bg-blue-700 active:shadow-inner shadow-md"
            >
              Best Case
            </button>
            <button
              onClick={setWorstCase}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold
              hover:bg-red-600 hover:shadow-lg transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
              active:bg-red-700 active:shadow-inner shadow-md"
            >
              Worst Case
            </button>
            <button
              onClick={setAverageCase}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold
              hover:bg-amber-600 hover:shadow-lg transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
              active:bg-amber-700 active:shadow-inner shadow-md"
            >
              Average Case
            </button>
            <button
              onClick={handleInsertionSort}
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold
              hover:bg-emerald-600 hover:shadow-lg transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
              active:bg-emerald-700 active:shadow-inner shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSorting}
            >
              Sort
            </button>
            <button
              onClick={resetArray}
              className="bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold
              hover:bg-slate-700 hover:shadow-lg transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2
              active:bg-slate-800 active:shadow-inner shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSorting}
            >
              Reset Array
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            {array.map((value, index) => (
              <div
                key={index}
                className={`block w-16 h-16 text-white flex items-center justify-center rounded shadow-md ${highlightedIndices.includes(index) ? "bg-red-500" : "bg-blue-500"
                  }`}
              >
                {value}
              </div>
            ))}
          </div>

          <div className="text-lg mt-4 text-gray-300 text-center">{currentStep}</div>
        </div>
      </div>
    </div>
  );
};

export default InsertionSortAnimation;
