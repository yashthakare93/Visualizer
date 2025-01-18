import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';

const visualizations = [
    {
        id: 1,
        title: 'Bubble Sort',
        href: '/visualizer/bubble',
        description:
            'Visualize the Bubble Sort algorithm with step-by-step animations. Learn how it works and understand its time complexity.',
    },

    {
        id: 2,
        title: 'Quick Sort',
        href: '/visualizer/quick',
        description:
            'Understand Quick Sort with an interactive visualizer. Watch how the partitioning process sorts an array quickly.',
    },
    {
        id: 3,
        title: 'Insertion Sort',
        href: '/visualizer/insertion',
        description:
            'Explore the Insertion Sort algorithm and see how elements are inserted into their correct positions iteratively.',
    },
];

export default function Visualizer() {
    const navigate = useNavigate()
    const [algorithm, setAlgorithm] = useState('Bubble Sort');

    const algorithms = ['Bubble Sort', 'Quick Sort', 'Insertion Sort'];

    useEffect(() => {
        const interval = setInterval(() => {
            setAlgorithm((prev) => {
                const currentIndex = algorithms.indexOf(prev);
                const nextIndex = (currentIndex + 1) % algorithms.length;
                return algorithms[nextIndex];
            });
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen">
            <Banner algorithm={algorithm} />
            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {visualizations.map((visualization) => (
                            <div
                                key={visualization.id}
                                className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition"
                                onClick={() => navigate(visualization.href)}
                            >
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-100 group-hover:text-gray-300">
                                        {visualization.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
                                        {visualization.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
