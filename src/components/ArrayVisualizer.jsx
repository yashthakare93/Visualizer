import React, { useState } from 'react';

const ArrayVisualizer = () => {
    const [array, setArray] = useState([55, 55, 56, 87, 96]);
    const [inputValue, setInputValue] = useState('');
    const [indexToRemove, setIndexToRemove] = useState('');
    const [indexToUpdate, setIndexToUpdate] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [operationHistory, setOperationHistory] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [userDefinedInput, setUserDefinedInput] = useState('');

    // Operation handlers with animations
    const animateOperation = (index, duration = 600) => {
        setHighlightedIndex(index);
        setTimeout(() => setHighlightedIndex(-1), duration);
    };

    const handleInsert = () => {
        if (inputValue.trim()) {
            const newValue = parseInt(inputValue);
            animateOperation(array.length);
            setArray(prev => [...prev, newValue]);
            setOperationHistory(prev => [...prev, `Inserted ${newValue} at end`]);
            setInputValue('');
        }
    };

    const handleRemove = () => {
        if (indexToRemove >= 0 && indexToRemove < array.length) {
            animateOperation(indexToRemove);
            setTimeout(() => {
                setArray(prev => prev.filter((_, i) => i !== parseInt(indexToRemove)));
                setOperationHistory(prev => [...prev, `Removed index ${indexToRemove}`]);
                setIndexToRemove('');
            }, 600);
        }
    };

    const handleUpdate = () => {
        if (indexToUpdate >= 0 && indexToUpdate < array.length && updateValue.trim()) {
            animateOperation(indexToUpdate);
            setTimeout(() => {
                setArray(prev => {
                    const newArray = [...prev];
                    newArray[indexToUpdate] = parseInt(updateValue);
                    return newArray;
                });
                setOperationHistory(prev => [...prev, `Updated index ${indexToUpdate} to ${updateValue}`]);
                setIndexToUpdate('');
                setUpdateValue('');
            }, 600);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            <div className="max-w-7xl mx-auto py-4">
                {/* Header */}
                <header className="mb-8">
                    <header className="mb-8">
                        <h1 className="text-4xl font-mono mb-6">Array Operations <span className='text-green-400'>Visualization</span></h1>
                    </header>

                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Array Visualization */}
                    <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-400">Array</h2>
                            <span className="text-sm text-gray-400">
                                {array.length} elements • {array.length * 4} bytes
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {array.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative p-4 w-20 h-20 flex flex-col items-center justify-center rounded-lg border transition-all
                    ${highlightedIndex === index
                                            ? 'bg-blue-600 border-blue-300 scale-105 shadow-md'
                                            : 'bg-gray-700 border-gray-600'}`}
                                >
                                    <span className="text-xs text-gray-400 absolute top-1 right-2">{index}</span>
                                    <span className="text-lg font-medium text-blue-400">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Array Creation */}
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">Initialize Array</h3>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={userDefinedInput}
                                    onChange={(e) => setUserDefinedInput(e.target.value)}
                                    placeholder="Enter comma-separated numbers"
                                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                                />
                                <button
                                    onClick={() => {
                                        const newArray = userDefinedInput
                                            .split(',')
                                            .map(num => parseInt(num.trim()))
                                            .filter(num => !isNaN(num));
                                        setArray(newArray);
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Initialize
                                </button>
                            </div>
                        </div>

                        {/* Operations Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Insert */}
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">Insert Operation</h3>
                                <div className="space-y-2">
                                    <input
                                        type="number"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Enter value"
                                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                    />
                                    <button
                                        onClick={handleInsert}
                                        className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                    >
                                        Insert at End
                                    </button>
                                </div>
                            </div>

                            {/* Remove */}
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">Remove Operation</h3>
                                <div className="space-y-2">
                                    <input
                                        type="number"
                                        value={indexToRemove}
                                        onChange={(e) => setIndexToRemove(e.target.value)}
                                        placeholder="Enter index"
                                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                    />
                                    <button
                                        onClick={handleRemove}
                                        className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                    >
                                        Remove by Index
                                    </button>
                                </div>
                            </div>

                            {/* Update */}
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">Update Operation</h3>
                                <div className="space-y-2">
                                    <input
                                        type="number"
                                        value={indexToUpdate}
                                        onChange={(e) => setIndexToUpdate(e.target.value)}
                                        placeholder="Index"
                                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                    />
                                    <input
                                        type="number"
                                        value={updateValue}
                                        onChange={(e) => setUpdateValue(e.target.value)}
                                        placeholder="New value"
                                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                    />
                                    <button
                                        onClick={handleUpdate}
                                        className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                                    >
                                        Update Element
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* History Panel */}
                    <div className="bg-gray-800 rounded-xl shadow-sm p-6 h-fit">
                        <h2 className="text-lg font-semibold text-white mb-4">Statistics</h2>
                        <ul className="text-gray-400 space-y-1 mb-4">
                            <li>Elements: {array.length}</li>
                            <li>Memory: {array.length * 4} bytes</li>
                            <li>Operations: {operationHistory.length}</li>
                        </ul>
                        <h2 className="text-lg font-semibold text-white mb-4">Operation History</h2>
                        <div className="space-y-3">
                            {operationHistory.map((op, index) => (
                                <div
                                    key={index}
                                    className="p-3 bg-gray-700 rounded-md border-l-4 border-blue-500 text-sm text-gray-300"
                                >
                                    {op}
                                </div>
                            ))}
                            {operationHistory.length === 0 && (
                                <p className="text-gray-400 text-sm">No operations performed yet</p>
                            )}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ArrayVisualizer;
