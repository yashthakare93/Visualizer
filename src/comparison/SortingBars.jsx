import React from 'react';

const SortingBars = ({ array }) => {
    return (
        <div className="flex space-x-1 mt-4">
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        height: `${value * 2}px`,
                        width: '10px',
                        backgroundColor: 'teal',
                        margin: '0 1px',
                    }}
                ></div>
            ))}
        </div>
    );
};

export default SortingBars;
