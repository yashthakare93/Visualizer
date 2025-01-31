import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="fixed top-0 left-0 w-full lg:bg-gray-900 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div
                    className="hidden lg:block text-4xl font-extrabold text-indigo-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    Easy DSA
                </div>

                <nav className="hidden lg:flex space-x-12">
                    <NavItem href="https://github.com/yashthakare93" target="_blank" rel="noopener noreferrer" label="Github" />
                    <NavItem href="https://yashthakare.vercel.app/" target="_blank" rel="noopener noreferrer" label="Portfolio" />
                    <NavItem href="/contact" label="Contact" />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}
                        className="text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 shadow-lg">
                    <div className="flex flex-col p-4 space-y-2">
                        <NavItem href="/github" label="Github" />
                        <NavItem href="/portfolio" label="Portfolio" />
                        <NavItem href="/features" label="Features" />
                        <NavItem href="/contact" label="Contact" />
                    </div>
                </div>
            )}
        </header>
    );
};

const NavItem = ({ href, label }) => (
    <a
        href={href}
        className="text-base font-medium text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out"
    >
        {label}
    </a>
);

const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12a2.25 2.25 0 0 1 2.25 2.25v0a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 6v0Zm0 12A2.25 2.25 0 0 1 6 15.75h12a2.25 2.25 0 0 1 2.25 2.25v0a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v0Z"
        />
    </svg>
);

const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

export default Navbar;
