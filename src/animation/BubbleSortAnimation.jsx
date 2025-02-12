import React, { useState, useRef, useEffect } from "react";

const BubbleSortAnimation = () => {
  const [array, setArray] = useState([15, 43, 28, 9, 7]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [highlightedCodeLine, setHighlightedCodeLine] = useState(null);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false; // Mark unmounted on navigation
    };
  }, []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    if (!isMounted.current) return;
    setIsSorting(true);
    let arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isMounted.current) return; // Stop execution if component unmounted
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
    if (!isMounted.current) return; // Ensure component is mounted

    const blocks = document.querySelectorAll(".block");
    if (!blocks[i] || !blocks[j]) return; // Check if elements exist

    const block1 = blocks[i];
    const block2 = blocks[j];
    const blockWidth = block1?.offsetWidth + 16 || 0; // Use optional chaining
    const distance = (j - i) * blockWidth;

    block1.style.transition = "transform 0.5s";
    block1.style.transform = `translate(${distance}px, -50px)`;

    block2.style.transition = "transform 0.5s";
    block2.style.transform = `translate(-${distance}px, 50px)`;

    await sleep(500);

    if (!isMounted.current) return;

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
            <span className="text-gray-400 text-xs sm:text-sm font-mono">bubble-sort.js</span>
          </div>
          <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
            <code className="text-gray-300">
              {/* Line 1 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">1</span>
                <span className={highlightedCodeLine === "outer-loop" ? "text-yellow-400" : ""}>
                  for (let i = 0; i &lt; n; i++) &#123;
                </span>
              </div>
              {/* Line 2 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">2</span>
                <span className={highlightedCodeLine === "inner-loop" ? "text-yellow-400" : ""}>
                  &nbsp;&nbsp;for (let j = 0; j &lt; n - i - 1; j++) &#123;
                </span>
              </div>

              {/* Line 3 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">3</span>
                <span className={highlightedCodeLine === "comparison" ? "text-yellow-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] &gt; arr[j + 1]) &#123;
                </span>
              </div>

              {/* Line 4 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">4</span>
                <span className={highlightedCodeLine === "swap" ? "text-green-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                </span>
              </div>

              {/* Line 5 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">5</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 6 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">6</span>
                <span className="text-gray-300">&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 7 */}
              <div className="flex">
                <span className="text-gray-600 w-6 sm:w-8 flex-shrink-0">7</span>
                <span className="text-gray-300">&#125;</span>
              </div>
            </code>
          </div>
        </div>

        {/* Array Section */}
        <div className="flex-1 flex flex-col items-center">
          {/* Buttons Grid */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2 mt-4 mb-4 sm:mb-6 w-full">
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
              onClick={bubbleSort}
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
    </div>
  );
};

export default BubbleSortAnimation;