import React from 'react';

const SortingBars = ({ array }) => {
    return (
        <div className="flex justify-center items-end space-x-1 mt-4">
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        height: `${value * 2}px`, 
                        width: '10px',
                        backgroundColor: '#4CAF50', 
                        borderRadius: '3px',
                        border: '1px solid #3E8E41', 
                    }}
                ></div>
            ))}
        </div>
    );
};

export default SortingBars;
