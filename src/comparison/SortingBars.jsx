import React from 'react';

const SortingBars = ({ array }) => {
    return (
        <div className="w-full overflow-x-auto py-2">
            <div 
                className="flex justify-start items-end gap-0.5"
                style={{ 
                    minWidth: `${array.length * 4}px`, // Adjusted for better spacing
                    height: '200px' // Increased height
                }}
            >
                {array.map((value, index) => (
                    <div
                        key={index}
                        style={{
                            height: `${value * 1.8}px`, // Reduced multiplier for better fit
                            width: '6px', // Slightly wider for visibility
                            backgroundColor: '#3B82F6',
                            borderRadius: '3px',
                            transition: 'height 0.3s ease',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SortingBars;