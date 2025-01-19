// SortingBars.js
import React from 'react';

const SortingBars = ({ array }) => {
    return (
        <div className="flex gap-2 mt-4 justify-center">
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        height: `${value * 3}px`, // Height will be proportional to the array value
                        width: "20px",
                        backgroundColor: "#3490dc", // Customize color here
                    }}
                    className="flex items-end justify-center"
                >
                    <span className="text-white text-xs">{value}</span>
                </div>
            ))}
        </div>
    );
};

export default SortingBars;
