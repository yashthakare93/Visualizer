import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Banner() {
  const navigate = useNavigate(); 

  const bannerContent = {
    'bubble': {
      title: 'Bubble Sort Algorithm',
      description: 'Bubble Sort is a simple sorting algorithm that compares adjacent elements and swaps them if they are in the wrong order.',
      registerText: 'Learn more ',
    },
    'quick': {
      title: 'Quick Sort Algorithm',
      description: 'Quick Sort is a divide-and-conquer algorithm that works by selecting a pivot element and partitioning the other elements into two sub-arrays.',
      registerText: 'Learn more ',
    },
    'merge': {
      title: 'Merge Sort Algorithm',
      description: 'Merge Sort is a divide-and-conquer algorithm that divides the array into halves and merges them in a sorted manner.',
      registerText: 'Learn more about ',
    },
  
  };

  const algorithmKeys = Object.keys(bannerContent);
  const [currentAlgorithm, setCurrentAlgorithm] = useState(algorithmKeys[0]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextAlgorithm =
        algorithmKeys[(algorithmKeys.indexOf(currentAlgorithm) + 1) % algorithmKeys.length];
      setCurrentAlgorithm(nextAlgorithm);
    }, 6000); 

    return () => clearInterval(intervalId);
  }, [currentAlgorithm, algorithmKeys]);

  const currentContent = bannerContent[currentAlgorithm] || bannerContent['bubble'];

  
  const handleBannerClick = () => {
    const algorithmPath = currentAlgorithm.toLowerCase().replace(' ', '');
    navigate(`/visualizer/${algorithmPath}`); 
  };

  return (
    <div
      className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      onClick={handleBannerClick} // Add onClick to navigate
    >
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#635c8a] to-[#1b0c5d] opacity-80"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#4e476a] to-[#7206e7] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm text-gray-100">
          <strong className="font-semibold">{currentContent.title}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {currentContent.description}
        </p>
        <a
          href=""
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          {currentContent.registerText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
  );
}
