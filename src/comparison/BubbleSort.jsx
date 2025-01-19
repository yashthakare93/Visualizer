import { useRef } from "react";

const BubbleSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false); // Ref to track sorting completion

    const bubbleSort = async (arr) => {
        let swapped;
        for (let i = 0; i < arr.length - 1; i++) {
            swapped = false;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;
                }
            }

            setArray([...arr]); // Update array state after each pass

            if (!swapped) break;

            await new Promise((resolve) => setTimeout(resolve, 50)); // Delay for visualization
        }
        isSortedRef.current = true; // Mark sorting as complete
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true; // Prevent multiple invocations
        bubbleSort([...array]); // Start sorting
    }

    return null;
};

export default BubbleSort;
