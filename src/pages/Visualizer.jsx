import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import {
  CpuChipIcon,
  SparklesIcon,
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ListBulletIcon,
  RectangleGroupIcon
} from '@heroicons/react/24/outline';

const visualizations = [
  {
    id: 1,
    title: 'Bubble Sort',
    href: '/visualizer/bubble',
    description: 'Visualize the Bubble Sort algorithm with step-by-step animations. Learn how it works and understand its time complexity.',
    category: 'Sorting Animation',
    icon: SparklesIcon,
    colSpan: 'lg:col-span-1'
  },
  {
    id: 2,
    title: 'Quick Sort',
    href: '/visualizer/quick',
    description: 'Understand Quick Sort with an interactive visualizer. Watch how the partitioning process sorts an array quickly.',
    category: 'Sorting Animation',
    icon: CpuChipIcon,
    colSpan: 'lg:col-span-1'
  },
  {
    id: 3,
    title: 'Insertion Sort',
    href: '/visualizer/insertion',
    description: 'Explore the Insertion Sort algorithm and see how elements are inserted into their correct positions iteratively.',
    category: 'Sorting Animation',
    icon: ListBulletIcon,
    colSpan: 'lg:col-span-1'
  },
  {
    id: 4,
    title: 'Algorithm Comparison',
    href: '/visualizer/algoComparison',
    description: 'Compare multiple sorting algorithms and see their performance side by side using real-time visualizations.',
    category: 'Analysis',
    icon: ArrowsRightLeftIcon,
    colSpan: 'lg:col-span-2'
  },
  {
    id: 5,
    title: 'Sorting Algorithms',
    href: '/visualizer/sortingAlgorithm',
    description: 'Visualize various Sorting algorithms and compare their operations in a dynamic environment.',
    category: 'Sorting',
    icon: ChartBarIcon,
    colSpan: 'lg:col-span-1'
  },
  {
    id: 6,
    title: 'Searching Algorithms',
    href: '/visualizer/searchingAlgorithm',
    description: 'Visualize Searching algorithms like Binary Search, Jump Search, and Linear Search with clear animations.',
    category: 'Searching',
    icon: MagnifyingGlassIcon,
    colSpan: 'lg:col-span-1'
  },
  {
    id: 7,
    title: 'Array Operations',
    href: '/visualizer/array',
    description: 'Visualize array operations and explore sorting algorithms with step-by-step animations.',
    category: 'Data Structures',
    icon: RectangleGroupIcon,
    colSpan: 'lg:col-span-2'
  },
];

export default function Visualizer() {
  const navigate = useNavigate();
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
  }, [algorithms]); // Added dependency

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Sorting': return 'bg-teal-700/20 text-teal-600';
      case 'Sorting Animation': return 'bg-purple-500/20 text-purple-400';
      case 'Searching': return 'bg-emerald-500/20 text-emerald-400';
      case 'Analysis': return 'bg-rose-500/20 text-rose-400';
      case 'Data Structures': return 'bg-amber-500/20 text-amber-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Banner algorithm={algorithm} />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {visualizations.map((visualization) => {
            const Icon = visualization.icon;
            return (
              <div
                key={visualization.id}
                className={`${visualization.colSpan} group relative cursor-pointer rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 transition-all hover:border-gray-600 hover:bg-gray-700/30 hover:shadow-xl`}
                onClick={() => navigate(visualization.href)}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-gray-400/80 group-hover:text-gray-300" />
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(visualization.category)}`}>
                      {visualization.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white">
                      {visualization.title}
                    </h3>
                    <p className="text-sm leading-6 text-gray-400/90 line-clamp-3">
                      {visualization.description}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent via-gray-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}