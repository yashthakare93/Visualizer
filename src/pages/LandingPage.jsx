import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageComparison from '../components/ImageComparison';
import Hero from '../components/Hero';

const algorithmImages = {
    bubble: {
        leftImage: "https://miro.medium.com/v2/resize:fit:1052/1*GO0V4wkDAllwRcvTmnIVHQ.png",
        rightImage: "https://miro.medium.com/v2/resize:fit:556/1*CE3G6lsR5wI_2F8xoou8zQ.png"
    },
    quick: {
        leftImage: "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png",
        rightImage: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*mGiUgCT1mbv1Bg7pxf8jCw.png"
    }
};

const LandingPage = () => {
    // Array of algorithms for rendering
    const algorithms = Object.keys(algorithmImages);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col relative overflow-hidden">
            <Navbar />
            <Hero/>
            {/* Comparison Section */}
            <div className="hidden lg:flex flex-col items-center my-16">
                {algorithms.map((algorithm, index) => (
                    <div key={algorithm} className={`flex items-center  w-full max-w-4xl p-4  rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 text-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        {/* Left Image */}
                        <div className="flex-1  flex flex-col items-center">
                            <h2 className="text-black font-serif font-bold text-2xl mb-2">Understanding {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort</h2>
                            <ImageComparison
                                leftImage={algorithmImages[algorithm].leftImage}
                                rightImage={algorithmImages[algorithm].rightImage}
                                className="h-[500px] w-[800px]"
                            />
                            {/* Arrow Link */}
                            <Link to={'/visualizer'} className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700">
                                <span className="mr-2">Learn More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    );
};

export default LandingPage;
