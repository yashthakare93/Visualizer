import { useRef } from "react";

const QuickSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const quickSort = async (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) return;

        const partition = async (arr, low, high) => {
            const pivot = arr[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            return i + 1;
        };

        const pivotIndex = await partition(arr, left, right);
        setArray([...arr]); // Update state for visualization
        await new Promise(resolve => setTimeout(resolve, 50)); // Delay

        await quickSort(arr, left, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, right);
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        quickSort([...array]);
    }

    return null;
};

export default QuickSort;
