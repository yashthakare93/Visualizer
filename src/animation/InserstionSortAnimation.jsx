import React, { useState, useEffect, useRef } from "react";

const InsertionSortAnimation = () => {
  const [array, setArray] = useState([15, 43, 28, 9, 7]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  
  // Create a ref to track if the component is mounted
  const isMounted = useRef(true);

  useEffect(() => {
    // Cleanup function to set the mounted flag to false when the component unmounts
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
    <div className="flex flex-col">
      <h2 className="text-2xl pb-4 font-serif font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Insertion Sort Animation
      </h2>

      <div className="flex w-full gap-6">
        {/* Algorithm Code Section */}
        <div className="flex-1">
          <pre className="bg-gray-900 text-white p-4 rounded w-full min-h-[200px] overflow-x-auto whitespace-pre-wrap">
            <code>
              {`function insertionSort(arr) {`}<br />
              {`  for (let i = 1; i < arr.length; i++) {`}<br />
              {`    let currentVal = arr[i];`}<br />
              {`    let j = i - 1;`}<br />
              {`    while (j >= 0 && arr[j] > currentVal) {`}<br />
              {`      arr[j + 1] = arr[j];`}<br />
              {`      j--;`}<br />
              {`    }`}<br />
              {`    arr[j + 1] = currentVal;`}<br />
              {`  }`}<br />
              {`}`}
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
              onClick={handleInsertionSort}
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

          <div className="flex gap-4 pt-4">
            {array.map((value, index) => (
              <div
                key={index}
                className={`block w-16 h-16 text-white flex items-center justify-center rounded shadow-md ${
                  highlightedIndices.includes(index) ? "bg-red-500" : "bg-blue-500"
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
