import { useRef } from "react";

const MergeSort = ({ array, setArray, isSorting }) => {
    const isSortedRef = useRef(false);

    const mergeSort = async (arr) => {
        const merge = async (left, right) => {
            let sorted = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) sorted.push(left.shift());
                else sorted.push(right.shift());
            }
            return [...sorted, ...left, ...right];
        };

        const divide = async (arr) => {
            if (arr.length <= 1) return arr;

            const mid = Math.floor(arr.length / 2);
            const left = await divide(arr.slice(0, mid));
            const right = await divide(arr.slice(mid));

            const merged = await merge(left, right);
            setArray([...merged]); // Update state
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay
            return merged;
        };

        await divide(arr);
    };

    if (isSorting && !isSortedRef.current) {
        isSortedRef.current = true;
        mergeSort([...array]);
    }

    return null;
};

export default MergeSort;
