import { useRef } from "react";

const CountingSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const countingSort = async (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const range = max - min + 1;

        let count = new Array(range).fill(0);
        let output = new Array(arr.length).fill(0);

        for (let i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }

        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
            setArray([...arr]); // Update state
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay
        }
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        countingSort([...array]);
    }

    return null;
};

export default CountingSort;
