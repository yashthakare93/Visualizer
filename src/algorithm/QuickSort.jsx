import React from 'react';
import QuickSortAnimation from '../animation/QuickSortAnimation'; 

const QuickSort = () => {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-mono mb-6">Quick Sort <span className='text-green-400'>Visualization</span></h1>
            <QuickSortAnimation />
        </div>
    );
}

export default QuickSort;
