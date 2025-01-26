import React from 'react';

const SortingBars = ({ array }) => {
    if (!Array.isArray(array)) {
        return <p>Error: array is not defined or is not an array</p>;
    }

    const barWidth = 12;  

    return (
        <div className="w-full overflow-x-auto mt-4">
            <div className="flex justify-center">
                {array.map((value, index) => (
                    <div
                        key={index}
                        style={{
                            height: `${value * 2}px`, 
                            width: `${barWidth}px`, 
                            backgroundColor: 'teal', 
                            margin: '0 1px', 
                            borderRadius: '4px', 
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SortingBars;
