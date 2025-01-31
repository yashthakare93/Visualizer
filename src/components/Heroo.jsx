import React from 'react';
import { FaGithub } from 'react-icons/fa';


const Heroo = () => {
    return (
        <div className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div className="fadeInUp mx-auto max-w-[780px] text-center mb-4">
                            <h1 className="mb-6 text-3xl font-bold leading-snug text-black sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                                Visualize, Learn, and Master Algorithms Effectively
                            </h1>
                            <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-black sm:text-lg sm:leading-[1.44]">
                                Interactive platform for understanding algorithms and data structures with real-time visualizations
                            </p>
                            <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                                <li>
                                    <a
                                        href="/visualizer"
                                        className="inline-flex items-center justify-center rounded-md bg-blue-700 opacity-70 px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                                    >
                                        Get Started
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/yashthakare93"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 rounded-md bg-black opacity-90 px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:text-dark"
                                    >
                                        <FaGithub className="text-xl " />
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                            <div className="flex justify-center ">
                                <img src="hero.png" alt="Description" className="w-[200px] h-[200px]" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heroo;
