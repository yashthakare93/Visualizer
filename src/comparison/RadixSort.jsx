import { useRef } from "react";

const RadixSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const radixSort = async (arr) => {
        const getMax = arr => Math.max(...arr);
        const countingSort = async (arr, exp) => {
            let output = new Array(arr.length).fill(0);
            let count = new Array(10).fill(0);

            for (let i = 0; i < arr.length; i++) {
                count[Math.floor(arr[i] / exp) % 10]++;
            }

            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            for (let i = arr.length - 1; i >= 0; i--) {
                output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
                count[Math.floor(arr[i] / exp) % 10]--;
            }

            for (let i = 0; i < arr.length; i++) {
                arr[i] = output[i];
            }
        };

        const max = getMax(arr);
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            await countingSort(arr, exp);
            setArray([...arr]); // Update state
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay
        }
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        radixSort([...array]);
    }

    return null;
};

export default RadixSort;
