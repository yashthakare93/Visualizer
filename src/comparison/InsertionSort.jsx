import { useRef } from "react";

const InsertionSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const insertionSort = async (arr) => {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
            setArray([...arr]); // Update state
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay
        }
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        insertionSort([...array]);
    }

    return null;
};

export default InsertionSort;
