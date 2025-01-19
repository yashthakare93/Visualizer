import { useRef } from "react";

const ShellSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const shellSort = async (arr) => {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
                setArray([...arr]); // Update state
                await new Promise(resolve => setTimeout(resolve, 50)); // Delay
            }
        }
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        shellSort([...array]);
    }

    return null;
};

export default ShellSort;
