import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const letters = "Visualize ".split("").concat(
        <span className="font-bold text-purple-600 font-serif rounded px-1">Sorting Algorithms</span>
    );

    const variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const letterVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    };

    const features = [
        'Real-Time Visualization of Sorting Steps',
        'Adjustable Speed Control for Animations',
        'Step-by-Step Execution for Learning',
        'Customizable Animation Speed Adjustment',
        'Compare Different Sorting Algorithms Side-by-Side',
        'Dynamic Data Generation for Unique Scenarios',
        'Display of Time Complexity ',
        'Educational Tooltips for Algorithm Insights'
    ];

    return (
        <main className="flex-grow mt-20 text-white flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 py-20 sm:px-10 lg:px-14">
                {/* Main Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-6 text-center md:text-left">
                        <motion.h1
                            className="text-5xl font-serif font-extrabold leading-tight tracking-tight"
                            initial="initial"
                            animate="animate"
                            variants={variants}
                        >
                            {letters.map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
                            Discover and interact with Sorting Algorithms through
                            an immersive, feature-rich platform designed to enhance your understanding.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/visualizer"
                                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-300"
                            >
                                Explore the Visualizer
                            </a>
                        </div>
                    </div>
                    {/* Feature List */}
                    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                                className="flex items-center bg-gray-800 rounded-lg p-4 shadow-lg"
                            >
                                <motion.div
                                    className="mr-3 text-indigo-500"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: index * 0.15 + 0.1,
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </motion.div>
                                <span className="text-lg text-gray-200 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
