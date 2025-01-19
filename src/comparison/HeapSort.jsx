import { useRef } from "react";

const HeapSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const heapSort = async (arr) => {
        const heapify = async (arr, n, i) => {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest]) largest = left;
            if (right < n && arr[right] > arr[largest]) largest = right;

            if (largest !== i) {
                [arr[i], arr[largest]] = [arr[largest], arr[i]];
                await heapify(arr, n, largest);
            }
        };

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            await heapify(arr, arr.length, i);
            setArray([...arr]); // Update state
        }

        for (let i = arr.length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            await heapify(arr, i, 0);
            setArray([...arr]); // Update state
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay
        }
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        heapSort([...array]);
    }

    return null;
};

export default HeapSort;
