import { useState, useEffect } from 'react';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'GitHub', href: 'https://github.com/yashthakare93', external: true }
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 780);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/100 text-black' : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/7690/7690595.png" // Replace with your logo's file path or URL
                            alt="Logo"
                            className="w-8 h-8" // Adjust the size as needed
                        />
                        <span className={`text-2xl font-bold text-gray-900 ${isScrolled ? ' text-black' : ''}`}>
                            AlgoVisualizer
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                className={`px-3 py-2 rounded-md text-sm font-medium text-black ${isScrolled ? ' text-black' : ''} hover:text-primary-600 transition-colors duration-300`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 transition-all duration-300 bg-gray-900 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-900 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 transition-all duration-300 bg-gray-900 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden absolute w-full transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 pt-2 pb-6 bg-white shadow-lg">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                className="px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;