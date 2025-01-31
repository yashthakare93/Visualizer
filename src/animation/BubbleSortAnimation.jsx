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
    <div className="flex flex-col p-6">
      <div className="flex flex-col lg:flex-row gap-x-32">
        {/* Algorithm Code Section */}
        <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-800">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">bubble-sort.js</span>
          </div>

          <div className="p-4 font-mono text-sm leading-7">
            <code className="text-gray-300">
              {/* Line 1 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">1</span>
                <span className={highlightedCodeLine === "outer-loop" ? "text-yellow-400" : ""}>
                  for (let i = 0; i &lt; n; i++) &#123;
                </span>
              </div>

              {/* Line 2 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">2</span>
                <span className={highlightedCodeLine === "inner-loop" ? "text-yellow-400" : ""}>
                  &nbsp;&nbsp;for (let j = 0; j &lt; n - i - 1; j++) &#123;
                </span>
              </div>

              {/* Line 3 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">3</span>
                <span className={highlightedCodeLine === "comparison" ? "text-yellow-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] &gt; arr[j + 1]) &#123;
                </span>
              </div>

              {/* Line 4 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">4</span>
                <span className={highlightedCodeLine === "swap" ? "text-green-400" : ""}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                </span>
              </div>

              {/* Line 5 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">5</span>
                <span className="text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 6 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">6</span>
                <span className="text-gray-300">&nbsp;&nbsp;&#125;</span>
              </div>

              {/* Line 7 */}
              <div className="flex">
                <span className="text-gray-600 w-8 flex-shrink-0">7</span>
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
              onClick={bubbleSort}
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

          {/* Sorting Array Visual */}
          <div className="flex gap-4 pt-4">
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
