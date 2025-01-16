import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">© {new Date().getFullYear()} Sorting Visualizer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
