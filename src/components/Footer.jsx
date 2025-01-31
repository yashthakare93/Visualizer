import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 pt-10 pb-6 relative px-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logo & About */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <div className="w-60 hidden lg:block">
                            <a href="/" className="flex items-center space-x-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/7690/7690595.png" // Replace with your logo's file path or URL
                                    alt="Logo"
                                    className="w-8 h-8" // Adjust the size as needed
                                />
                                <span className="text-2xl font-bold text-slate-100">
                                    AlgoVisualizer
                                </span>
                            </a>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="/" className="hover:text-white">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="hover:text-white">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="#features" className="hover:text-white">Features</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://github.com/yashthakare93" className="hover:text-white">Github</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
                        <ul>

                            <li className="mb-2">
                                <a href="https://visualgo.net/en" target="_blank" className="hover:text-white">
                                    VisuAlgo
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" target="_blank" className="hover:text-white">
                                    GeeksforGeeks
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://cp-algorithms.com/" target="_blank" className="hover:text-white">
                                    CP-Algorithms
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.javatpoint.com/data-structure-tutorial" target="_blank" className="hover:text-white">
                                    JavaTpoint
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
                        <ul>
                            <li className="mb-2 flex items-center">
                                <FaGithub className="text-white mr-2" />
                                <a
                                    href="https://github.com/yasthakare93"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaLinkedin className="text-white mr-2" />
                                <a
                                    href="https://www.linkedin.com/in/yash-thakare01/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaEnvelope className="text-white mr-2" />
                                <a href="mailto:thakareyash74@gmail.com" className="hover:text-white">
                                    thakareyash74@gmail.com
                                </a>
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaGlobe className="text-white mr-2" />
                                <a
                                    href="https://yashthakare.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
                    <p>© {new Date().getFullYear()} Algorithm Visualizer by Yash Thakare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
