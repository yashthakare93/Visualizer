import React, { useState, useEffect, useRef } from "react";

const QuickSortAnimation = () => {
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

    const quickSort = async (arr, left, right) => {
        if (left < right) {
            setHighlightedCodeLine("quickSort(arr, left, right);");
            if (!isMounted.current) return;
            setCurrentStep("Choosing pivot and partitioning");

            const pivotIndex = await partition(arr, left, right);

            if (!isMounted.current) return;
            setCurrentStep(`Pivot placed at index ${pivotIndex}`);
            await sleep(500);

            setHighlightedCodeLine("quickSort(arr, left, pivotIndex - 1);");
            if (!isMounted.current) return;
            setCurrentStep("Recursively sorting left side");
            await quickSort(arr, left, pivotIndex - 1);

            setHighlightedCodeLine("quickSort(arr, pivotIndex + 1, right);");
            if (!isMounted.current) return;
            setCurrentStep("Recursively sorting right side");
            await quickSort(arr, pivotIndex + 1, right);
        }
    };


    const partition = async (arr, left, right) => {
        if (!isMounted.current) return;
        const pivot = arr[right];
        setHighlightedIndices([right]); // Highlight the pivot index
        setCurrentStep(`Choosing pivot: ${pivot}`);
        await sleep(500);

        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (!isMounted.current) return;
            setHighlightedIndices([j, right]); // Highlight comparison indices
            setHighlightedCodeLine("arr[j] <= pivot"); // Highlight the comparison line
            setCurrentStep(`Comparing ${arr[j]} with pivot ${pivot}`);
            await sleep(500);

            if (arr[j] <= pivot) {
                i++;
                await animateSwap(i, j);
                [arr[i], arr[j]] = [arr[j], arr[i]];

                if (!isMounted.current) return;
                setCurrentStep(`Swapping ${arr[i]} and ${arr[j]}`);
                setArray([...arr]);
                await sleep(1000);
            }
        }

        await animateSwap(i + 1, right);
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

        if (!isMounted.current) return;
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

        if (!isMounted.current) return;
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
                        <span className="text-gray-400 text-sm font-mono">quick-sort.js</span>
                    </div>

                    {/* Code Block */}
                    <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
                        <code className="text-gray-300">
                            {/* Line 1 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">1</span>
                                <span className={highlightedCodeLine === "function" ? "text-yellow-400" : ""}>
                                    function quickSort(arr, left, right) &#123;
                                </span>
                            </div>

                            {/* Line 2 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">2</span>
                                <span className={highlightedCodeLine === "base-case" ? "text-blue-400" : ""}>
                                    &nbsp;&nbsp;if (left &lt; right) &#123;
                                </span>
                            </div>

                            {/* Line 3 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">3</span>
                                <span className={highlightedCodeLine === "partition" ? "text-yellow-400" : ""}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;let pivotIndex = partition(arr, left, right);
                                </span>
                            </div>

                            {/* Line 4 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">4</span>
                                <span className={highlightedCodeLine === "recursive-left" ? "text-green-400" : ""}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;quickSort(arr, left, pivotIndex - 1);
                                </span>
                            </div>

                            {/* Line 5 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">5</span>
                                <span className={highlightedCodeLine === "recursive-right" ? "text-green-400" : ""}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;quickSort(arr, pivotIndex + 1, right);
                                </span>
                            </div>

                            {/* Line 6 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">6</span>
                                <span className="text-gray-300">&nbsp;&nbsp;&#125;</span>
                            </div>

                            {/* Line 7 */}
                            <div className="flex">
                                <span className="text-gray-600  w-6 sm:w-8 flex-shrink-0">7</span>
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
                            onClick={handleQuickSort}
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

export default QuickSortAnimation;
