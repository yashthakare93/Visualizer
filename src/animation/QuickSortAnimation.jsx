import React, { useState } from "react";

const QuickSortAnimation = () => {
    const [array, setArray] = useState([15, 43, 28, 9, 7]);
    const [isSorting, setIsSorting] = useState(false);
    const [currentStep, setCurrentStep] = useState("");
    const [highlightedIndices, setHighlightedIndices] = useState([]);
    const [highlightedCodeLine, setHighlightedCodeLine] = useState(""); 

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const quickSort = async (arr, left, right) => {
        if (left < right) {
            setHighlightedCodeLine("quickSort(arr, left, right);");
            setCurrentStep("Choosing pivot and partitioning");
            const pivotIndex = await partition(arr, left, right);

            setCurrentStep(`Pivot placed at index ${pivotIndex}`);
            await sleep(500);

            setHighlightedCodeLine("quickSort(arr, left, pivotIndex - 1);");
            setCurrentStep("Recursively sorting left side");
            await quickSort(arr, left, pivotIndex - 1);

            setHighlightedCodeLine("quickSort(arr, pivotIndex + 1, right);");
            setCurrentStep("Recursively sorting right side");
            await quickSort(arr, pivotIndex + 1, right);
        }
    };

    const partition = async (arr, left, right) => {
        const pivot = arr[right];
        setHighlightedIndices([right]); // Highlight the pivot index
        setCurrentStep(`Choosing pivot: ${pivot}`);
        await sleep(500);

        let i = left - 1;

        for (let j = left; j < right; j++) {
            setHighlightedIndices([j, right]); // Highlight comparison indices
            setHighlightedCodeLine("arr[j] <= pivot"); // Highlight the comparison line
            setCurrentStep(`Comparing ${arr[j]} with pivot ${pivot}`);
            await sleep(500);

            if (arr[j] <= pivot) {
                i++;
                await animateSwap(i, j);

                [arr[i], arr[j]] = [arr[j], arr[i]];
                setCurrentStep(`Swapping ${arr[i]} and ${arr[j]}`);
                setArray([...arr]);
                await sleep(1000);
            }
        }

        await animateSwap(i + 1, right);

        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        setCurrentStep(`Swapping pivot ${arr[right]} with ${arr[i + 1]}`);
        setArray([...arr]);
        await sleep(1000);

        return i + 1;
    };

    const animateSwap = async (i, j) => {
        const blocks = document.querySelectorAll(".block");
        const block1 = blocks[i];
        const block2 = blocks[j];
        const blockWidth = block1.offsetWidth + 16;
        const distance = (j - i) * blockWidth;

        block1.style.transition = "transform 0.5s";
        block1.style.transform = `translate(${distance}px, -50px)`;

        block2.style.transition = "transform 0.5s";
        block2.style.transform = `translate(-${distance}px, 50px)`;

        await sleep(500);

        block1.style.transition = "";
        block2.style.transition = "";
        block1.style.transform = "";
        block2.style.transform = "";
    };

    const handleQuickSort = async () => {
        if (isSorting) return;
        setIsSorting(true);
        let arr = [...array];
        await quickSort(arr, 0, arr.length - 1);
        setCurrentStep("Sorting complete!");
        setIsSorting(false);
        setHighlightedIndices([]);
        setHighlightedCodeLine(""); 
    };

    const resetArray = () => {
        setArray([15, 43, 28, 9, 7]);
        setCurrentStep("");
        setIsSorting(false);
        setHighlightedIndices([]);
        setHighlightedCodeLine("");
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
            <h2 className="text-2xl pb-4 font-serif font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Quick Sort Animation with Swap Effect
            </h2>

            <div className="flex w-full gap-6">
                {/* Algorithm Code Section */}
                <div className="flex-1">
                    <pre className="bg-gray-900 text-white p-4 rounded w-full min-h-[200px] overflow-x-auto whitespace-pre-wrap">
                        <code>
                            <span className={highlightedCodeLine === "quickSort(arr, left, right);" ? "text-white" : ""}>
                                {`function quickSort(arr, left, right) {`}
                            </span>
                            <br />
                            <span className={highlightedCodeLine === "quickSort(arr, left, right);" ? "text-white" : ""}>
                                {`  if (left < right) {`}
                            </span>
                            <br />
                            <span className={highlightedCodeLine === "quickSort(arr, left, right);" ? "text-white" : ""}>
                                {`    let pivotIndex = partition(arr, left, right);`}
                            </span>
                            <br />
                            <span className={highlightedCodeLine === "quickSort(arr, left, pivotIndex - 1);" ? "" : ""}>
                                {`    quickSort(arr, left, pivotIndex - 1);`}
                            </span>
                            <br />
                            <span className={highlightedCodeLine === "quickSort(arr, pivotIndex + 1, right);" ? "" : ""}>
                                {`    quickSort(arr, pivotIndex + 1, right);`}
                            </span>
                            <br />
                            <span className={highlightedCodeLine === "quickSort(arr, left, right);" ? "text-white" : ""}>
                                {`  }`}
                            </span>
                            <br />
                            <span className={highlightedCodeLine === "quickSort(arr, left, right);" ? "text-white" : ""}>
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
                            onClick={handleQuickSort}  
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
                    {/* Array Visualization */}
                    <div className="flex gap-4 pt-4 relative">
                        {array.map((value, index) => (
                            <div
                                key={index}
                                className={`w-16 h-16 text-white flex items-center justify-center rounded shadow-md block ${highlightedIndices.includes(index) ? "bg-red-500" : "bg-blue-500"}`}
                            >
                                {value}
                            </div>
                        ))}
                    </div>

                    {/* Current Step */}
                    <div className="text-lg mt-4 text-gray-300 text-center">{currentStep}</div>
                </div>
            </div>
        </div>
    );
};

export default QuickSortAnimation;
