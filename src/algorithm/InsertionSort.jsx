import React from 'react';
import InsertionSortAnimation from '../animation/InserstionSortAnimation';

const InsertionSort = () => {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center">
            {/* Centered Heading on Small Screens */}
            <h1 className="text-4xl font-mono mb-6 sm:text-center px-4">
                Insertion Sort <span className="text-green-400">Visualization</span>
            </h1>
            <InsertionSortAnimation />
        </div>
    );
}

export default InsertionSort;
