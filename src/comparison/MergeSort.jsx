import { useEffect, useRef } from "react";

const MergeSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const mergeSort = async (arr, start, end) => {
        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);

        // Recursively divide the array
        await mergeSort(arr, start, mid);
        await mergeSort(arr, mid + 1, end);

        // Merge and visualize the arrays
        await merge(arr, start, mid, end);
    };

    const merge = async (arr, start, mid, end) => {
        let left = arr.slice(start, mid + 1);
        let right = arr.slice(mid + 1, end + 1);

        let i = start;
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                arr[i++] = left.shift();
            } else {
                arr[i++] = right.shift();
            }

            // Update array state for visualization
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, 10)); // Delay for animation
        }

        while (left.length) {
            arr[i++] = left.shift();
            setArray([...arr]);
      
        }

        while (right.length) {
            arr[i++] = right.shift();
            setArray([...arr]);
        }
    };

    useEffect(() => {
        if (isSorting && !isSortedRef.current) {
            isSortedRef.current = true;
            const arr = [...array];
            mergeSort(arr, 0, arr.length - 1);
        }
    }, [isSorting, array]);

    return null;
};

export default MergeSort;
