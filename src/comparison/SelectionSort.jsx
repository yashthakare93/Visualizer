import { useRef } from "react";

const SelectionSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const selectionSort = async (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j;
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            setArray([...arr]); // Update state
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay
        }
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        selectionSort([...array]);
    }

    return null;
};

export default SelectionSort;
